import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  invert?: boolean;
} & (React.ComponentPropsWithoutRef<'a'> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined }));

export function Button({ invert = false, className, children, ...props }: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert ? 'bg-white text-neutral-950 hover:bg-neutral-200' : 'bg-neutral-950 text-white hover:bg-neutral-800'
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <a className={className} {...props}>
      {inner}
    </a>
  );
}
