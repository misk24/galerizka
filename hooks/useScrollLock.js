import { useEffect } from 'react';

export function useScrollLock(isLocked) {
  useEffect(() => {
    // Skip during SSR
    if (typeof document === 'undefined') return;

    // Lock or unlock scroll based on isLocked
    if (isLocked) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      
      // Lock the scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Return cleanup function to restore scroll
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
}
