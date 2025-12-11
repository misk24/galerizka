import { useEffect } from "react";

export function useScrollLock(isLocked) {
  useEffect(() => {
    // Skip during SSR
    if (typeof document === "undefined") return;
    
    // Lock or unlock body scroll
    document.body.style.overflow = isLocked ? "hidden" : "auto";
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLocked]);
}
