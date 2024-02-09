import React, { type FormEvent, useState, useId } from 'react';
// import Link from 'next/link';

import { Border } from '~/components/react/Tailwind/Border';
import { Button } from '~/components/react/Tailwind/Button';
import { Container } from '~/components/react/Tailwind/Container';
import { FadeIn } from '~/components/react/Animations/FadeIn';
// import { Offices } from '~/components/react/Contact/Offices';
import { PageIntro } from '~/components/react/Tailwind/PageIntro';
import { SocialMedia } from '~/components/react/Contact/SocialMedia';
import { TextGenerateEffect } from '~/components/react/UI/text-generate-effect';

function TextInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}

function RadioInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
}

function ContactForm() {
  const [responseMessage, setResponseMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setResponseMessage('Thanks for reaching out! I’ll get back to you soon.');
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">Work requests</h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput label="Email" type="email" name="email" autoComplete="email" required />
          {/* <TextInput label="Company" name="company" autoComplete="organization" /> */}
          {/* <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" /> */}
          <TextInput label="Message" name="message" required />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Services</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput required label="Cold Email + Linkedin" name="services" value="cold email and linkedin" />
                <RadioInput required label="Email Deliverability" name="services" value="email deliverability" />
                <RadioInput
                  required
                  label="Marketing Automation + Web Dev"
                  name="services"
                  value="marketing automation and web dev"
                />
                <RadioInput label="Other" name="services" value="other" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </FadeIn>
  );
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">Still hesitate?</h2>
      <p className="mt-6 text-base text-neutral-600">
        I'm always on the lookout for exciting new projects. Let's discuss yours!
      </p>

      {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">Email me</h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Work', 'eugene@venger.me'],
            // ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <a href={`mailto:${email}`} className="text-neutral-600 hover:text-neutral-950">
                  {email}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">Find me here</h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact me" title="Let’s work together">
        <TextGenerateEffect
          className="leading-3 tracking-tighter font-light"
          words="I can’t wait to hear from you."
        ></TextGenerateEffect>
      </PageIntro>

      <Container className="my-24 sm:my-32 lg:my-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
