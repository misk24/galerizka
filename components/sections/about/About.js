import { Animate } from "@/components/ui/Animate";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessagesSquare, Ruler, Shirt } from "lucide-react";
import Image from "next/image";

const points = [
  { icon: Ruler, title: "Ukuran sesuai badan", text: "Dijahit mengikuti ukuran Anda, bukan ukuran pasaran." },
  { icon: Shirt, title: "Model sesuai keinginan", text: "Bawa referensi atau ceritakan idenya, kami bantu rumuskan polanya." },
  { icon: MessagesSquare, title: "Dibicarakan sejak awal", text: "Model, bahan, dan kebutuhan waktu dibahas sebelum pesanan dimulai." },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Animate delay={200} className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-dusty-rose/40">
              <Image
                src="/images/logo/label.jpg"
                alt="Label kain bertuliskan Galeriz.ka by Rizka Koryoga di meja jahit"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[30%_50%]"
              />
            </div>
          </Animate>

          <div className="lg:col-span-7">
            <Animate delay={200}>
              <SectionHeading eyebrow="Tentang Galeriz.ka" title="Pas di badan, nyaman dipakai, sesuai cerita Anda." className="mb-6" />
              <p className="mb-4">
                Galeriz.ka by Rizka Koryoga adalah usaha jahit busana di Lombok Timur. Kami
                menerima pesanan sesuai ukuran dan model yang Anda inginkan, mulai dari gamis,
                kemeja, hingga tunik, banyak di antaranya berbahan batik.
              </p>
              <p>
                Setiap pesanan dimulai dari obrolan. Kami juga melayani penyesuaian untuk
                pakaian yang sudah Anda punya.
              </p>
            </Animate>
            <Animate delay={350}>
              <ul className="mt-10 grid gap-6 sm:grid-cols-3">
                {points.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <Icon aria-hidden="true" className="mb-3 h-6 w-6 text-mulberry-deep" />
                    <h3 className="mb-1 text-2xl">{title}</h3>
                    <p className="text-sm leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
