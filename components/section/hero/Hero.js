"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen md:h-[800px] lg:h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="w-full max-w-4xl lg:max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimateOnScroll delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-hero font-bold text-white leading-tight mb-6">
                Buat Baju Impian Anda Menjadi Kenyataan
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <p className="text-lg text-white font-medium">
                Jasa jahit profesional dengan kualitas terbaik dan hasil yang memuaskan. Desain eksklusif, ukuran pas, dan nyaman digunakan.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button href="#order" variant="secondary">
                  Pesan Sekarang
                </Button>
                <Button href="#portfolio" variant="outline">
                  Lihat Portfolio
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="hidden lg:block w-full lg:w-1/2" />
        </div>
      </div>
    </section>
  );
}