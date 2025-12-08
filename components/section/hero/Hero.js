"use client";

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-hero font-bold text-white leading-tight mb-6">
              Buat Baju Impian Anda Menjadi Kenyataan
            </h1>
            <p className="text-lg text-white  font-medium">
              Jasa jahit profesional dengan kualitas terbaik dan hasil yang memuaskan. Desain eksklusif, ukuran pas, dan nyaman digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link
                href="#order" 
                className="bg-white text-muted-rose px-8 py-3 font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Pesan Sekarang
              </Link>
              <Link 
                href="#portfolio" 
                className="border-2 border-warm-gray text-white px-8 py-3 font-medium text-center hover:bg-white/30 transition-colors"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block w-full lg:w-1/2" />
        </div>
      </div>
    </section>
  );
}