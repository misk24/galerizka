"use client";

import { menu } from "@/constants/constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useScroll } from "./useScroll";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function Navbar() {
  const scrolled = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled || isOpen 
        ? 'bg-white lg:bg-white/80 lg:backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll 
          animation="fadeIn"
          delay={200}
          className="flex justify-between items-center h-20"
        >
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={scrolled || isOpen ? '/images/logo/logo.png' : '/images/logo/logo-white.png'}
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
            {menu.map(({ href, label }) => (
              <div key={href} className="relative group">
                <Link
                  href={href}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors ${
                    scrolled ? 'text-muted-rose' : 'text-white hover:text-white'
                  }`}
                >
                  {label}
                  <span 
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? 'bg-muted-rose' : 'bg-white'
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-6">
            <Button
              href="#order"
              size="sm"
              variant={`${scrolled ? "primary" : "outline"}`}
            >
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all ${
                scrolled || isOpen ? 'text-muted-rose' : 'text-white'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} scrolled={scrolled} />
    </header>
  );
}