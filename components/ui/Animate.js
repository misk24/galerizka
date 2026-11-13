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

  return (
    <div
      ref={ref}
      className={`animate-${animation} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationPlayState: inView ? "running" : "paused",
        animationFillMode: "both",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
