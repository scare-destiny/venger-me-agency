import React from 'react';
import { FadeIn, FadeInStagger } from '../Animations/FadeIn';
import { Border } from './Border';
import { Container } from './Container';
import amazeowlImage from '~/assets/images/logos/amazeowl.png';
import impactersGroupImage from '~/assets/images/logos/impacters-group.webp';
import interwebsLogo from '~/assets/images/logos/interwebs.png';
import masterfulImage from '~/assets/images/logos/masterful.png';
import jvgtechnologyImage from '~/assets/images/logos/jvgtechnology.png';
import pyrashyutImage from '~/assets/images/logos/pyrashyut.png';
import blossomecomImage from '~/assets/images/logos/blossomecom.png';
import bluelamaImage from '~/assets/images/logos/bluelama.png';

const clients = [
  ['Pyrashyut', pyrashyutImage.src],
  ['Westernsattel', jvgtechnologyImage.src],
  ['Impacters Group', impactersGroupImage.src],
  ['Masterful', masterfulImage.src],
  ['Interwebs', interwebsLogo.src],
  ['Iberosattel', blossomecomImage.src],
  ['Blue Lama', bluelamaImage.src],
  ['Amazeowl', amazeowlImage.src],
];

export function Clients() {
  return (
    <Container className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20 lg:py-24 text-default ">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">You’re in good company</h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul role="list" className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <img src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}
