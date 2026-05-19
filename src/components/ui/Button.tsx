'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 min-h-[48px] min-w-[48px]',
  {
    variants: {
      variant: {
        primary:
          'bg-gold text-charcoal hover:bg-gold/90 active:bg-gold/80 shadow-sm',
        ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5',
        outline:
          'border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded',
        md: 'px-6 py-3 text-base rounded-md',
        lg: 'px-8 py-4 text-lg rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
