export const prerender = false;

// Captures an email from the Learn AI 101 result screen: syncs the contact to
// Brevo and sends their results plus the discount code via Resend.
//
// Deliberately a separate endpoint rather than a reuse of blog-capture.ts, whose
// Brevo attributes (LAST_BLOG, BLOG_SLUG) and {email, slug, title} contract are
// blog-specific - stuffing a quiz score into `title` is the kind of thing that
// rots. send-guide.ts and blog-capture.ts each carry their own copy of the Brevo
// helper too, so this follows the existing shape rather than inventing a new one.

const REWARD_CODE = 'STARTER';
const REWARD_PRICE = 77;
const FULL_PRICE = 97;
const PACK_URL = 'https://www.sellingwithnas.com/ai-masterclass-with-nas?from=ai101';

// Mirrors the resilient helper in blog-capture.ts: any failure is logged and
// swallowed, and if Brevo rejects an attribute it is not configured to hold, we
// retry without attributes so the contact is still captured.
async function addToBrevoList(email: string, score: number, total: number, tier: string) {
  const apiKey = import.meta.env.BREVO_API_KEY;
  const listId = Number(import.meta.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId) || listId <= 0) {
    console.warn(
      `Brevo not configured - skipping contact sync. apiKeyPresent=${Boolean(apiKey)} listIdRaw=${JSON.stringify(import.meta.env.BREVO_LIST_ID)}`
    );
    return false;
  }

  const post = (body: Record<string, unknown>) =>
    fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

  try {
    let res = await post({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes: {
        SOURCE: 'learn-ai-101',
        AI101_SCORE: score,
        AI101_TOTAL: total,
        AI101_TIER: tier,
      },
    });

    if (!res.ok) {
      const firstErr = await res.text();
      console.error('Brevo sync (with attributes) failed:', res.status, firstErr, '- retrying without attributes.');

      res = await post({ email, listIds: [listId], updateEnabled: true });

      if (!res.ok) {
        const secondErr = await res.text();
        console.error('Brevo sync (no attributes) failed:', res.status, secondErr);
        return false;
      }
    }

    console.log(`Brevo: contact ${email} added to list ${listId} (status ${res.status}).`);
    return true;
  } catch (err) {
    console.error('Brevo contact sync error:', err);
    return false;
  }
}

function resultsEmail(score: number, total: number, tier: string) {
  const recap = [
    'An AI predicts text - it does not look up facts. That one idea explains nearly everything it does.',
    'Confident and correct are different things. Facts, numbers and citations always get checked.',
    'A prompt is a brief, not a question: role, task, context, constraints, format.',
    'Context is the lever almost nobody pulls. Give it what it cannot possibly know.',
    'An agent does things. That is the difference between advice and a finished website.',
  ];

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f6f8;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f8;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:28px 30px 8px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#a855f7;">Learn AI 101</p>
                <h1 style="margin:0 0 6px;font-size:24px;line-height:1.25;letter-spacing:-.02em;">You scored ${score}/${total}${tier ? ` — ${tier}` : ''}</h1>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#64748b;">Nice work finishing it. Here's the short version of what you now know, so it sticks.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 30px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${recap
                    .map(
                      (r) =>
                        `<tr><td style="padding:0 0 11px;font-size:14px;line-height:1.6;color:#334155;"><span style="color:#a855f7;font-weight:700;">&#10003;</span>&nbsp;${r}</td></tr>`
                    )
                    .join('')}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 30px 26px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:1px solid rgba(34,197,94,.3);border-radius:12px;">
                  <tr>
                    <td style="padding:20px 22px;text-align:center;">
                      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#15803d;">Your discount code</p>
                      <p style="margin:0 0 12px;font-size:22px;font-weight:800;letter-spacing:.12em;font-family:ui-monospace,Menlo,monospace;">${REWARD_CODE}</p>
                      <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#334155;">
                        <span style="text-decoration:line-through;color:#94a3b8;">$${FULL_PRICE}</span>
                        &nbsp;<strong style="font-size:18px;">$${REWARD_PRICE}</strong>
                        on the pack that takes you from nothing to a real website live on your own domain.
                      </p>
                      <a href="${PACK_URL}" style="display:inline-block;padding:13px 26px;border-radius:12px;background:linear-gradient(135deg,#f97316,#a855f7);color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;">Use my code &rarr;</a>
                      <p style="margin:12px 0 0;font-size:12px;color:#94a3b8;">Applied automatically when you click through.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 30px 28px;">
                <p style="margin:0;font-size:14px;line-height:1.65;color:#64748b;">
                  Any questions, just reply to this - it comes straight to me.
                </p>
                <p style="margin:14px 0 0;font-size:14px;color:#0f172a;">&mdash; Nas</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:11px;color:#94a3b8;">You got this because you asked for your results at sellingwithnas.com/learn-ai-101.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendResults(email: string, score: number, total: number, tier: string) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY missing - skipping results email.');
    return false;
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nas <nas@talktomedata.com>',
        to: [email],
        bcc: ['nas@talktomedata.com'],
        reply_to: 'nas@talktomedata.com',
        subject: `Your AI 101 results (${score}/${total}) + your ${REWARD_CODE} code`,
        html: resultsEmail(score, total, tier),
      }),
    });

    if (!res.ok) {
      console.error('Resend failed:', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('Resend error:', err);
    return false;
  }
}

export async function POST({ request }: { request: Request }) {
  let email: string | undefined;
  let score = 0;
  let total = 0;
  let tier = '';

  try {
    const body = await request.json();
    email = (body?.email as string | undefined)?.trim();
    score = Number(body?.score) || 0;
    total = Number(body?.total) || 0;
    tier = ((body?.tier as string | undefined) ?? '').trim().slice(0, 40);
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid-body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid-email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Both are attempted; neither failing should block the visitor, who already
  // has the code on screen. `synced`/`sent` are for the logs.
  const [synced, sent] = await Promise.all([
    addToBrevoList(email, score, total, tier),
    sendResults(email, score, total, tier),
  ]);

  return new Response(JSON.stringify({ ok: true, synced, sent }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
