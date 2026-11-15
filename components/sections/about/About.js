import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:col-span-5">
          <Image
            src="/images/logo/label.jpg"
            alt="Label kain bertuliskan Galeriz.ka by Rizka Koryoga di meja jahit"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[30%_50%]"
          />
        </div>

        <div className="lg:col-span-7">
          <SectionHeading title="Pas di badan, nyaman dipakai, sesuai cerita Anda." className="mb-6" />
          <p className="mb-4 max-w-xl">
            Galeriz.ka by Rizka Koryoga adalah usaha jahit busana di Lombok Timur. Kami menerima
            pesanan sesuai ukuran dan model yang Anda inginkan, mulai dari gamis, kemeja, hingga
            tunik, banyak di antaranya berbahan batik.
          </p>
          <p className="max-w-xl">
            Setiap pesanan dimulai dari obrolan: model, bahan, dan kapan pakaian dibutuhkan. Kami
            juga melayani penyesuaian untuk pakaian yang sudah Anda punya.
          </p>
        </div>
      </div>
    </section>
  );
}
