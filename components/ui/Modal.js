"use client";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollLock } from "@/hooks/useScrollLock";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex^="-"])';

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
      {/* Tinggi mengikuti isi; hanya area dalam yang scroll sehingga tombol tutup tetap di tempat. */}
      <div className="relative z-10 flex max-h-full w-full max-w-4xl animate-modalIn rounded-xl bg-white shadow-2xl outline-none">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-white p-2 text-mulberry-deep shadow transition-colors hover:text-black-cherry"
          aria-label="Tutup"
        >
          <X aria-hidden="true" size={20} />
        </button>
        <div className="w-full overflow-y-auto rounded-xl">{children}</div>
      </div>
    </div>
  );
}
