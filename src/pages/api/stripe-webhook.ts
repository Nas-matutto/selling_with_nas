/**
 * Stripe fulfilment webhook.
 *
 * Stripe calls this after a successful Checkout payment. We verify the
 * signature ourselves with Web Crypto (same approach as cal-webhook.ts, so no
 * Stripe SDK dependency), then deliver the guides by email and tag the buyer
 * in Brevo.
 *
 * Endpoint to register in Stripe: /api/stripe-webhook
 * Event to subscribe to:          checkout.session.completed
 */
export const prerender = false;

const enc = new TextEncoder();
const SITE = 'https://www.sellingwithnas.com';
const BOOKING_LINK = 'https://cal.com/nas-mansurali/1-on-1-masterclass';

// Brand styling, kept in sync with send-guide.ts.
const PURPLE = '#a855f7';
const BAR_STYLE = 'background-color:#a855f7;background-image:linear-gradient(90deg,#f97316 0%,#a855f7 60%);';
const BTN_STYLE = 'background-color:#a855f7;background-image:linear-gradient(135deg,#f97316 0%,#a855f7 65%);';

/** Vercel exposes runtime secrets on process.env; import.meta.env covers local dev. */
const env = (key: string): string | undefined =>
  (import.meta.env as Record<string, string | undefined>)[key] ?? process.env[key];

/** SHA-256 hex - Meta requires all PII normalised then hashed before it is sent. */
async function sha256(value: string): Promise<string> {
  return toHex(await crypto.subtle.digest('SHA-256', enc.encode(value)));
}

const toHex = (buf: ArrayBuffer): string =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

/** Constant-time compare, so a bad signature can't be guessed byte by byte. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * Verifies the Stripe-Signature header, formatted as "t=<ts>,v1=<hmac>[,v1=...]".
 * The signed payload is `${timestamp}.${rawBody}` - so the body must be read as
 * raw text before any JSON parsing.
 */
async function verifyStripe(rawBody: string, header: string, secret: string): Promise<boolean> {
  let timestamp = '';
  const sigs: string[] = [];

  for (const part of header.split(',')) {
    const [k, v] = part.split('=');
    if (k === 't') timestamp = v;
    else if (k === 'v1') sigs.push(v);
  }
  if (!timestamp || !sigs.length) return false;

  // Reject replays of an old request.
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false;

  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
  ]);
  const expected = toHex(await crypto.subtle.sign('HMAC', key, enc.encode(`${timestamp}.${rawBody}`)));

  return sigs.some((s) => safeEqual(s, expected));
}

/**
 * A Stripe webhook endpoint receives `checkout.session.completed` for EVERY
 * Checkout session on the account - including products that have nothing to do
 * with this site. Without this gate an unrelated buyer is emailed the Selling
 * with Nas guides, added to the buyers list, and counted as a Purchase on the
 * pixel.
 *
 * STRIPE_PAYMENT_LINK_IDS: comma-separated `plink_...` ids behind the buy
 * buttons (Stripe > Payment links > open the link > the id is in the dashboard
 * URL, and in the `payment_link` field of any event this endpoint logs).
 *
 * STRIPE_PRODUCT_TAG: optional second route for sessions not created from a
 * payment link - set the same value as `product` in the session metadata.
 *
 * Neither configured means nothing is fulfilled. Failing closed is the point:
 * a missed delivery is one apologetic reply, a wrong delivery is a stranger
 * holding a product they never bought.
 */
function isThisProduct(session: {
  payment_link?: string | { id?: string } | null;
  metadata?: Record<string, string> | null;
}): boolean {
  const list = (key: string) =>
    (env(key) ?? '')
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean);

  const links = list('STRIPE_PAYMENT_LINK_IDS');
  const tags = list('STRIPE_PRODUCT_TAG');

  if (!links.length && !tags.length) {
    console.error('STRIPE_PAYMENT_LINK_IDS / STRIPE_PRODUCT_TAG unset - refusing to fulfil any session.');
    return false;
  }

  const link = typeof session.payment_link === 'string' ? session.payment_link : (session.payment_link?.id ?? '');
  if (link && links.includes(link)) return true;

  const tag = session.metadata?.product ?? '';
  return Boolean(tag) && tags.includes(tag);
}

