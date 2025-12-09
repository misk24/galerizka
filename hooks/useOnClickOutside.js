import { useEffect } from "react";

export function useOnClickOutside(ref, onOutsideClick, isActive) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    if (isActive) {
      document.body.classList.add('overflow-hidden');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [ref, onOutsideClick, isActive]);
}