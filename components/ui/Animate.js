"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function Animate({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  threshold = 0.25,
  triggerOnce = true,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const animationClasses = isVisible 
    ? `animate-${animation} ${className}` 
    : `opacity-0 ${className}`;

  return (
    <div 
      ref={ref}
      className={animationClasses}
      style={{ 
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationFillMode: "both"
      }}
      {...props}
    >
      {children}
    </div>
  );
}