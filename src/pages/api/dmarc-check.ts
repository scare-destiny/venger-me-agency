import type { APIRoute } from 'astro';
import dns from 'dns/promises';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');

  if (!domain) {
    return new Response(JSON.stringify({ error: 'Domain parameter is missing' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  console.log('Domain:', domain);

  try {
    const txtRecords = await dns.resolveTxt(`_dmarc.${domain}`);
    const dmarcRecord = txtRecords.flat().find((record) => record.startsWith('v=DMARC1'));

    if (dmarcRecord) {
      console.log(dmarcRecord);
      return new Response(JSON.stringify({ dmarcRecord }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'No DMARC record found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error: unknown) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
