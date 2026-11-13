import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SCROLL_STEP = 300;

function ArrowButton({ direction, label, onClick }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-mulberry-deep p-2 text-white transition-colors hover:bg-black-cherry ${
        direction === "left" ? "left-2" : "right-2"
      }`}
    >
      <Icon aria-hidden="true" size={24} />
    </button>
  );
}

export default function PortfolioModal({ item, isOpen, onClose }) {
  const galleryRef = useRef(null);
  const scroll = (direction) =>
    galleryRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });

  const description = item?.description?.trim();
  const client = item?.client?.trim();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full w-full flex-col rounded-2xl md:flex-row">
        {item && (
          <>
            <div className="relative w-full md:w-1/2">
              <div
                ref={galleryRef}
                role="region"
                aria-label={`Galeri gambar ${item.title}`}
                tabIndex={0}
                className="scrollbar-hide h-full w-full snap-x snap-mandatory overflow-x-auto"
              >
                <div className="flex h-full min-h-[500px] gap-4 p-4 md:min-h-full">
                  {item.modal.map((img, index) => (
                    <div key={img} className="relative h-full w-[300px] shrink-0">
                      <Image
                        src={img}
                        alt={`${item.title} - ${index + 1}`}
                        fill
                        className="rounded-2xl object-cover"
                        sizes="(max-width: 768px) 300px, 400px"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {item.modal.length > 1 && (
                <>
                  <ArrowButton direction="left" label="Foto sebelumnya" onClick={() => scroll(-1)} />
                  <ArrowButton direction="right" label="Foto berikutnya" onClick={() => scroll(1)} />
                </>
              )}
            </div>

            <div className="w-full p-6 md:w-1/2">
              <div className="mb-4 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {item.category.map((cat) => (
                    <Badge key={cat}>{cat}</Badge>
                  ))}
                </div>
                <h2 id="modal-title">{item.title}</h2>
              </div>
              {description && (
                <div className="space-y-4 border-t border-dusty-rose pt-6">
                  <h3>Deskripsi</h3>
                  <p>{description}</p>
                </div>
              )}
              {client && (
                <div className="mt-6 space-y-4 border-t border-dusty-rose pt-6">
                  <h3>Dipesan oleh</h3>
                  <p>{client}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