const deliveryEmail = (driveUrl: string) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f8fafc;">Your guides and your 1-on-1 booking link are inside.&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
        <tr><td style="height:5px;${BAR_STYLE}"></td></tr>
        <tr><td style="padding:40px 40px 32px;">
          <p style="margin:0 0 8px;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f97316;">You're in</p>
          <h1 style="margin:0 0 16px;font-size:1.6rem;font-weight:800;color:#0f172a;line-height:1.2;">Your guides are ready 🚀</h1>
          <p style="margin:0 0 28px;font-size:0.97rem;color:#475569;line-height:1.7;">Thanks for grabbing the pack. Everything lives in the folder below - bookmark it, it's yours for life and I add to it as the tools change.</p>
          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="border-radius:12px;${BTN_STYLE}">
              <a href="${driveUrl}" style="display:inline-block;padding:14px 32px;font-size:1rem;font-weight:700;color:#fff;text-decoration:none;border-radius:12px;">Open Your Guides →</a>
            </td></tr>
          </table>
          <p style="margin:0 0 4px;font-size:0.88rem;color:#64748b;">Or paste this link in your browser:</p>
          <p style="margin:0 0 32px;font-size:0.82rem;color:#94a3b8;word-break:break-all;">
            <a href="${driveUrl}" style="color:${PURPLE};">${driveUrl}</a>
          </p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px;">
          <h2 style="margin:0 0 12px;font-size:1.15rem;font-weight:800;color:#0f172a;line-height:1.2;">Your 1-on-1 call with me</h2>
          <p style="margin:0 0 16px;font-size:0.92rem;color:#475569;line-height:1.7;">Included in your purchase. Use it whenever you hit a wall - a deploy that won't cooperate, a domain that won't point, or just deciding what to build.</p>
          <p style="margin:0 0 28px;font-size:0.92rem;line-height:1.7;">
            <a href="${BOOKING_LINK}" style="color:${PURPLE};font-weight:700;">Book your session →</a>
          </p>
          <p style="margin:0;font-size:0.88rem;color:#64748b;line-height:1.7;">
            Questions? Just hit reply - I read every one.<br /><br />
            <strong style="color:#0f172a;">- Nas</strong>
          </p>
        </td></tr>
        <tr><td style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:0.78rem;color:#94a3b8;text-align:center;">
            © 2026 Selling with Nas · <a href="${SITE}" style="color:${PURPLE};">sellingwithnas.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

/** Adds the buyer to the Brevo buyers list. Never blocks delivery. */
async function addBuyerToBrevo(email: string, sessionId: string) {
  const apiKey = env('BREVO_API_KEY');
  const listId = Number(env('BREVO_BUYERS_LIST_ID'));

  if (!apiKey || !Number.isFinite(listId) || listId <= 0) {
    console.warn('Brevo buyers list not configured - skipping buyer sync.');
    return;
  }

  const post = (body: Record<string, unknown>) =>
    fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(body),
    });

  try {
    // Brevo rejects the whole request if an attribute isn't defined on the
    // account, so fall back to a bare add - getting them on the list is the goal.
    let res = await post({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: { SOURCE: 'stripe-purchase', LAST_PURCHASE: sessionId },
    });

    if (!res.ok) {
      console.error('Brevo buyer sync (with attributes) failed:', res.status, await res.text(), '- retrying bare.');
      res = await post({ email, listIds: [listId], updateEnabled: true });
      if (!res.ok) console.error('Brevo buyer sync (bare) failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Brevo buyer sync error:', err);
  }
}

/**
 * Reports the sale to Meta server-side so campaigns can optimise for buyers.
 * `eventId` is the Stripe session id, which the browser Purchase on /thank-you
 * also sends - Meta collapses the pair into a single conversion rather than
 * counting it twice. Never blocks delivery.
 */
