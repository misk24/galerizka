"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

const variantStyles = {
  primary: "px-6 py-3 rounded-full bg-dusty-rose hover:bg-mulberry-deep text-white transition-colors duration-300",
  secondary: "border-2 border-white hover:border-warm-gray text-muted-rose px-8 py-3 font-medium bg-white hover:bg-transparent hover:text-white transition-colors duration-300",
  outline: "border-2 border-dusty-rose rounded-full text-dusty-rose px-6 py-3 font-medium hover:text-mulberry-deep hover:border-mulberry-deep transition-colors duration-300",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
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
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (as === "a" || href) {
      return (
        <Link
          href={href || "#"}
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

Button.displayName = "Button";

export { Button };
