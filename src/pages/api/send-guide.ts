export const prerender = false;

const SITE = 'https://www.sellingwithnas.com';

type Guide = {
  pdfUrl: string;
  subject: string;
  title: string;
  emoji: string;
  // Hidden inbox preview text shown next to the subject line.
  preheader?: string;
  // When true, render the "Who's Nas?" intro block instead of the short
  // "Questions? Reply..." line (used for the first-touch lead-magnet email).
  showAbout?: boolean;
};

const GUIDES: Record<string, Guide> = {
  'claude-skills': {
    pdfUrl: `${SITE}/guides/claude-skills-guide.pdf`,
    subject: 'Your Claude Skills Guide is here ⚡',
    title: 'Claude Skills Guide',
    emoji: '⚡',
    preheader: 'Grab your download and start mastering Claude.',
    showAbout: true,
  },
  'claude-code-setup': {
    pdfUrl: `${SITE}/guides/claude-code-setup-guide.pdf`,
    subject: 'Your Claude Code Setup Guide 💻',
    title: 'Claude Code Setup Guide',
    emoji: '💻',
    showAbout: true,
  },
  'claude-website-design': {
    pdfUrl: `${SITE}/guides/Claude-website-design.pdf`,
    subject: 'Your Website Design Skills Guide 🎨',
    title: 'Website Design Skills Guide',
    emoji: '🎨',
    preheader: 'The skills that stop Claude from building AI slop.',
    showAbout: true,
  },
};

const DEFAULT_GUIDE = 'claude-skills';

// Brand accent used for links throughout the email.
const PURPLE = '#a855f7';
// Orange → purple, weighted toward purple, with a solid-purple fallback for
// clients (e.g. Outlook) that ignore CSS gradients.
const BAR_STYLE = 'background-color:#a855f7;background-image:linear-gradient(90deg,#f97316 0%,#a855f7 60%);';
const BTN_STYLE = 'background-color:#a855f7;background-image:linear-gradient(135deg,#f97316 0%,#a855f7 65%);';

// First-touch intro block ("Who's Nas?") shown when guide.showAbout is set.
const aboutBlock = `
          <table cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
            <tr>
              <td valign="middle" width="70" style="padding-right:14px;">
                <img src="${SITE}/images/nas-profile.png" width="56" height="56" alt="Nas" style="display:block;width:56px;height:56px;border-radius:50%;object-fit:cover;" />
              </td>
              <td valign="middle">
                <h2 style="margin:0 0 3px;font-size:1.15rem;font-weight:800;color:#0f172a;line-height:1.2;">Who's Nas?</h2>
                <p style="margin:0;font-size:0.85rem;color:#94a3b8;line-height:1.5;">Quick intro, since this is the first time you're hearing from me directly</p>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 16px;font-size:0.92rem;color:#475569;line-height:1.7;">I'm Nas. I've built and shipped 50+ AI-powered products in the last year. And over 150K people have watched my AI tutorials on YouTube.</p>
          <p style="margin:0 0 16px;font-size:0.92rem;color:#475569;line-height:1.7;">Over the next few emails, I'm going to walk you through the settings, skills, and workflows that separate people casually chatting with Claude from people actually building with it, all the way up to creating your first AI agent. No fluff, just the stuff I actually use.</p>
          <p style="margin:0 0 16px;font-size:0.92rem;color:#475569;line-height:1.7;">Keep an eye on your inbox, the next one's coming soon!</p>
          <p style="margin:0 0 16px;font-size:0.92rem;color:#475569;line-height:1.7;">Have questions? Hit the reply button, I love hearing from you.</p>
          <p style="margin:0;font-size:0.92rem;font-weight:700;color:#0f172a;line-height:1.7;">- Nas</p>`;

// Fallback block for guides that don't use the intro.
const questionsBlock = `
          <p style="margin:0;font-size:0.88rem;color:#64748b;line-height:1.7;">
            Questions? Reply to this email or write to <a href="mailto:nas@talktomedata.com" style="color:${PURPLE};font-weight:600;">nas@talktomedata.com</a>
          </p>`;

const html = (guide: Guide) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  ${
    guide.preheader
      ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f8fafc;">${guide.preheader}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>`
      : ''
  }
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
        <tr><td style="height:5px;${BAR_STYLE}"></td></tr>
        <tr><td style="padding:40px 40px 32px;">
          <p style="margin:0 0 8px;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f97316;">Free Guide</p>
          <h1 style="margin:0 0 16px;font-size:1.6rem;font-weight:800;color:#0f172a;line-height:1.2;">Your ${guide.title} is here ${guide.emoji}</h1>
          <p style="margin:0 0 28px;font-size:0.97rem;color:#475569;line-height:1.7;">Thanks for grabbing it! Click the button below to download your guide.</p>
          <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
            <tr><td style="border-radius:12px;${BTN_STYLE}">
              <a href="${guide.pdfUrl}" style="display:inline-block;padding:14px 32px;font-size:1rem;font-weight:700;color:#fff;text-decoration:none;border-radius:12px;">Download Your Guide →</a>
            </td></tr>
          </table>
          <p style="margin:0 0 4px;font-size:0.88rem;color:#64748b;">Or paste this link in your browser:</p>
          <p style="margin:0 0 32px;font-size:0.82rem;color:#94a3b8;word-break:break-all;">
            <a href="${guide.pdfUrl}" style="color:${PURPLE};">${guide.pdfUrl}</a>
          </p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px;">
          ${guide.showAbout ? aboutBlock : questionsBlock}
        </td></tr>
        <tr><td style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:0.78rem;color:#94a3b8;text-align:center;">
            © 2026 Selling with Nas · <a href="https://www.sellingwithnas.com" style="color:${PURPLE};">sellingwithnas.com</a>
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
