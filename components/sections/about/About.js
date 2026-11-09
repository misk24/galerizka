import { Animate } from "@/components/ui/Animate";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Image Section */}
          <Animate delay={400} className="w-full lg:w-5/12 h-full relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-dusty-rose/30 z-10" />
              <Image
                src="/images/logo/label.jpg"
                alt="Tentang Galeriz.ka"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Animate>

          {/* Content Section */}
          <div className="w-full lg:w-7/12">
            <Animate delay={200}>
              <span className="inline-block text-dusty-rose text-sm font-bold tracking-wider uppercase mb-3">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl mb-4">
                Menghadirkan Karya Jahitan Berkualitas Tinggi
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

  </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}