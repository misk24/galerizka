"use client";

import { menu } from "@/constants/constant";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsOpen(false), isOpen);

  return (
    <div
      ref={menuRef}
      className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-screen opacity-100 bg-white/95 backdrop-blur-md' 
          : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-4 py-2 border-t border-warm-gray">
        <nav className="flex flex-col space-y-1">
          {menu.map((link) => (
            <div key={link.href} className="w-full">
              <Link
                href={link.href}
                className="w-full text-left px-4 py-3 text-base font-medium transition-colors flex items-center justify-between text-muted-rose"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
              </Link>
            </div>
          ))}
          
          {/* CTA Button */}
          <div className="mt-4 px-4">
            <Link
              href="#order"
              className="w-full flex items-center justify-center px-4 py-3 font-medium text-white bg-muted-rose"
              onClick={() => setIsOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </div>
        </nav>
        
        {/* Contact Info */}
        <div className="mt-8 px-4 pt-6 pb-2 border-t border-rose-pink">
          <h3 className="text-muted-rose mb-3">
            Hubungi Kami
          </h3>
          <div className="space-y-2">
            <Link href="tel:+628123456789" className="flex items-center text-muted-rose font-medium">
              <Phone size={20} className='mr-2' /> +62 812-3456-7890
            </Link>
            <Link href="mailto:info@galerizka.com" className="flex items-center text-muted-rose font-medium">
              <Mail size={20} className='mr-2' /> info@galerizka.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
