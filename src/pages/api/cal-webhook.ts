export const prerender = false;

/**
 * Cal.com booking webhook -> Meta Conversions API.
 *
 * Cal.com calls this endpoint whenever someone books the live session. We verify
 * the signature, then report a `Schedule` event to Meta server-side so campaigns
 * can optimise for actual bookings rather than landing page views.
 *
 * Why server-side: the booking itself happens on cal.com, not on our domain, so
 * the browser pixel never sees it. This webhook is the only signal we get.
 *
 * Required env vars (see .env.example):
 *   META_CAPI_ACCESS_TOKEN  - Conversions API token from Meta Events Manager
 *   CAL_WEBHOOK_SECRET      - the secret you set on the Cal.com webhook
 * Optional:
 *   META_PIXEL_ID           - defaults to the live-session pixel
 *   META_TEST_EVENT_CODE    - set while testing to route events to Test Events
 *   META_API_VERSION        - defaults to v21.0
 */

const DEFAULT_PIXEL_ID = '1700269051050500';
const EVENT_SOURCE_URL = 'https://www.sellingwithnas.com/live-session';

const enc = new TextEncoder();

const toHex = (buf: ArrayBuffer) =>
  Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

/** SHA-256 hex - Meta requires all PII normalised then hashed before it is sent. */
async function sha256(value: string): Promise<string> {
  return toHex(await crypto.subtle.digest('SHA-256', enc.encode(value)));
}

/** Constant-time string compare, so a bad signature can't be guessed byte by byte. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function signatureMatches(rawBody: string, secret: string, received: string): Promise<boolean> {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
  ]);
  const expected = toHex(await crypto.subtle.sign('HMAC', key, enc.encode(rawBody)));
  return safeEqual(expected.toLowerCase(), received.trim().toLowerCase());
}

/**
 * Cal.com has shipped two shapes for booking answers over the years:
 * `responses.email` as a bare string, or as `{ label, value }`. Read either.
 */
function readResponse(responses: Record<string, unknown> | undefined, key: string): string | undefined {
  const entry = responses?.[key];
  if (typeof entry === 'string') return entry.trim() || undefined;
  if (entry && typeof entry === 'object' && 'value' in entry) {
    const v = (entry as { value: unknown }).value;
    if (typeof v === 'string') return v.trim() || undefined;
  }
  return undefined;
}

/** Meta wants email lowercased and trimmed, phone digits-only, names lowercased. */
async function buildUserData(payload: Record<string, any>) {
  const attendee = Array.isArray(payload?.attendees) ? payload.attendees[0] : undefined;
  const responses = payload?.responses as Record<string, unknown> | undefined;

  const email = (attendee?.email ?? readResponse(responses, 'email'))?.toString().trim().toLowerCase();
  const name = (attendee?.name ?? readResponse(responses, 'name'))?.toString().trim();
  const phoneRaw = (attendee?.phoneNumber ?? readResponse(responses, 'attendeePhoneNumber'))?.toString();

  const userData: Record<string, unknown> = {};

  if (email) userData.em = [await sha256(email)];

  if (name) {
    const parts = name.toLowerCase().split(/\s+/).filter(Boolean);
    if (parts.length) userData.fn = [await sha256(parts[0])];
    if (parts.length > 1) userData.ln = [await sha256(parts[parts.length - 1])];
  }

  const digits = phoneRaw?.replace(/\D/g, '');
  if (digits && digits.length >= 7) userData.ph = [await sha256(digits)];

  // fbp/fbc dramatically improve match quality because they tie the booking back
  // to the exact ad click. They only exist here if the live-session page passed
  // them through the booking link (see the hidden Cal.com fields in the README
  // notes) - everything still works without them, just with weaker matching.
  const fbp = readResponse(responses, 'fbp') ?? (payload?.metadata?.fbp as string | undefined);
  const fbc = readResponse(responses, 'fbc') ?? (payload?.metadata?.fbc as string | undefined);
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  return { userData, hasEmail: Boolean(email) };
}

