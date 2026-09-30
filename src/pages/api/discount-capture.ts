export const prerender = false;

// Captures an email from the discount popup on /ai-masterclass-with-nas and
// adds the contact to the Brevo list, in exchange for the STARTER code.
//
// Follows the shape of blog-capture.ts / learn-capture.ts (each carries its own
// copy of the Brevo helper): any failure is logged and swallowed so the visitor
// still gets the code, and if Brevo rejects an attribute the account does not
// define, we retry without attributes so the contact is still captured.
async function addToBrevoList(email: string) {
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
      attributes: { SOURCE: 'masterclass-discount-popup' },
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

export async function POST({ request }: { request: Request }) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = (body?.email as string | undefined)?.trim();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid-body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid-email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const synced = await addToBrevoList(email);

  // A Brevo hiccup should not cost a real visitor their code. `synced` is for the logs.
  return new Response(JSON.stringify({ ok: true, synced }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
