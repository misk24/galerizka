import { useEffect } from "react";

export function useScrollLock(isLocked) {
  useEffect(() => {
    // Skip during SSR
    if (typeof document === "undefined") return;

    // Lock or unlock scroll based on isLocked
    if (isLocked) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      
      // Lock the scroll
      document.body.style.overflow = "hidden";

      // Return cleanup function to restore scroll
      return () => {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
}