export async function POST({ request }: { request: Request }) {
  const accessToken = import.meta.env.META_CAPI_ACCESS_TOKEN;
  const webhookSecret = import.meta.env.CAL_WEBHOOK_SECRET;
  const pixelId = import.meta.env.META_PIXEL_ID || DEFAULT_PIXEL_ID;
  const apiVersion = import.meta.env.META_API_VERSION || 'v21.0';
  const testEventCode = import.meta.env.META_TEST_EVENT_CODE;

  // Read the raw body first - the signature is over the exact bytes Cal.com sent,
  // so re-serialising parsed JSON would not match.
  const rawBody = await request.text();

  if (!webhookSecret) {
    console.error('CAL_WEBHOOK_SECRET is not set - refusing to trust this webhook.');
    return json({ ok: false, error: 'not-configured' }, 500);
  }

  const received = request.headers.get('x-cal-signature-256') ?? '';
  if (!received || !(await signatureMatches(rawBody, webhookSecret, received))) {
    console.warn('Cal webhook rejected: signature mismatch.');
    return json({ ok: false, error: 'bad-signature' }, 401);
  }

  let body: Record<string, any>;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, error: 'invalid-json' }, 400);
  }

  const trigger = body?.triggerEvent;
  if (trigger !== 'BOOKING_CREATED') {
    // Cal.com may send cancellations/reschedules on the same hook. Acknowledge
    // them so it doesn't retry, but don't report them as conversions.
    console.log(`Cal webhook: ignoring triggerEvent=${trigger}.`);
    return json({ ok: true, ignored: trigger }, 200);
  }

  if (!accessToken) {
    console.error('META_CAPI_ACCESS_TOKEN is not set - booking received but no event sent.');
    return json({ ok: true, sent: false, error: 'no-token' }, 200);
  }

  const payload = body?.payload ?? {};

  // Only the live-session event type should count as an ad conversion. If the
  // webhook is registered account-wide in Cal.com it also fires for mentorship
  // calls, contact bookings, etc. - reporting those as Schedule conversions
  // would teach Meta to optimise towards the wrong audience.
  //
  // Left unset this filter is inactive (every booking is reported). The observed
  // event type is always logged, so you can read the exact value to filter on.
  const eventTypeSlug = payload?.eventType?.slug ?? payload?.type ?? '';
  const wantedSlug = import.meta.env.CAL_EVENT_TYPE_SLUG;
  console.log(`Cal webhook: booking on eventType="${eventTypeSlug}" (filter=${wantedSlug || 'none'}).`);

  if (wantedSlug && eventTypeSlug !== wantedSlug) {
    return json({ ok: true, sent: false, skipped: 'other-event-type', eventType: eventTypeSlug }, 200);
  }
  const { userData, hasEmail } = await buildUserData(payload);

  if (!hasEmail) {
    // Without at least one identifier Meta cannot attribute the conversion.
    console.error('Cal webhook: booking had no attendee email - skipping CAPI send.');
    return json({ ok: true, sent: false, error: 'no-identifier' }, 200);
  }

  // Deduplication key. Cal.com retries failed webhooks, and Meta collapses
  // repeats of the same event_id + event_name, so a retry can't double-count.
  const eventId = `cal-${payload?.uid ?? payload?.bookingId ?? Date.now()}`;

  const createdAt = Date.parse(body?.createdAt ?? '');
  const eventTime = Math.floor((Number.isFinite(createdAt) ? createdAt : Date.now()) / 1000);

  const event: Record<string, unknown> = {
    event_name: 'Schedule',
    event_time: eventTime,
    event_id: eventId,
    action_source: 'website',
    event_source_url: EVENT_SOURCE_URL,
    user_data: userData,
    custom_data: {
      content_name: payload?.title ?? 'Live session booking',
      content_category: 'webinar-registration',
    },
  };

  const requestBody: Record<string, unknown> = { data: [event] };
  if (testEventCode) requestBody.test_event_code = testEventCode;

  try {
    const res = await fetch(`https://graph.facebook.com/${apiVersion}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...requestBody, access_token: accessToken }),
    });

    const result = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error('Meta CAPI rejected the event:', res.status, JSON.stringify(result));
      return json({ ok: true, sent: false, status: res.status }, 200);
    }

    console.log(`Meta CAPI: Schedule event sent for booking ${eventId}.`, JSON.stringify(result));
    return json({ ok: true, sent: true, eventId }, 200);
  } catch (err) {
    // Never fail the webhook on our side - a 500 makes Cal.com retry, and the
    // booking itself is already confirmed regardless of what Meta thinks.
    console.error('Meta CAPI request error:', err);
    return json({ ok: true, sent: false, error: 'capi-request-failed' }, 200);
  }
}

/** Config check for setup/debugging. Reports presence only - never values. */
export async function GET() {
  return json(
    {
      ok: true,
      endpoint: 'cal-webhook',
      configured: {
        accessToken: Boolean(import.meta.env.META_CAPI_ACCESS_TOKEN),
        webhookSecret: Boolean(import.meta.env.CAL_WEBHOOK_SECRET),
        pixelId: import.meta.env.META_PIXEL_ID || DEFAULT_PIXEL_ID,
        testMode: Boolean(import.meta.env.META_TEST_EVENT_CODE),
      },
    },
    200
  );
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
