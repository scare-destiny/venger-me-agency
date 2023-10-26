// FadeIn.tsx
import React from 'react';
import { useRef } from 'react';
import { Animate } from 'react-move';
import useIntersectionObserver from './useIntersectionObserver';

interface FadeInSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  threshold?: number;
}

export default function FadeInSection({ children, direction = 'left', threshold = 0.3 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold });

  let startAnim, endAnim;

  switch (direction) {
    case 'right':
      startAnim = { opacity: 0, x: 100 };
      endAnim = { opacity: 1, x: 0 };
      break;
    case 'up':
      startAnim = { opacity: 0, y: 100 };
      endAnim = { opacity: 1, y: 0 };
      break;
    case 'down':
      startAnim = { opacity: 0, y: -100 };
      endAnim = { opacity: 1, y: 0 };
      break;
    default: // 'left'
      startAnim = { opacity: 0, x: -100 };
      endAnim = { opacity: 1, x: 0 };
      break;
  }

  return (
    <Animate
      start={startAnim}
      update={{
        opacity: isVisible ? endAnim.opacity : startAnim.opacity,
        x: isVisible ? endAnim.x : startAnim.x,
        y: isVisible ? endAnim.y : startAnim.y,
      }}
      // @ts-ignore
      duration={1200}
    >
      {({ opacity, x, y }) => (
        <div
          ref={ref}
          style={{
            opacity,
            transform: `translate3d(${x || 0}%, ${y || 0}%, 0)`,
            transition: 'opacity 500ms, transform 500ms',
          }}
        >
          {children}
        </div>
      )}
    </Animate>
  );
}
