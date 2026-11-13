"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

const variantStyles = {
  primary: "rounded-full bg-mulberry-deep text-white hover:bg-black-cherry",
  outline: "rounded-full border-2 border-mulberry-deep text-mulberry-deep hover:bg-mulberry-deep hover:text-white",
  light: "rounded-full bg-blush-soft text-mulberry-deep hover:bg-white",
  ghostLight: "rounded-full border-2 border-blush-soft text-blush-soft hover:bg-blush-soft hover:text-mulberry-deep",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      as = "button",
      href,
      loading = false,
      disabled = false,
      children,
      onClick,
      tabIndex,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    const unavailable = disabled || loading;

    if (as === "a" || href) {
      function handleLinkClick(event) {
        if (unavailable) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }

      return (
        <Link
          href={href || "#"}
          className={buttonClasses}
          ref={ref}
          aria-disabled={unavailable || undefined}
          aria-busy={loading || undefined}
          tabIndex={unavailable ? -1 : tabIndex}
          onClick={handleLinkClick}
          {...props}
        >
          {loading && <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />}
          {children}
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        disabled={unavailable}
        aria-busy={loading || undefined}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {loading && <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
