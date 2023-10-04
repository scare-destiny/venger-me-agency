// src/pages/spf-check.ts
import type { APIRoute } from 'astro';
import dns from 'dns/promises';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');

  console.log('Domain:', domain);

  // console.log('Request:', request);

  try {
    const txtRecords = await dns.resolveTxt(domain);
    const spfRecord = txtRecords.flat().find((record) => record.startsWith('v=spf1'));

    if (spfRecord) {
      return new Response(JSON.stringify({ spfRecord }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'No SPF record found' }), {
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
