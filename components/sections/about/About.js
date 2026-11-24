import { Animate } from "@/components/ui/Animate";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-blush-soft/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-8">
        <Animate delay={120} className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -left-4 -top-4 h-full w-full border border-dusty-rose/40 md:-left-6 md:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden bg-blush-soft">
            <Image
              src="/images/logo/label.jpg"
              alt="Label Galeriz.ka"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-5 right-4 bg-white px-5 py-3 font-heading text-xl italic text-mulberry-deep md:right-8">
            Galeriz.ka
          </span>
        </Animate>

        <div className="pt-4 lg:py-8">
          <Animate delay={180}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-dusty-rose">
              Tentang Galeriz.ka
            </span>
            <h2 className="mb-7 max-w-xl text-4xl leading-[1.05] md:text-5xl">
              Setiap detail dimulai dari percakapan.
            </h2>
          </Animate>
          <Animate delay={260} className="max-w-xl space-y-5">
            <p className="text-base leading-relaxed text-black-cherry/75">
              Galeriz.ka menerima pesanan jahitan pakaian sesuai ukuran dan model yang Anda inginkan. Kami memulai dengan membicarakan kebutuhan agar detail desain dan pilihan bahan lebih jelas.
            </p>
            <p className="text-base leading-relaxed text-black-cherry/75">
              Selain pembuatan busana, tersedia juga layanan penyesuaian pakaian. Sampaikan kebutuhan dan tenggat waktu Anda untuk didiskusikan sebelum pesanan dikonfirmasi.
            </p>
          </Animate>
          <Animate delay={340} className="mt-9">
            <a
              href="#services"
              className="inline-flex items-center gap-3 border-b border-mulberry-deep pb-2 text-sm font-semibold text-mulberry-deep transition-colors hover:border-dusty-rose hover:text-dusty-rose focus-visible:outline-offset-4"
            >
              Lihat layanan
              <span aria-hidden="true">↗</span>
            </a>
          </Animate>
        </div>
      </div>
    </section>
  );
}
