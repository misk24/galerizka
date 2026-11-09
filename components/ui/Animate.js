"use client";

import { useInView } from "react-intersection-observer";

export function Animate({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  const animationClasses = inView
    ? `animate-${animation} ${className}`
    : className;

  return (
    <div
      ref={ref}
      className={animationClasses}
      style={{
        animationDelay: inView ? `${delay}ms` : "0ms",
        animationFillMode: "both",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
