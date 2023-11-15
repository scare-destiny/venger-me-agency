import React from 'react';
import { CircleStackIcon, BoltIcon, ServerIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import { FadeIn, FadeInStagger } from '../Animations/FadeIn';
export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 relative mx-auto  px-4 md:px-6 py-12 md:py-16 lg:py-12 text-default">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[--aw-color-secondary] to-[--aw-color-primary] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-primary">Things I'm proud of</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
          {/* <p className="mt-6 text-xl leading-8 text-gray-700">
            As a growth marketer with a dual skill set in software development, I have a knack for technical marketing,
            a penchant for coding and a relentless desire to help my clients grow.
          </p> */}
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure className="border-l border-primary pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  I don't provide quick, one-off solutions and focus on quality over being fast or cheap. Each project
                  is analyzed and executed uniquely. Also, all projects come with a money-back guarantee.
                </p>
              </blockquote>
              {/* <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQGsUtMSlQm88A/profile-displayphoto-shrink_200_200/0/1517079041148?e=1702512000&v=beta&t=m4STBLixXLrCpoYfX5in6r3N98hGC_jIeBopgG8CWwI"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Andreas Lange</div>
                  <div className="text-gray-600">Online Marketing Manager / Iberosattel Reitsport GmbH</div>
                </div>
              </figcaption> */}
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>Some of the projects I've been working throughout my career.</p>
            <FadeInStagger>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <FadeIn>
                  <li className="flex gap-x-3">
                    <CircleStackIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Attribution Platform.</strong> Designed and
                      implemented a high-volume tracking system with Google Tag Manager, Apps Script, Sheets, and Looker
                      (formerly Data Studio), improving data accuracy and decision-making.
                    </span>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className="flex gap-x-3">
                    <BoltIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Slack Bot for Email Deliverability Audits.
                      </strong>{' '}
                      This tool evolved into the{' '}
                      <a className="text-primary" href="/email-marketing-checklist" target="_blank">
                        Email Marketing Checklist
                      </a>
                      , a comprehensive tool that helps marketers worldwide.
                    </span>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className="flex gap-x-3">
                    <RocketLaunchIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">High-Converting Landing Pages.</strong> Sleek and
                      fast Next.js and Tailwind CSS landing pages that for some cases increased conversion rates by 3x.
                    </span>
                  </li>
                </FadeIn>
                <FadeIn>
                  <li className="flex gap-x-3">
                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Lead Management for Paid Channels.</strong>{' '}
                      Cost-effective pipeline to transfer leads from Google Ads to ActiveCampaign using Integromat,
                      reducing costs by 10x.
                    </span>
                  </li>
                </FadeIn>
              </ul>
            </FadeInStagger>
            <p className="mt-8">
              You can read more about me and my work{' '}
              <a className="text-primary" href="/about" target="_blank">
                {' '}
                here.
              </a>
            </p>
            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
              Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
              tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
              turpis ipsum eu a sed convallis diam.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
