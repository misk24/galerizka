"use client";

import Link from "next/link";
import { menu } from "@/constants/menu";

export default function MobileMenu({ isOpen, setIsOpen, scrolled }) {
  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm'} border-t`}>
        {menu.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${scrolled ? 'text-dark-charcoal hover:bg-gray-100 hover:text-muted-rose' : 'text-white hover:bg-white/10 hover:text-white'} px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors`}
            onClick={() => setIsOpen(false)}
          >
            <span>{link.label}</span>
          </Link>
        ))}
        <Link
          href="#order"
          className={`${scrolled ? 'bg-muted-rose hover:bg-pink-700' : 'bg-white text-muted-rose hover:bg-gray-100'} px-4 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-center space-x-2 mt-2`}
          onClick={() => setIsOpen(false)}
        >
          <span>Pesan Sekarang</span>
        </Link>
      </div>
    </div>
  );
}
