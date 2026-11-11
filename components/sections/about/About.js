import { Animate } from "@/components/ui/Animate";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
          <Animate delay={400} className="w-full md:w-5/12 relative">
            <div className="relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-dusty-rose/20 z-10 pointer-events-none" />
              <Image
                src="/images/logo/label.jpg"
                alt="Identitas visual Galeriz.ka"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Animate>

          <div className="w-full md:w-7/12">
            <Animate delay={200}>
              <span className="inline-block text-mulberry-deep text-sm font-bold tracking-wider uppercase mb-3">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl mb-4">
                Jahitan yang Dibuat untuk Kebutuhan Anda
              </h2>
            </Animate>
            <Animate delay={200} className="space-y-6">
              <p className="leading-relaxed">
                Galeriz.ka menerima pesanan jahitan pakaian sesuai ukuran dan model yang Anda inginkan.
                Setiap pesanan dapat dibicarakan terlebih dahulu agar detail desain dan kebutuhan bahan lebih jelas.
              </p>
              <p className="leading-relaxed">
                Kami juga menyediakan layanan penyesuaian pakaian. Hubungi kami untuk membahas model,
                bahan, serta estimasi pengerjaan sebelum melakukan pemesanan.
              </p>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
