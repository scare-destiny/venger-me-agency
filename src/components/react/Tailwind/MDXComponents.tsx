import React from 'react';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

// Import your components here
// import { Blockquote } from '~/components/react/Tailwind';
// import GrayscaleTransitionImage from '@/components/GrayscaleTransitionImage';
// import { StatList, StatListItem } from '~/components/react/Tailwind';
// import TagList from '@/components/TagList';
// import Border from '@/components/Border';
import { Blockquote } from './Blockquote';
import { GrayscaleTransitionImage } from './GrayscaleTransitionImage';
import { StatList, StatListItem } from './StatList';
import { TagList, TagListItem } from './TagList';
import { Border } from './Border';

export const MDXComponents = {
  Blockquote({ className, ...props }: ComponentPropsWithoutRef<typeof Blockquote>) {
    return <Blockquote className={clsx('my-32', className)} {...props} />;
  },
  img: function Img({ className, ...props }: ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div className={clsx('group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6', className)}>
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    );
  },
  StatList({ className, ...props }: React.ComponentPropsWithoutRef<typeof StatList>) {
    return <StatList  className={clsx('my-32 !max-w-none', className)} {...props} />;
  },
  StatListItem,
  table: function Table({ className, ...props }: React.ComponentPropsWithoutRef<'table'>) {
    return (
      <div className={clsx('my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto', className)}>
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    );
  },
  TagList({ className, ...props }: React.ComponentPropsWithoutRef<typeof TagList>) {
    return <TagList className={clsx('my-6', className)} {...props} />;
  },
  TagListItem,
  TopTip({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
      <>
        <Border position="left" className={clsx('my-10 pl-8', className)}>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">Top tip</p>
          <div className="mt-4">
            <slot />
          </div>
          //{' '}
        </Border>
      </>
    );
  },
  Typography({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return <div className={clsx('typography', className)} {...props} />;
  },
  wrapper({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    return (
      <div
        className={clsx('[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0', className)}
        {...props}
      />
    );
  },
};
