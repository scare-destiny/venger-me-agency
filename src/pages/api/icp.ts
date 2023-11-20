export const prerender = false;

import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
};
