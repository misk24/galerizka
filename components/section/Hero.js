"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/images/hero/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="md:flex items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl text-hero font-bold text-warm-gray leading-tight mb-6">
              Buat Baju Impian Anda Menjadi Kenyataan
            </h1>
            <p className="text-lg text-warm-gray">
              Jasa jahit profesional dengan kualitas terbaik dan hasil yang memuaskan. Desain eksklusif, ukuran pas, dan nyaman digunakan.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Link 
                href="#order" 
                className="bg-warm-gray text-muted-rose px-8 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
              >
                Pesan Sekarang
              </Link>
              <Link 
                href="#services" 
                className="border-2 border-warm-gray text-warm-gray px-8 py-3 rounded-lg font-medium text-center hover:bg-white/10 transition-colors"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            {/* Empty div to maintain layout balance */}
          </div>
        </div>
      </div>
    </section>
  );
}