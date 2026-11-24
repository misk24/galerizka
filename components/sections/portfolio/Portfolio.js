"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/hooks/useModal";
import { portfolioItems } from "./constant";

const cardLayouts = [
  "col-span-2 md:col-span-7",
  "col-span-1 md:col-span-5 md:mt-24",
  "col-span-1 md:col-span-5",
  "col-span-1 md:col-span-7 md:mt-20",
  "col-span-1 md:col-span-6",
  "col-span-1 md:col-span-6 md:mt-16",
];

export default function Portfolio() {
  const scrollContainerRef = useRef(null);
  const { isOpen, modalContent, openModal, closeModal } = useModal();
  const orderedItems = [...portfolioItems].sort((a, b) => b.id - a.id);

  const scrollGallery = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: (direction === "left" ? -1 : 1) * container.clientWidth * 0.78,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="bg-[#fffdfc] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 grid gap-6 border-b border-mulberry-deep/15 pb-8 md:mb-16 md:grid-cols-[1fr_0.65fr] md:items-end">
          <h2 className="max-w-[12ch] text-5xl leading-[0.98] tracking-[-0.04em] text-mulberry-deep sm:text-6xl lg:text-7xl">
            Dibuat dengan detail. Dipakai dengan percaya diri.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-black-cherry/75 md:justify-self-end">
            Beberapa hasil jahitan Galeriz.ka. Setiap karya berangkat dari
            pilihan model, bahan, dan kebutuhan pemakainya.
          </p>
        </div>

        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
          {orderedItems.map((item, index) => (
            <article
              key={item.id}
              className={cardLayouts[index] || "col-span-1 md:col-span-6"}
            >
              <button
                type="button"
                onClick={() => openModal(item)}
                className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
                aria-label={`Lihat detail ${item.title}`}
              >
                <span
                  className={`relative block overflow-hidden bg-blush-soft ${
                    index === 0
                      ? "aspect-[5/4] md:aspect-[4/5]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes={
                      index === 0
                        ? "(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) 54vw, 48vw"
                        : index === 3
                          ? "(max-width: 767px) calc(50vw - 2rem), (max-width: 1279px) 54vw, 48vw"
                          : index === 4 || index === 5
                            ? "(max-width: 767px) calc(50vw - 2rem), (max-width: 1279px) 46vw, 42vw"
                            : "(max-width: 767px) calc(50vw - 2rem), (max-width: 1279px) 38vw, 36vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center bg-white text-mulberry-deep transition-colors duration-200 group-hover:bg-mulberry-deep group-hover:text-white sm:bottom-5 sm:right-5 sm:h-12 sm:w-12">
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </span>
                </span>

                <span className="mt-4 flex flex-col gap-2 sm:mt-5">
                  <span className="flex flex-wrap gap-1.5">
                    {[...item.category].sort().map((category) => (
                      <span
                        key={category}
                        className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-dusty-rose sm:text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </span>
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-heading text-xl leading-tight text-mulberry-deep sm:text-2xl md:text-3xl">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-dusty-rose opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      size={18}
                    />
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-mulberry-deep/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-black-cherry/70">
            Punya model atau kebutuhan busana tertentu? Ceritakan kepada kami
            untuk memulai konsultasi.
          </p>
          <a
            href="https://wa.link/4u5haz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 self-start border-b border-mulberry-deep pb-2 text-sm font-semibold text-mulberry-deep transition-colors hover:border-dusty-rose hover:text-dusty-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
          >
            Diskusikan pesanan Anda
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalContent && (
          <div className="flex min-h-full flex-col md:h-full md:flex-row">
            <div className="relative w-full md:h-full md:w-[56%]">
              <div
                ref={scrollContainerRef}
                role="region"
                aria-label={`Galeri gambar ${modalContent.title}`}
                tabIndex={0}
                className="flex h-[52vh] min-h-[20rem] snap-x snap-mandatory gap-3 overflow-x-auto p-4 scrollbar-hide focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-dusty-rose md:h-full md:min-h-0"
              >
                {modalContent.modal.map((image, index) => (
                  <div
                    key={image}
                    className="relative h-full w-[78vw] max-w-[25rem] shrink-0 snap-center overflow-hidden bg-blush-soft md:w-[min(78%,24rem)]"
                  >
                    <Image
                      src={image}
                      alt={`${modalContent.title}, foto ${index + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 767px) 78vw, 24rem"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {modalContent.modal.length > 1 && (
                <div className="absolute bottom-7 right-7 flex gap-2">
                  <button
                    type="button"
                    onClick={() => scrollGallery("left")}
                    aria-label="Foto sebelumnya"
                    className="inline-flex h-10 w-10 items-center justify-center bg-white text-mulberry-deep shadow-md transition-colors hover:bg-mulberry-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollGallery("right")}
                    aria-label="Foto berikutnya"
                    className="inline-flex h-10 w-10 items-center justify-center bg-white text-mulberry-deep shadow-md transition-colors hover:bg-mulberry-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>

            <div className="w-full px-6 pb-8 pt-4 md:w-[44%] md:overflow-y-auto md:px-8 md:py-12">
              <div className="mb-5 flex flex-wrap gap-2">
                {[...modalContent.category].sort().map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
              <h2 id="modal-title" className="max-w-[12ch] text-4xl leading-[1.02] text-mulberry-deep sm:text-5xl">
                {modalContent.title}
              </h2>

              {modalContent.description?.trim() && (
                <div className="mt-8 border-t border-mulberry-deep/15 pt-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-dusty-rose">
                    Deskripsi
                  </h3>
                  <p className="text-sm leading-relaxed text-black-cherry/80">
                    {modalContent.description.trim()}
                  </p>
                </div>
              )}

              {modalContent.client?.trim() && (
                <div className="mt-7 border-t border-mulberry-deep/15 pt-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-dusty-rose">
                    Klien
                  </h3>
                  <p className="text-sm leading-relaxed text-black-cherry/80">
                    {modalContent.client.trim()}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
