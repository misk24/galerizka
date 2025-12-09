import { useEffect, useState } from "react";

export function useScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}