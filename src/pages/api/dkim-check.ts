// src/pages/dkim-check.ts
import type { APIRoute } from 'astro';
import dns from 'dns/promises';

const selectors = [
  'google',
  'selector1',
  'selector2',
  'everlytickey1',
  'everlytickey2',
  'eversrv',
  'k1',
  'mxvault',
  'dkim',
]; // Add more selectors as needed

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');

  console.log('Domain:', domain);

  const dkimResults = {};

  for (const selector of selectors) {
    try {
      const txtRecords = await dns.resolveTxt(`${selector}._domainkey.${domain}`);
      console.log(txtRecords);
      const dkimRecord = txtRecords.flat().join(' ');
      dkimResults[selector] = dkimRecord;
    } catch (error) {
      dkimResults[selector] = null;
    }
  }

  return new Response(JSON.stringify({ dkimResults }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
