import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-blush-soft py-20"
    >
      <Image
        src="/images/hero/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* Scrim hanya di layar kecil agar teks tetap terbaca di atas kain */}
      <div className="absolute inset-0 bg-blush-soft/75 lg:bg-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <Animate delay={100}>
            <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-mulberry-deep">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              Jahit busana custom · Lombok Timur
            </p>
          </Animate>
          <Animate delay={250}>
            <h1 className="mb-6">Busana yang dijahit untuk Anda, bukan untuk semua orang.</h1>
          </Animate>
          <Animate delay={400}>
            <p className="max-w-xl text-black-cherry lg:max-w-lg">
              Gamis, kemeja, tunik, hingga batik seragam, dibuat sesuai ukuran badan dan model
              pilihan Anda. Ceritakan idenya, kami bantu mewujudkannya jahitan demi jahitan.
            </p>
          </Animate>
          <Animate delay={550}>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <WhatsAppButton size="lg" />
              <Button href="#portfolio" variant="outline" size="lg">
                Lihat Hasil Jahitan
              </Button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
