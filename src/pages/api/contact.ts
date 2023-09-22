

import sendGrid from '@sendgrid/mail';
sendGrid.setApiKey( import.meta.env.SENDGRID_API_KEY );

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const msg = {
    to: 'zhenya.venger@gmail.com', // Change to your recipient
    from: 'eugene@venger.me', // Change to your verified sender
    replyTo: {email:email, name:name},
    subject: `Contact form submission from ${name}`,
    text: message,
  }

  await sendGrid.send(msg).then(() => {
    console.log('Email sent')
  }).catch((error) => {
    console.error(error)
  });


  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};
