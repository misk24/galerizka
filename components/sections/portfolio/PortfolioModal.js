import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ArrowButton({ direction, label, onClick }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-mulberry-deep shadow transition-colors hover:text-black-cherry ${
        direction === "left" ? "left-2" : "right-2"
      }`}
    >
      <Icon aria-hidden="true" size={20} />
    </button>
  );
}

// Dipasang dengan key={item.id} agar foto kembali ke yang pertama untuk setiap item.
function Gallery({ title, images }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (step) => setIndex((i) => (i + step + count) % count);

  return (
    <div
      className="min-w-0 bg-blush-soft p-4"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
    >
      <div className="relative aspect-4/5 md:aspect-auto md:h-[min(32rem,65vh)]">
        <Image
          src={images[index]}
          alt={`${title}, foto ${index + 1} dari ${count}`}
          fill
          sizes="(min-width: 768px) 440px, 100vw"
          className="object-contain"
        />
        {count > 1 && (
          <>
            <ArrowButton direction="left" label="Foto sebelumnya" onClick={() => go(-1)} />
            <ArrowButton direction="right" label="Foto berikutnya" onClick={() => go(1)} />
          </>
        )}
      </div>
      {count > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto p-1">
          {images.map((img, i) => (
            <li key={img} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Lihat foto ${i + 1}`}
                aria-current={i === index}
                className={`relative block h-16 w-14 overflow-hidden rounded-md transition-opacity ${
                  i === index ? "ring-2 ring-mulberry-deep ring-offset-2 ring-offset-blush-soft" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill sizes="56px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PortfolioModal({ item, isOpen, onClose }) {
  const description = item?.description?.trim();
  const client = item?.client?.trim();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {item && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Gallery key={item.id} title={item.title} images={item.modal} />

          <div className="flex flex-col p-6 md:p-10">
            <div className="flex flex-wrap gap-1">
              {item.category.map((cat) => (
                <Badge key={cat}>{cat}</Badge>
              ))}
            </div>
            <h2 id="modal-title" className="mt-4">{item.title}</h2>
            {description && <p className="mt-4">{description}</p>}
            {client && (
              <div className="mt-6 border-t border-dashed border-mulberry-deep/40 pt-6">
                <p className="text-sm font-medium">Klien</p>
                <p>{client}</p>
              </div>
            )}
            <div className="mt-auto pt-8">
              <WhatsAppButton>Pesan model seperti ini</WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
