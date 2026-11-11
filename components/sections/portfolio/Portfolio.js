"use client";

import { Animate } from "@/components/ui/Animate";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/hooks/useModal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { portfolioItems } from "./constant";

export default function Portfolio() {
  const scrollContainerRef = useRef(null);
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  const galleryImages = Array.isArray(modalContent?.modal)
    ? modalContent.modal.filter(Boolean)
    : [];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const distance = Math.max(container.clientWidth * 0.85, 260);
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
  }, [isOpen, modalContent]);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Animate className="flex h-fit flex-col gap-4 lg:sticky lg:top-36">
            <div className="text-center lg:text-start">
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-wider text-mulberry-deep">
                Portofolio
              </span>
              <h2 className="mb-4 text-3xl md:text-4xl">
                Beberapa Hasil Jahitan
              </h2>
              <p className="leading-tight">
                Lihat beberapa contoh pakaian yang pernah kami kerjakan.
              </p>
            </div>
          </Animate>

          <Animate
            threshold={0.1}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {[...portfolioItems].sort((a, b) => b.id - a.id).map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
                    aria-label={`Lihat detail ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={item.featured}
                    />
                  </button>

                  <div className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-linear-to-t from-mulberry-deep/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 lg:flex">
                    <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                      <div className="mb-3 font-heading text-2xl font-bold text-white">
                        {item.title}
                      </div>
                      <span className="inline-flex items-center text-sm font-medium text-white">
                        Lihat Detail <ArrowUpRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:hidden">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {[...item.category].sort().map((cat) => (
                          <Badge key={cat}>{cat}</Badge>
                        ))}
                      </div>
                      <h3 className="pt-4 text-2xl">{item.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => openModal(item)}
                      className="text-mulberry-deep hover:text-dusty-rose"
                      aria-label={`Lihat detail ${item.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </Animate>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          {modalContent && (
            <div className="flex w-full flex-col md:h-full md:min-h-0 md:flex-row">
              <div className="relative box-border h-[min(62vh,560px)] min-h-[320px] w-full shrink-0 p-4 md:h-full md:min-h-0 md:w-1/2 md:p-6">
                <div
                  ref={scrollContainerRef}
                  role="region"
                  id="portfolio-image-gallery"
                  aria-label={`Galeri gambar ${modalContent.title}`}
                  tabIndex={0}
                  className="relative flex h-full w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scrollbar-hide focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-mulberry-deep"
                >
                  {galleryImages.length > 0 ? (
                    galleryImages.map((img, index) => (
                      <div
                        key={`${img}-${index}`}
                        className="relative h-full w-[min(72vw,360px)] shrink-0 snap-start overflow-hidden rounded-2xl bg-cream"
                      >
                        <Image
                          src={img}
                          alt={`${modalContent.title}, foto ${index + 1}`}
                          fill
                          className="rounded-2xl object-contain"
                          sizes="(max-width: 768px) 72vw, 360px"
                          priority={index === 0}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="flex h-full min-w-full items-center justify-center rounded-xl bg-cream p-6 text-center text-mulberry-deep">
                      Foto untuk proyek ini belum tersedia.
                    </div>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => scroll("left")}
                      className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-mulberry-deep/80 p-2 text-white transition-colors hover:bg-mulberry-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                      aria-label="Gambar sebelumnya"
                      aria-controls="portfolio-image-gallery"
                    >
                      <ChevronLeft size={24} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scroll("right")}
                      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-mulberry-deep/80 p-2 text-white transition-colors hover:bg-mulberry-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                      aria-label="Gambar berikutnya"
                      aria-controls="portfolio-image-gallery"
                    >
                      <ChevronRight size={24} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              <div className="min-w-0 w-full p-6 md:h-full md:min-h-0 md:w-1/2 md:overflow-y-auto">
                <div className="mb-4 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {[...modalContent.category].sort().map((cat) => (
                      <Badge key={cat}>{cat}</Badge>
                    ))}
                  </div>
                  <h2
                    id="modal-title"
                    className="text-2xl md:text-3xl lg:text-5xl"
                  >
                    {modalContent.title}
                  </h2>
                </div>

                {modalContent.description?.trim() && (
                  <div className="space-y-4 border-t border-dusty-rose pt-6">
                    <h3 className="text-2xl font-medium text-mulberry-deep">
                      Deskripsi
                    </h3>
                    <p className="leading-tight">
                      {modalContent.description.trim()}
                    </p>
                  </div>
                )}

                {modalContent.client?.trim() && (
                  <div className="mt-6 space-y-4 border-t border-dusty-rose pt-6">
                    <h3 className="text-2xl font-medium text-mulberry-deep">
                      Klien
                    </h3>
                    <p className="leading-tight">{modalContent.client.trim()}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
