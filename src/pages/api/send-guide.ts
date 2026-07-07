export const prerender = false;

const SITE = 'https://www.sellingwithnas.com';

type Guide = {
  pdfUrl: string;
  subject: string;
  title: string;
  emoji: string;
};

const GUIDES: Record<string, Guide> = {
  'claude-skills': {
    pdfUrl: `${SITE}/guides/claude-skills-guide.pdf`,
    subject: 'Your Best Claude Skills Guide ⚡',
    title: 'Best Claude Skills Guide',
    emoji: '⚡',
  },
  'claude-code-setup': {
    pdfUrl: `${SITE}/guides/claude-code-setup-guide.pdf`,
    subject: 'Your Claude Code Setup Guide 💻',
    title: 'Claude Code Setup Guide',
    emoji: '💻',
  },
};

const DEFAULT_GUIDE = 'claude-skills';

const html = (guide: Guide) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
        <tr><td style="height:5px;background:linear-gradient(90deg,#f97316,#ef4444);"></td></tr>
        <tr><td style="padding:40px 40px 32px;">
          <p style="margin:0 0 8px;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f97316;">Free Guide</p>
          <h1 style="margin:0 0 16px;font-size:1.6rem;font-weight:800;color:#0f172a;line-height:1.2;">Your ${guide.title} is here ${guide.emoji}</h1>
          <p style="margin:0 0 28px;font-size:0.97rem;color:#475569;line-height:1.7;">Thanks for grabbing it! Click the button below to download your guide.</p>
          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="border-radius:12px;background:linear-gradient(135deg,#f97316,#ef4444);">
              <a href="${guide.pdfUrl}" style="display:inline-block;padding:14px 32px;font-size:1rem;font-weight:700;color:#fff;text-decoration:none;border-radius:12px;">Download Your Guide →</a>
            </td></tr>
          </table>
          <p style="margin:0 0 4px;font-size:0.88rem;color:#64748b;">Or paste this link in your browser:</p>
          <p style="margin:0 0 32px;font-size:0.82rem;color:#94a3b8;word-break:break-all;">
            <a href="${guide.pdfUrl}" style="color:#f97316;">${guide.pdfUrl}</a>
          </p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px;">
          <p style="margin:0;font-size:0.88rem;color:#64748b;line-height:1.7;">
            Questions? Reply to this email or write to <a href="mailto:nas@talktomedata.com" style="color:#f97316;font-weight:600;">nas@talktomedata.com</a>
          </p>
        </td></tr>
        <tr><td style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:0.78rem;color:#94a3b8;text-align:center;">
            © 2026 Selling with Nas · <a href="https://www.sellingwithnas.com" style="color:#94a3b8;">sellingwithnas.com</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

// Adds/updates the contact in Brevo and adds them to the configured list.
// Runs after the guide email is sent and never blocks delivery: any failure
// is logged and swallowed so the visitor still gets their guide.
async function addToBrevoList(email: string, guideKey: string, guide: Guide) {
  const apiKey = import.meta.env.BREVO_API_KEY;
  const listId = Number(import.meta.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId) || listId <= 0) {
    console.warn(
      `Brevo not configured - skipping contact sync. apiKeyPresent=${Boolean(apiKey)} listIdRaw=${JSON.stringify(import.meta.env.BREVO_LIST_ID)}`
    );
    return;
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
    // First attempt includes attributes for segmentation.
    let res = await post({
      email,
      listIds: [listId],
      updateEnabled: true, // add existing contacts to the list instead of erroring
      attributes: {
        LAST_GUIDE: guide.title,
        LAST_GUIDE_KEY: guideKey,
        SOURCE: 'guide-download',
      },
    });

    // Brevo rejects the whole request if any attribute is not defined in the
    // account. In that case, retry without attributes so the contact is still
    // added to the list (the core goal).
    if (!res.ok) {
      const firstErr = await res.text();
      console.error('Brevo sync (with attributes) failed:', res.status, firstErr, '- retrying without attributes.');

      res = await post({
        email,
        listIds: [listId],
        updateEnabled: true,
      });

      if (!res.ok) {
        const secondErr = await res.text();
        console.error('Brevo sync (no attributes) failed:', res.status, secondErr);
        return;
      }
    }

    console.log(`Brevo: contact ${email} added to list ${listId} (status ${res.status}).`);
  } catch (err) {
    console.error('Brevo contact sync error:', err);
  }
}

export async function POST({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = (formData.get('email') as string | null)?.trim();
  const guideKey = (formData.get('guide') as string | null)?.trim() || DEFAULT_GUIDE;
  const guide = GUIDES[guideKey] ?? GUIDES[DEFAULT_GUIDE];

  const base = new URL(request.url).origin;

  if (!email || !email.includes('@')) {
    return Response.redirect(`${base}/guides?error=invalid-email`, 302);
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nas <nas@talktomedata.com>',
        to: [email],
        bcc: ['nas@talktomedata.com'],
        reply_to: 'nas@talktomedata.com',
        subject: guide.subject,
        html: html(guide),
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ ok: false }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email sent - now add the contact to Brevo (non-blocking on failure).
    await addToBrevoList(email, guideKey, guide);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
