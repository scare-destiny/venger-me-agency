import React from 'react';
import { Blockquote } from '~/components/react/Tailwind/Blockquote';
import { Container } from './Container';
import { FadeIn } from '~/components/react/Animations/FadeIn';
import { List, ListItem } from '~/components/react/Tailwind/List';
import { PageIntro } from '~/components/react/Tailwind/PageIntro';
import { StylizedImage } from '~/components/react/Tailwind/StylizedImage';
import { TagList, TagListItem } from '~/components/react/Tailwind/TagList';
import imageLaptop from '../../../assets/images/laptop.jpg';
import imageMeeting from '~/assets/images/meeting.jpg';
import imageWhiteboard from '~/assets/images/whiteboard.jpg';
import imageRocket from '~/assets/images/rocket.jpg';

function Section({
  title,
  image,
  children,
}: {
  title: string;
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>;
  children: React.ReactNode;
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[25.75rem] flex-none lg:w-[40rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after: after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight  sm:text-4xl">{title}</h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

function Consultation() {
  return (
    <Section title="30-minutes consultation" image={{ src: imageWhiteboard.src }}>
      <div className="space-y-6 text-base text-neutral-600 ">
        <p>
          Let's hop on a call to understand your
          <strong> goals</strong> and see how I can help. It’s all about discovering if we're the right fit to turn your
          goals and ambitions into reality. Together, we’ll explore the potential of creating something great.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-primary font-semibold ">Included in this phase</h3>
      <TagList className="mt-4">
        <TagListItem>Understand your needs</TagListItem>
        <TagListItem>Quick Business Overview</TagListItem>
        <TagListItem>Next Steps</TagListItem>
      </TagList>
    </Section>
  );
}

function Discovery() {
  return (
    <Section title="Discovery Call" image={{ src: imageLaptop.src, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In the Discovery Call, we talk about your business in more detail. We'll look at where you are now, and where
          you want to go. This call will help us see how we can work together to get you more clients and make your
          business seen.
        </p>
        <p>We'll talk about:</p>
        <ul className=" ">
          <li>What's tough for you in getting new clients and being seen.</li>
          <li>
            <li>The wins you want to achieve soon and later on.</li>
            Ideas that could be your game-changer.
          </li>
        </ul>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-primary font-semibold">Included in this phase</h3>
      <TagList className="mt-4">
        <TagListItem>Identify Goals, Envision Growth</TagListItem>
        <TagListItem>Come Up With Detailed Action Plan</TagListItem>
        <TagListItem>From Discussion to Direction</TagListItem>
      </TagList>
    </Section>
  );
}

function Analysis() {
  return (
    <Section title="Analysis Phase: Mapping Your Path to Growth" image={{ src: imageMeeting.src, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Following our Discovery Call, we transition into the Analysis Phase. This is where we dig deeper to understand
          your <strong>priorities</strong> and devise a clear, actionable plan to achieve them.
        </p>
        <p>
          We keep the touchbase before, during and after the project to ensure we are on the same page and working on
          the most important things.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-primary font-semibold ">Included in this phase</h3>
      <List className="mt-8">
        <ListItem title="Priority Identification">Understanding what matters most to you and your business.</ListItem>
        <ListItem title="Analysis">
          It’s about delving deeper into your business dynamics, pinpointing what's pivotal for your growth, and
          charting the course to get you there.
        </ListItem>
        <ListItem title="Regular Check-ins">
          Regular check-ins for updates and adjustments, keeping you in the loop and the project on track.
        </ListItem>
      </List>
    </Section>
  );
}

function Execute() {
  return (
    <Section title="Execution and Launch " image={{ src: imageRocket.src, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This pivotal stage is all about bringing the well-laid plans to life, ensuring each step is in harmony with
          the <strong>overarching goal</strong> of boosting your clientele and market visibility.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Andreas Lange', role: 'Online Marketing Manager / Iberosattel Reitsport GmbH' }}
        className="mt-12"
      >
        We have been working successfully with Eugene for many years. He always finds a quick and suitable solution for
        all problems.
      </Blockquote>

      <h3 className="mt-12 font-display text-base font-semibold text-primary font-semibold">Included in this phase</h3>
      <TagList className="mt-4">
        <TagListItem>Clear Deadline And Milestones</TagListItem>
        <TagListItem>Launch And Monitoring</TagListItem>
        <TagListItem>Post-Project Evaluation</TagListItem>
      </TagList>
    </Section>
  );
}

export const metadata: Metadata = {
  title: 'My Process',
  description: 'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
};

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="My process" title="How I work">
        <p>
          I believe in efficiency and maximizing resources to provide the best value to my clients. The primary way I do
          that is by finding and focusing on what moves your business forward. Here is how it works.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Consultation />
        <Discovery />
        <Analysis />
        <Execute />
      </div>
    </>
  );
}
