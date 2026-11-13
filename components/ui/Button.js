"use client";

import { externalLinkProps } from "@/lib/links";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

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

// Client component: handler onClick di bawah tidak boleh dibuat di server.
// Dengan `href` jadi tautan (tab baru otomatis untuk http/https), tanpa itu jadi <button>.
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  loading = false,
  disabled = false,
  children,
  onClick,
  tabIndex,
  ref,
  ...props
}) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const unavailable = disabled || loading;
  const spinner = loading && <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref}
        className={classes}
        aria-disabled={unavailable || undefined}
        aria-busy={loading || undefined}
        tabIndex={unavailable ? -1 : tabIndex}
        onClick={(event) => {
          if (unavailable) event.preventDefault();
          else onClick?.(event);
        }}
        {...externalLinkProps(href)}
        {...props}
      >
        {spinner}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      ref={ref}
      className={classes}
      disabled={unavailable}
      aria-busy={loading || undefined}
      tabIndex={tabIndex}
      onClick={onClick}
      {...props}
    >
      {spinner}
      {children}
    </button>
  );
}
