import React from 'react';
import { Button } from '~/components/react/Tailwind/Services/Button';
import { Container } from '~/components/react/Tailwind/Container';
import { FadeIn } from '~/components/react/Animations/FadeIn';
import { Offices } from '~/components/react/Contact/Offices';
import { BackgroundBeams } from '../Tailwind/BackgroundBeams';
import { GridList } from '~/components/react/Tailwind/GridList';
import { GridListItem } from '~/components/react/Tailwind/GridList';

export function ContactSection() {
  return (
    <Container className=" py-12 md:py-20 lg:py-24 relative  ">
      <FadeIn className="-mx-6 rounded-[40px] bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 ">
        <div className="mx-auto max-w-4xl ">
          <div className="max-w-xl ">
            <h2 className="font-display text-3xl font-bold text-white [text-wrap:balance] sm:text-4xl z-10">
              Tell me about your project
            </h2>
            <div className="mt-6 flex text-lg z-10">
              <Button className="z-10" variant="solid" color="white" outline="white" href="/contact" invert>
                Say Hei
              </Button>
            </div>
            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-xl font-extrabold text-white">Our offices</h3>
              <Offices invert className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 font-bold text-lg" />
            </div> */}
          </div>

          <Container className="mt-16">
            <GridList className="z-10">
              <GridListItem title="No strings attached" invert>
                Let's discuss your project and see if we are a good fit for each other.
              </GridListItem>
              <GridListItem title="Gain clarity" invert>
                I will help you understand what you need and how to achieve it, step by step.
              </GridListItem>
              <GridListItem title="Stop feeling uncertain" invert>
                Get a clear, actionable plan to achieve your goals.
              </GridListItem>
            </GridList>
          </Container>
        </div>
      </FadeIn>
      <BackgroundBeams />
    </Container>
  );
}
