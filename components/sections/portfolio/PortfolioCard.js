import { Images } from "lucide-react";
import Image from "next/image";

export default function PortfolioCard({ item, onOpen }) {
  const photoCount = item.modal.length;

  return (
    <article className="group relative">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-blush-soft">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
        {photoCount > 1 && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-mulberry-deep">
            <Images aria-hidden="true" className="h-3.5 w-3.5" />
            {photoCount} foto
          </span>
        )}
      </div>

      <div className="pt-4">
        {/* Tombol di judul diperluas ke seluruh kartu (after:inset-0): satu tab-stop, heading tetap heading. */}
        <h3>
          <button
            type="button"
            onClick={() => onOpen(item)}
            className="cursor-pointer text-left underline-offset-4 outline-none after:absolute after:inset-0 after:rounded-xl group-hover:underline focus-visible:after:outline-3 focus-visible:after:outline-offset-4 focus-visible:after:outline-mulberry-deep"
          >
            {item.title}
          </button>
        </h3>
        <p className="mt-1 text-sm">{item.category.join(", ")}</p>
      </div>
    </article>
  );
}
