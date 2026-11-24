"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import { menus } from "@/constants/constant";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => setIsOpen((current) => !current);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="sticky top-0 z-50 h-20 bg-black-cherry shadow-md"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Animate
          animation="fadeIn"
          delay={200}
          className="flex h-20 items-center justify-between"
        >
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Galeriz.ka"
                width={120}
                height={60}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav aria-label="Navigasi utama" className="hidden items-center space-x-8 lg:flex">
            {menus.map(({ href, label }) => (
              <div key={href} className="group relative">
                <Link
                  href={href}
                  className="group relative px-3 py-2 font-heading font-medium text-blush-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-dusty-rose transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                  />
                </Link>
              </div>
            ))}
          </nav>

          <div className="ml-6 hidden items-center lg:flex">
            <Button
              href="https://wa.link/4u5haz"
              size="sm"
              variant="primary"
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
            >
              Pesan Sekarang
            </Button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-sm p-2 text-blush-soft transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-soft"
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              <span className="relative block h-6 w-6" aria-hidden="true">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${isOpen ? "rotate-[-90deg] scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ease-out ${isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"}`}
                />
              </span>
            </button>
          </div>
        </Animate>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
