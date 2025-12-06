"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { menu } from "@/constants/menu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`text-xl font-bold flex items-center transition-colors ${scrolled ? 'text-dark-charcoal hover:text-muted-rose' : 'text-warm-gray hover:text-warm-gray'}`}
            >
              Galeriz.ka
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-dark-charcoal hover:text-muted-rose' : 'text-warm-gray hover:text-warm-gray'}`}
              >
                <span className="flex items-center space-x-1.5">
                  <span>{link.label}</span>
                </span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-muted-rose' : 'bg-warm-gray'}`}></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="#order"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${scrolled ? 'border-2 bg-muted-rose text-white hover:bg-muted-rose/80' : 'border-2 border-warm-gray text-warm-gray hover:bg-muted-rose/50'}`}
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${scrolled ? 'text-dark-charcoal hover:text-muted-rose' : 'text-white hover:text-white'}`}
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
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
    </nav>
  );  
}