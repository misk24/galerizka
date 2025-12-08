"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { menu } from "@/constants/menu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isScrolledOrOpen = scrolled || isOpen;
  const logoPath = isScrolledOrOpen ? '/images/logo/logo.png' : '/images/logo/logo-white.png';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolledOrOpen 
        ? 'bg-white lg:bg-white/80 lg:backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={logoPath}
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
                    scrolled ? 'text-muted-rose' : 'text-warm-gray hover:text-warm-gray'
                  }`}
                >
                  {label}
                  <span 
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? 'bg-muted-rose' : 'bg-warm-gray'
                    }`}
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-6">
            <Link
              href="#order"
              className={`px-5 py-3 rounded-lg text-sm font-medium border-2 transition-all duration-300 ${
                scrolled 
                  ? 'border-muted-rose hover:border-pink-700 bg-muted-rose text-warm-gray hover:bg-pink-700 shadow-lg hover:shadow-pink-200' 
                  : 'border-warm-gray text-warm-gray hover:bg-warm-gray/30 backdrop-blur-sm hover:shadow-lg'
              }`}
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all ${
                isScrolledOrOpen ? 'text-muted-rose' : 'text-white'
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
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} scrolled={scrolled} />
    </header>
  );
}