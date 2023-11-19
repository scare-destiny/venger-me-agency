import type { APIRoute } from 'astro';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: 'hello there',
        },
      ],
      // ... other options
    });

    console.log('Completion', completion);

    return new Response(JSON.stringify({ completion }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
