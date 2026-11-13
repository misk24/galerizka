import { Button } from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin } from "lucide-react";
import Image from "next/image";

// Satu-satunya gerak di halaman: elemen hero masuk berurutan saat halaman dibuka.
const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="home" className="relative bg-blush-soft">
      <div className="relative h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        <Image
          src="/images/hero/hero.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[70%_50%]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-center py-14 lg:min-h-[calc(100svh-5rem)] lg:w-1/2 lg:py-24 lg:pr-12">
          <p style={delay(0)} className="animate-fadeInUp mb-6 flex items-center gap-2 text-mulberry-deep">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Penjahit busana di Lombok Timur
          </p>
          <h1 style={delay(120)} className="animate-fadeInUp">
            Busana yang dijahit untuk Anda, bukan untuk semua orang.
          </h1>
          <p style={delay(240)} className="animate-fadeInUp mt-6 max-w-lg">
            Gamis, kemeja, tunik, hingga batik seragam, dibuat sesuai ukuran badan dan model
            pilihan Anda. Ceritakan idenya, kami bantu mewujudkannya jahitan demi jahitan.
          </p>
          <div style={delay(360)} className="animate-fadeInUp mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton size="lg" />
            <Button href="#portfolio" variant="outline" size="lg">
              Lihat Hasil Jahitan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
