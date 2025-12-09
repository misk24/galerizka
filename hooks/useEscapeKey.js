import { useEffect } from 'react';

export function useEscapeKey(handler, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, isActive]);
}
