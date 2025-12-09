"use client";

import { forwardRef } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

const variantStyles = {
  primary: "border-2 border-muted-rose hover:border-rose-700 text-white px-8 py-3 font-medium bg-muted-rose hover:bg-rose-700 transition-colors duration-300",
  secondary: "border-2 border-white hover:border-warm-gray text-muted-rose px-8 py-3 font-medium bg-white hover:bg-transparent hover:text-white transition-colors duration-300",
  outline: "border-2 border-warm-gray text-white px-8 py-3 font-medium hover:bg-warm-gray hover:text-muted-rose transition-colors duration-300",
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      className = '',
      as = 'button',
      href,
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none';

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (as === 'a' || href) {
      return (
        <Link
          href={href || '#'}
          className={buttonClasses}
          ref={ref}
          {...props}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
