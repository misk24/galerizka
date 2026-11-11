"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex items-center min-h-[calc(100svh-5rem)] md:min-h-[600px] lg:min-h-[calc(100svh-5rem)] py-16"
    >
      <Animate animation="fadeIn" delay={200} className="absolute inset-0">
        <Image
          src="/images/hero/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </Animate>
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-blush-soft/95 via-blush-soft/85 to-dusty-rose/30" />
      <div className="w-full max-w-4xl lg:max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Animate delay={200}>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-mulberry-deep mb-4">
                Jahit Busana dan Permak · Lombok Timur
              </p>
              <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Busana yang Pas dengan Ukuran dan Gaya Anda
              </h1>
            </Animate>
            <Animate delay={400}>
              <p className="text-lg max-w-2xl mx-auto lg:mx-0">
                Pesan jahitan sesuai ukuran dan model pilihan Anda. Diskusikan desain,
                bahan, dan kebutuhan pengerjaan bersama Galeriz.ka sebelum pesanan disepakati.
              </p>
            </Animate>
            <Animate delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button href="https://wa.link/4u5haz" target="_blank" rel="noopener noreferrer" variant="primary">
                  Konsultasikan Pesanan
                </Button>
                <Button href="#portfolio" variant="outline">
                  Lihat Hasil Jahitan
                </Button>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
