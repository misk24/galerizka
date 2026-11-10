"use client";

import { Animate } from "@/components/ui/Animate";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/hooks/useModal";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { portfolioItems } from "./constant";

export default function Portfolio() {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 316; // Adjust this value to control scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Animate className="flex flex-col gap-4 lg:sticky lg:top-36 h-fit">
            <div className="text-center lg:text-start">
              <span className="inline-block text-mulberry-deep text-sm font-bold tracking-wider uppercase mb-3">
                Portofolio
              </span>
              <h2 className="text-3xl md:text-4xl mb-4">
                Beberapa Hasil Jahitan
              </h2>
              <p className="leading-tight">
                Lihat beberapa contoh pakaian yang pernah kami kerjakan.
              </p>
            </div>
          </Animate>

          {/* Portfolio Grid */}
          <Animate threshold={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...portfolioItems].sort((a, b) => b.id - a.id).map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-4/5 relative overflow-hidden">
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mulberry-deep"
                    aria-label={`Lihat detail ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={item.featured}
                    />
                  </button>
                  
                  {/* Overlay */}
                  <div className="hidden absolute inset-0 pointer-events-none bg-linear-to-t from-mulberry-deep/80 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 lg:flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
                      <div className="text-2xl font-heading font-bold text-white mb-3">
                        {item.title}
                      </div>
                      <span className="inline-flex items-center text-white text-sm font-medium">
                        Lihat Detail <ArrowUpRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 lg:hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {[...item.category].sort().map((cat, idx) => (
                          <Badge key={idx}>
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="pt-4 text-2xl">
                        {item.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => openModal(item)}
                      className="text-mulberry-deep hover:text-mulberry-deep"
                      aria-label={`Lihat detail ${item.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Animate>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          <div className="w-full h-full flex flex-col md:flex-row rounded-2xl">
            {modalContent && (
              <>
                {/* Kolom Gambar - Horizontal Scroll */}
                <div className="w-full md:w-1/2 relative">
                  <div
                    ref={scrollContainerRef}
                    role="region"
                    id="portfolio-image-gallery"
                    aria-label={`Galeri gambar ${modalContent.title}`}
                    tabIndex={0}
                    className="w-full h-full min-h-[500px] md:min-h-full flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4 md:p-6"
                  >
                    {modalContent.modal.map((img, index) => (
                      <div key={index} className="relative shrink-0 w-[300px] h-full snap-start">
                        <Image
                          src={img}
                          alt={`${modalContent.title} - ${index + 1}`}
                          fill
                          className="object-cover rounded-2xl"
                          sizes="(max-width: 768px) 300px, 400px"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
{modalContent.modal.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-mulberry-deep/70 text-white p-2 rounded-full hover:bg-mulberry-deep/90 transition-all z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                        aria-label="Gambar sebelumnya"
                        aria-controls="portfolio-image-gallery"
                      >
                        <ChevronLeft size={24} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-mulberry-deep/70 text-white p-2 rounded-full hover:bg-mulberry-deep/90 transition-all z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mulberry-deep"
                        aria-label="Gambar berikutnya"
                        aria-controls="portfolio-image-gallery"
                      >
                        <ChevronRight size={24} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>

                {/* Kolom Deskripsi */}
                <div className="p-6 w-full md:w-1/2">
                  <div className="mb-4 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {[...modalContent.category].sort().map((cat, idx) => (
                        <Badge key={idx}>
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h2 id="modal-title" className="text-2xl md:text-3xl lg:text-5xl">
                      {modalContent.title}
                    </h2>
                  </div>
                  {modalContent.description?.trim() && (
                    <div className="border-t border-dusty-rose pt-6 space-y-4">
                      <h3 className="text-2xl font-medium text-mulberry-deep">Deskripsi</h3>
                      <p className="leading-tight">{modalContent.description.trim()}</p>
                    </div>
                  )}
                  {modalContent.client?.trim() && (
                    <div className="mt-6 pt-6 border-t border-dusty-rose space-y-4">
                      <h3 className="text-2xl font-medium text-mulberry-deep">Klien</h3>
                      <p className="leading-tight">{modalContent.client.trim()}</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
}
