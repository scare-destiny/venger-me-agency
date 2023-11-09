import React from 'react';
import { Container } from './Container';
import { FadeIn } from '../Animations/FadeIn';
import { Border } from './Border';
import { Button } from './Button';
import { Blockquote } from './Blockquote';

export function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">Case studies</h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.data.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <img src={caseStudy.data.logo} alt="" className="h-16 w-16 flex-none" unoptimized />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.data.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.data.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      {/* <time dateTime={caseStudy.data.date}>{formatDate(caseStudy.data.date)}</time> */}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <a href={`/work/${caseStudy.slug}`}>{caseStudy.data.title}</a>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.data.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button href={`/work/${caseStudy.slug}`} aria-label={`Read case study: ${caseStudy.data.client}`}>
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.data.testimonial && (
                    <Blockquote author={caseStudy.data.testimonial.author} className="mt-12">
                      {caseStudy.data.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
