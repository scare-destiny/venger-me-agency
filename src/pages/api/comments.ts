import { createClient } from "@supabase/supabase-js";
import type { APIRoute } from "astro";

// const supabase = createClient(process.env.DATABASE, process.env.DATABASE_KEY);

// const rateLimit = rateLimitLib.default({
//   interval: 60 * 1000, // One minute
// }).check;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  console.log(data)
//   const parsedData = JSON.parse(rawData);
//   const { name, comment, id: blog_id, last_name } = parsedData;

//  // Insert into Supabase
//  const { data, error } = await supabase
//  .from('comments')
//  .insert([{ name, comment, blog_id }]);

// if (error) {
//  return new Response(JSON.stringify({ message: error.message }), {
//    status: 400,
//    headers: { "Content-Type": "application/json" },
//  });
// }

// return new Response(JSON.stringify({ message: "Comment added" }), {
//  status: 200,
//  headers: { "Content-Type": "application/json" },
// });
  }
