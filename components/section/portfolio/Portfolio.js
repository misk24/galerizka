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
      const scrollAmount = 300; // Adjust this value to control scroll distance
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
              <span className="inline-block text-dusty-rose text-sm font-bold tracking-wider uppercase mb-3">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl mb-4">
                Karya Terbaru Kami
              </h2>
              <p className="leading-tight">
                Lihat beberapa hasil karya terbaik kami yang dibuat dengan penuh dedikasi dan ketelitian.
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
                  <div className="hidden absolute inset-0 bg-linear-to-t from-mulberry-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-2xl font-heading font-bold text-white mb-3">
                        {item.title}
                      </div>
                      <button 
                        onClick={() => openModal(item)}
                        className="inline-flex items-center text-white hover:text-dusty-rose transition-colors text-sm font-medium"
                        aria-label={`Lihat detail ${item.title}`}
                      >
                        Lihat Detail <ArrowUpRight className="ml-1 w-4 h-4" />
                      </button>
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
                      onClick={() => openModal(item)}
                      className="text-dusty-rose hover:text-mulberry-deep"
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
                    className="w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  >
                    <div className="flex h-full min-h-[500px] md:min-h-full">
                      <div className="flex space-x-4 p-4">
                      {modalContent.modal.map((img, index) => (
                        <div key={index} className="shrink-0 w-[300px] h-full">
                          <div className="relative w-full h-full">
                            <Image
                              src={img}
                              alt={`${modalContent.title} - ${index + 1}`}
                              fill
                              className="object-cover rounded-2xl"
                              sizes="(max-width: 768px) 300px, 400px"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-mulberry-deep/70 text-white p-2 rounded-full hover:bg-mulberry-deep/90 transition-all z-10"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-mulberry-deep/70 text-white p-2 rounded-full hover:bg-mulberry-deep/90 transition-all z-10"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={24} />
                  </button>
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
                  <div className="border-t border-dusty-rose pt-6 space-y-4">
                    <h3 className="text-2xl font-medium text-dusty-rose">Deskripsi</h3>
                    <p className="leading-tight">{modalContent.description}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-dusty-rose space-y-4">
                    <h3 className="text-2xl font-medium text-dusty-rose">Klien</h3>
                    <p className="leading-tight">{modalContent.client}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
}
