import React from 'react';
import image from '../../../assets/images/venger-updated.png';
import { FadeIn, FadeInStagger } from '~/components/react/Animations/FadeIn';

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none animate-in slide-in-from-right fade-in-75  duration-1000 repeat-0">
          <img
            src={image.src}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Eugene Venger. I help businesses get to the next level.
          </h1>
        </FadeIn>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I began my journey in 2019 at a SaaS company, AmazeOwl, as a Growth Marketer. This role marked my initiation
            into the realms of digital marketing and remote work.
          </p>
          <p>During my tenure, our team increased revenue by 300% and pioneered three additional income streams.</p>
          <p>
            Fast forward to now, I wield my dual expertise in marketing and coding to craft tailored solutions for small
            and medium businesses. For instance, in one project, we slashed the customer bill 10x by transitioning from
            one marketing automation software to another.
          </p>
          <p>
            One of my initial technical projects was a Slack Bot for Email Deliverability Audits. This bot provided
            email deliverability audits for potential agency clients by swiftly checking SPF, DKIM, and DMARC records.
            It reduced audit time from minutes to seconds. This project evolved into the{' '}
            <a className="text-primary" href="/email-marketing-checklist">
              Email Marketing Checklist
            </a>
            , a comprehensive tool that encapsulates all my experience in email marketing and deliverability, helping
            marketers worldwide.
          </p>
          <p>
            I thrive on acquiring new skills and surmounting challenges, so if you're on the lookout for an adept
            professional to propel you towards your ambitious targets, you've navigated to the right harbor!
          </p>
          <p>
            In my leisure, I indulge in reading, cooking, and constructing tools that augment my hobbies. For instance,
            I built a{' '}
            <a className="text-primary" href="https://recipes-storage.vercel.app/" target="_blank">
              recipe app
            </a>{' '}
            and a{' '}
            <a className="text-primary" href="https://cognitive-journaling-scare-destiny.vercel.app/" target="_blank">
              cognitive journaling app
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