async function reportPurchaseToMeta(email: string, eventId: string, amountMinor: number, currency: string) {
  const token = env('META_CAPI_ACCESS_TOKEN');
  const pixelId = env('META_PIXEL_ID') ?? '1700269051050500';
  const apiVersion = env('META_API_VERSION') ?? 'v21.0';

  if (!token) {
    console.warn('META_CAPI_ACCESS_TOKEN missing - skipping Purchase event.');
    return;
  }

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: `${SITE}/ai-masterclass-with-nas`,
        user_data: { em: [await sha256(email.trim().toLowerCase())] },
        custom_data: {
          currency: currency.toUpperCase(),
          value: amountMinor / 100,
          content_name: 'Build Your Side-Hustle with Claude',
        },
      },
    ],
    access_token: token,
  };

  const testCode = env('META_TEST_EVENT_CODE');
  if (testCode) payload.test_event_code = testCode;

  try {
    const res = await fetch(`https://graph.facebook.com/${apiVersion}/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) console.error('Meta CAPI Purchase failed:', res.status, await res.text());
    else console.log(`Meta CAPI Purchase reported (event_id ${eventId}).`);
  } catch (err) {
    console.error('Meta CAPI Purchase error:', err);
  }
}

export async function POST({ request }: { request: Request }) {
  // Read the raw body FIRST - the signature is over the exact bytes Stripe sent.
  const rawBody = await request.text();

  const secret = env('STRIPE_WEBHOOK_SECRET');
  const driveUrl = env('DRIVE_FOLDER_URL');

  if (!secret || !driveUrl) {
    console.error(
      `Stripe webhook not configured. secretPresent=${Boolean(secret)} driveUrlPresent=${Boolean(driveUrl)}`
    );
    return json({ ok: false, error: 'not-configured' }, 500);
  }

  const header = request.headers.get('stripe-signature') ?? '';
  if (!(await verifyStripe(rawBody, header, secret))) {
    console.warn('Stripe webhook rejected: signature mismatch.');
    return json({ ok: false, error: 'bad-signature' }, 401);
  }

  let event: { type?: string; data?: { object?: Record<string, never> } };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return json({ ok: false, error: 'bad-json' }, 400);
  }

  if (event.type !== 'checkout.session.completed') {
    return json({ ok: true, ignored: event.type }, 200);
  }

  const session = (event.data?.object ?? {}) as Record<string, never> & {
    id?: string;
    payment_status?: string;
    amount_total?: number | null;
    currency?: string | null;
    customer_email?: string | null;
    customer_details?: { email?: string | null } | null;
    payment_link?: string | { id?: string } | null;
    metadata?: Record<string, string> | null;
  };

  // Which product was bought - checked before anything else, because every
  // side effect below (email, buyers list, pixel) is wrong for a foreign sale.
  if (!isThisProduct(session)) {
    console.log(`Session ${session.id} is not this product (payment_link=${JSON.stringify(session.payment_link)}) - skipping.`);
    return json({ ok: true, skipped: 'other-product' }, 200);
  }

  // Fulfil paid orders, and $0 orders from a 100%-off promotion code - Stripe
  // reports those as `no_payment_required`, not `paid`. Anything else (notably
  // `unpaid`, e.g. a delayed bank debit still clearing) is not yet a sale.
  const FULFILLABLE = ['paid', 'no_payment_required'];
  if (!FULFILLABLE.includes(session.payment_status ?? '')) {
    console.log(`Session ${session.id} completed but not payable yet (${session.payment_status}) - not fulfilling.`);
    return json({ ok: true, unpaid: true }, 200);
  }

  const email = (session.customer_details?.email ?? session.customer_email ?? '').trim();
  if (!email) {
    console.error('Paid session with no email address:', session.id);
    return json({ ok: true, noEmail: true }, 200);
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nas <nas@talktomedata.com>',
        to: [email],
        bcc: ['nas@talktomedata.com'],
        reply_to: 'nas@talktomedata.com',
        subject: 'Your guides are ready 🚀',
        html: deliveryEmail(driveUrl),
      }),
    });

    if (!res.ok) {
      // Deliberately not a 500: Stripe would retry for days and re-send the
      // email. The BCC is the safety net - resend by hand if this ever fires.
      console.error('Resend error delivering guides to', email, await res.text());
    } else {
      console.log(`Guides delivered to ${email} (session ${session.id}).`);
    }
  } catch (err) {
    console.error('Delivery email threw for', email, err);
  }

  await addBuyerToBrevo(email, session.id ?? 'unknown');

  if (session.id) {
    await reportPurchaseToMeta(email, session.id, session.amount_total ?? 0, session.currency ?? 'usd');
  }

  return json({ ok: true }, 200);
}
