"use client";

import { Animate } from "@/components/ui/Animate";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { menus } from "@/constants/constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="sticky top-0 z-50 bg-black-cherry shadow-md h-20"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <Animate
          animation="fadeIn"
          delay={200}
          className="flex justify-between items-center h-20"
        >
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Galeriz.ka"
                width={120}
                height={60}
                className="w-auto h-16 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menus.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative px-3 py-2 text-sm font-medium tracking-wide text-blush-soft"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dusty-rose transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-6">
            <WhatsAppButton size="sm" variant="light">
              Pesan via WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-blush-soft focus:outline-none"
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? (
                <X size={24} className="w-6 h-6" />
              ) : (
                <Menu size={24} className="w-6 h-6" />
              )}
            </button>
          </div>
        </Animate>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={menuButtonRef} />
    </header>
  );
}
