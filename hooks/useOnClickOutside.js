import { useEffect } from "react";

export function useOnClickOutside(ref, onOutsideClick, isActive, ignoreRef) {
  useEffect(() => {
    if (!isActive) return undefined;

    const handleClickOutside = (event) => {
      if (ignoreRef?.current?.contains(event.target)) return;
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onOutsideClick, isActive, ignoreRef]);
}
