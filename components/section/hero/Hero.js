"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex items-center h-[calc(100vh-4rem)] md:h-[600px] lg:h-[calc(100vh-4rem)]"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero.png')" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-blush-soft to-dusty-rose/30"></div>
      <div className="w-full max-w-4xl lg:max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <AnimateOnScroll delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Buat Baju Impian Anda Menjadi Kenyataan
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <p className="text-lg">
                Jasa jahit profesional dengan kualitas terbaik dan hasil yang memuaskan. Desain eksklusif, ukuran pas, dan nyaman digunakan.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button href="#order" variant="primary">
                  Pesan Sekarang
                </Button>
                <Button href="#portfolio" variant="outline">
                  Lihat Portfolio
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}