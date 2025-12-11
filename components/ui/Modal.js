"use client";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useScrollLock } from "@/hooks/useScrollLock";
import { X } from "lucide-react";
import { useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, onClose, isOpen);
  useEscapeKey(onClose, isOpen);
  useScrollLock(isOpen);

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
        className="absolute inset-0 bg-mulberry-deep/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-4xl w-full md:h-[70vh] lg:h-[90vh] overflow-auto flex flex-col scale-95 opacity-0 animate-modalIn transition-all duration-300"
        style={{
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
          maxHeight: "calc(100% - 4rem)" // Ensure some spacing around the modal
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-mulberry-deep hover:text-dusty-rose transition-colors"
          aria-label="Tutup modal"
        >
          <X size={24} />
        </button>

        {/* Content Wrapper */}
        <div className="w-full flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}