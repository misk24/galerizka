"use client";

import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center h-[calc(100vh-4rem)] md:h-[600px] lg:h-[calc(100vh-4rem)]"
    >
      <Animate
        animation="fadeIn"
        delay={200}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </Animate>
      <Animate
        animation="fadeIn"
        delay={200}
        className="absolute inset-0 bg-linear-to-r from-blush-soft to-dusty-rose/30"
      />
      <div className="w-full max-w-4xl lg:max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Animate delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Buat Baju Impian Anda Menjadi Kenyataan
              </h1>
            </Animate>
            <Animate delay={400}>
              <p className="text-lg">
                Pesan jahitan sesuai ukuran dan model yang Anda inginkan. Diskusikan desain, pilihan bahan, dan kebutuhan pengerjaan bersama kami.
              </p>
            </Animate>
            <Animate delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <Button href="https://wa.link/4u5haz" target="_blank" rel="noopener noreferrer" variant="primary">
                  Pesan Sekarang
                </Button>
                <Button href="#portfolio" variant="outline">
                  Lihat Portfolio
                </Button>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
