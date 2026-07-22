export const prerender = false;

// Adds/updates the contact in Brevo and adds them to the configured list.
// Mirrors the resilient helper in send-guide.ts: any failure is logged and
// swallowed so the visitor still unlocks the post. If Brevo rejects undefined
// attributes, we retry without them so the email is still captured.
async function addToBrevoList(email: string, slug: string, title: string) {
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
    // First attempt includes attributes for segmentation.
    let res = await post({
      email,
      listIds: [listId],
      updateEnabled: true, // add existing contacts to the list instead of erroring
      attributes: {
        SOURCE: 'blog-gate',
        LAST_BLOG: title,
        BLOG_SLUG: slug,
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

export async function POST({ request }: { request: Request }) {
  let email: string | undefined;
  let slug = '';
  let title = '';

  try {
    const body = await request.json();
    email = (body?.email as string | undefined)?.trim();
    slug = ((body?.slug as string | undefined) ?? '').trim();
    title = ((body?.title as string | undefined) ?? '').trim();
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

  const added = await addToBrevoList(email, slug, title);

  // Capture-only: we always let the reader through once we've attempted the
  // sync. `added` reflects whether Brevo accepted the contact (useful in logs),
  // but a Brevo hiccup should not lock a real visitor out of the post.
  return new Response(JSON.stringify({ ok: true, synced: added }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
