import React from 'react';
import Image from '~/components/common/Image.astro';
import { FadeIn, FadeInStagger } from '../Animations/FadeIn';

import image from '../../../assets/images/hero.png';

const services = [
  [
    'Marketing Automation',
    'Optimized and performant pipelines that can cut your costs 10X. From Integromat to AWS Lambda',
  ],
  ['Sales Funnels', 'Complex Sales Funnels with sleek and fast landing pages, lead generation, and optimization.'],
  ['Strategic Tech Consultancy', 'Current trends, low-hanging fruits, and best strategies.'],
  [
    'Team Training & Development',
    'From vetting talent to managing remote teams and freelancers, significantly cutting your average expenses.',
  ],
  ['A/B Testing', 'Iterate to drive sales and increase conversion rates.'],
  [
    'High-Converting Landing Pages',
    'Performant and beautifully crafted landing pages that can achieve a 3x increase in conversion rates.',
  ],
  ['Email Marketing And Deliverability', 'Deliverability audits and email marketing infrastructure.'],
  ['Data Analytics & Reporting', 'From GTM and Google Analytics to custom marketing attribution platforms.'],
];

export default function Technoloiges() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <FadeIn className="flex items-center md:gap-x-8">
        <h2 className="text-center font-display text-sm font-bold tracking-wider  sm:text-center">
          Here's a rundown of the key areas I specialize in, listed in no particular order.
        </h2>
        <div className="h-px flex-auto bg-neutral-800" />
      </FadeIn>
      <FadeInStagger faster>
        <ul role="list" className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-x-8 gap-y-10  lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={index}>
              <FadeIn>
                <div className="service-item md:h-56 p-6   border rounded-lg relative bg-white text-black transform transition-transform duration-2000 hover:scale-105 hover:shadow-lg">
                  <div className="font-bold text-xl mb-2">{service[0]}</div>
                  <div className="underline w-full h-1 bg-gradient-to-r from-primary to-accent absolute bottom-0 left-0"></div>

                  <div className="text-gray-700">{service[1]}</div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </div>
  );
}
