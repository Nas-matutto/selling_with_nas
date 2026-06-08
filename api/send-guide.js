export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed');
  }

  // Vercel serverless functions don't auto-parse form bodies outside Next.js,
  // so we read the raw stream and parse it manually.
  const rawBody = await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk.toString(); });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

  const params = new URLSearchParams(rawBody);
  const email = params.get('email');

  if (!email || !email.includes('@')) {
    console.error('Invalid or missing email. Raw body:', rawBody);
    return res.redirect(302, '/guides?error=invalid-email');
  }

  const pdfUrl = 'https://www.sellingwithnas.com/guides/claude-skills-guide.pdf';

  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Best Claude Skills Guide</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
          <tr>
            <td style="height:5px;background:linear-gradient(90deg,#f97316,#ef4444);"></td>
          </tr>
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 8px;font-size:0.78rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f97316;">Free Guide</p>
              <h1 style="margin:0 0 16px;font-size:1.6rem;font-weight:800;color:#0f172a;letter-spacing:-0.02em;line-height:1.2;">Your Best Claude Skills Guide is here ⚡</h1>
              <p style="margin:0 0 28px;font-size:0.97rem;color:#475569;line-height:1.7;">
                Thanks for grabbing it! Click the button below to download your guide.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="border-radius:12px;background:linear-gradient(135deg,#f97316,#ef4444);">
                    <a href="${pdfUrl}" style="display:inline-block;padding:14px 32px;font-size:1rem;font-weight:700;color:#ffffff;text-decoration:none;border-radius:12px;">
                      Download Your Guide →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 6px;font-size:0.88rem;color:#64748b;">Or paste this link in your browser:</p>
              <p style="margin:0 0 32px;font-size:0.82rem;color:#94a3b8;word-break:break-all;">
                <a href="${pdfUrl}" style="color:#f97316;">${pdfUrl}</a>
              </p>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px;" />
              <p style="margin:0;font-size:0.88rem;color:#64748b;line-height:1.7;">
                Questions? Reply to this email or write to
                <a href="mailto:nas@talktomedata.com" style="color:#f97316;font-weight:600;">nas@talktomedata.com</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
              <p style="margin:0;font-size:0.78rem;color:#94a3b8;text-align:center;">
                © 2026 Selling with Nas · <a href="https://www.sellingwithnas.com" style="color:#94a3b8;">sellingwithnas.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nas <nas@talktomedata.com>',
        to: [email],
        bcc: ['nas@talktomedata.com'],   // ← you get a silent copy of every lead
        reply_to: 'nas@talktomedata.com',
        subject: 'Your Best Claude Skills Guide ⚡',
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend API error:', err);
      return res.redirect(302, '/guides?error=send-failed');
    }

    console.log('Guide sent to:', email);
    return res.redirect(302, '/guides?sent=best-claude-skills');
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.redirect(302, '/guides?error=send-failed');
  }
}
