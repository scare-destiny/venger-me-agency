// src/pages/ssl-check.ts
import type { APIRoute } from 'astro';
import https from 'https';
import tls from 'tls';

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

  return new Promise((resolve) => {
    const options = {
      host: domain,
      port: 443,
      method: 'GET',
      rejectUnauthorized: false,
    };

    const req = https.request(options, (res) => {
      const certificate = res.socket.getPeerCertificate();
      console.log(certificate);

      if (tls.checkServerIdentity(domain, certificate)) {
        resolve(
          new Response(JSON.stringify({ error: 'Certificate validation failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      } else {
        resolve(
          new Response(JSON.stringify({ certificateExists: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      }
    });

    req.on('error', (e) => {
      resolve(
        new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      );
    });

    req.end();
  });
};
