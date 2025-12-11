"use client";

import { Button } from "@/components/ui/Button";
import { menus } from "@/constants/constant";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);
  useScrollLock(isOpen);
  useOnClickOutside(menuRef, () => setIsOpen(false), isOpen);

  return (
    <div
      ref={menuRef}
      className={`lg:hidden border-b border-dusty-rose transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? "max-h-screen opacity-100 bg-white" 
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
            <Button href="https://wa.link/4u5haz" className="w-full" onClick={() => setIsOpen(false)}>
              Pesan Sekarang
            </Button>
          </div>
        </nav>
        
        {/* Contact Info */}
        <div className="mt-8 px-4 pt-6 pb-4 border-t border-dusty-rose">
          <div className="font-heading font-semibold text-xl text-mulberry-deep mb-3">
            Hubungi Kami
          </div>
          <div className="space-y-2">
            <Link href="https://wa.link/4u5haz" className="flex items-center text-mulberry-deep font-medium">
              <FaWhatsapp size={20} className='mr-2' /> 0877-6337-3270
            </Link>
            <Link href="mailto:rizkans.koryoga03@gmail.com" className="flex items-center text-mulberry-deep font-medium">
              <Mail size={20} className='mr-2' /> rizkans.koryoga03@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}