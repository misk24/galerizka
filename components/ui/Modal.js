"use client";

import { useBodyScroll } from "@/hooks/useBodyScroll";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { X } from "lucide-react";
import { useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose, isOpen);
  useEscapeKey(onClose, isOpen);
  useBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4" 
      aria-modal="true" 
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative z-10 bg-white shadow-2xl max-w-4xl w-full h-full max-h-[90vh] md:max-h-[50vh] lg:max-h-[90vh] overflow-hidden flex flex-col md:flex-row scale-95 opacity-0 animate-modalIn transition-all duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-muted-rose hover:text-muted-rose/70"
          aria-label="Tutup modal"
        >
          <X size={24} />
        </button>

        {/* Content Wrapper */}
        <div className="w-full h-full flex flex-col md:flex-row">
          {children}
        </div>
      </div>
    </div>
  );
}