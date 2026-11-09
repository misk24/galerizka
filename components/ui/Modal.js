"use client";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollLock } from "@/hooks/useScrollLock";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEscapeKey(onClose, isOpen);
  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const modal = modalRef.current;
    const getFocusableItems = () =>
      [...(modal?.querySelectorAll(FOCUSABLE_SELECTOR) || [])].filter(
        (item) =>
          item.getClientRects().length > 0 &&
          !item.closest('[inert], [aria-hidden="true"]')
      );
    (getFocusableItems()[0] || modal)?.focus();

    function trapFocus(event) {
      if (event.key !== "Tab" || !modal) return;
      const items = getFocusableItems();
      if (!items.length) {
        event.preventDefault();
        modal.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const focusIsInsideModal = modal.contains(document.activeElement);

      if (!focusIsInsideModal) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", trapFocus);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-mulberry-deep/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-4xl w-full md:h-[70vh] lg:h-[90vh] overflow-auto flex flex-col scale-95 opacity-0 animate-modalIn transition-all duration-300 outline-none"
        style={{ WebkitOverflowScrolling: "touch", maxHeight: "calc(100% - 4rem)" }}
      >
        <button onClick={onClose} className="absolute right-4 top-4 z-20 text-mulberry-deep hover:text-dusty-rose transition-colors" aria-label="Tutup modal">
          <X size={24} />
        </button>
        <div className="w-full flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
