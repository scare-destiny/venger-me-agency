import type { APIRoute } from 'astro';
import dns from 'dns/promises';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');

  console.log(`Domain for MX is ${domain}`);

  try {
    const mxRecords = await dns.resolveMx(domain);

    if (mxRecords && mxRecords.length > 0) {
      return new Response(JSON.stringify({ mxRecords }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'No MX records found' }), {
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
