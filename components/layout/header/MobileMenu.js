"use client";

import { Button } from "@/components/ui/Button";
import { contacts, menus, whatsappUrl } from "@/constants/constant";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useScrollLock } from "@/hooks/useScrollLock";
import Link from "next/link";
import { useRef } from "react";

export default function MobileMenu({ isOpen, setIsOpen, buttonRef }) {
  const menuRef = useRef(null);
  useScrollLock(isOpen);
  useOnClickOutside(menuRef, () => setIsOpen(false), isOpen, buttonRef);

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`lg:hidden border-b border-dusty-rose transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? "max-h-[calc(100svh-5rem)] overflow-y-auto opacity-100 bg-white" 
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="p-2">
        <nav className="flex flex-col space-y-1">
          {menus.map((link) => (
            <div key={link.href} className="w-full">
              <Link
                href={link.href}
                className="w-full text-left px-4 py-3 font-medium flex items-center justify-between text-mulberry-deep"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
          
          {/* CTA Button */}
          <div className="mt-4 px-4">
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full" onClick={() => setIsOpen(false)}>
              Pesan via WhatsApp
            </Button>
          </div>
        </nav>
        
        {/* Contact Info */}
        <div className="mt-8 px-4 pt-6 pb-4 border-t border-dusty-rose">
          <div className="font-heading font-semibold text-2xl text-mulberry-deep mb-3">
            Hubungi Kami
          </div>
          <div className="space-y-2">
            {contacts.map((contact) => (
              <Link
                key={contact.href}
                href={contact.href}
                className="flex items-center text-mulberry-deep font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{contact.icon}</span>
                {contact.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}