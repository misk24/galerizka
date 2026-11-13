import Badge from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioCard({ item, onOpen }) {
  const label = `Lihat detail ${item.title}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-4/5 overflow-hidden">
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
          aria-label={label}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          />
        </button>

        {/* Overlay hover (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-linear-to-t from-mulberry-deep/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex">
          <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            <div className="mb-3 font-heading text-2xl font-bold text-white">{item.title}</div>
            <span className="inline-flex items-center text-sm font-medium text-white">
              Lihat Detail <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Keterangan (mobile). Tombol panah hanya untuk sentuhan; fokus keyboard memakai tombol gambar. */}
      <div className="flex items-start justify-between p-4 lg:hidden">
        <div>
          <div className="flex flex-wrap gap-1">
            {item.category.map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>
          <h3 className="pt-4">{item.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => onOpen(item)}
          tabIndex={-1}
          aria-hidden="true"
          className="text-mulberry-deep hover:text-black-cherry"
        >
          <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
