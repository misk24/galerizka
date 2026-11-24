"use client";

import { Button } from "@/components/ui/Button";
import { contacts, menus } from "@/constants/constant";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useScrollLock } from "@/hooks/useScrollLock";
import Link from "next/link";
import { useCallback, useRef } from "react";

const menuLinkClass =
  "flex w-full items-center justify-between px-4 py-3 text-left font-medium text-mulberry-deep transition-colors hover:bg-blush-soft/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-dusty-rose";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);

  useScrollLock(isOpen);
  useOnClickOutside(menuRef, closeMenu, isOpen);

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`absolute left-0 right-0 top-20 z-40 border-b border-dusty-rose/30 bg-white shadow-lg transition-[max-height,opacity,visibility] duration-300 ease-in-out motion-reduce:transition-none lg:hidden ${
        isOpen
          ? "visible max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100"
          : "invisible max-h-0 overflow-hidden opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl p-3 sm:px-6">
        <nav aria-label="Navigasi mobile" className="flex flex-col gap-1">
          {menus.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={menuLinkClass}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <span aria-hidden="true" className="text-dusty-rose">↗</span>
            </Link>
          ))}

          <div className="mt-3 px-4">
            <Button
              href="https://wa.link/4u5haz"
              className="w-full rounded-none"
              onClick={closeMenu}
            >
              Pesan Sekarang
            </Button>
          </div>
        </nav>

        <div className="mt-7 border-t border-dusty-rose/25 px-4 pb-4 pt-5">
          <h2 className="mb-3 font-heading text-xl font-semibold text-mulberry-deep">
            Hubungi Kami
          </h2>
          <div className="space-y-2">
            {contacts.map((contact) => (
              <Link
                key={contact.href}
                href={contact.href}
                className="flex items-center py-1 font-medium text-mulberry-deep transition-colors hover:text-dusty-rose focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dusty-rose"
                onClick={closeMenu}
              >
                <span aria-hidden="true" className="mr-2">{contact.icon}</span>
                {contact.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
