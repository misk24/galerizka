"use client";

import Image from "next/image";
import { portfolioItems } from "./constant";
import { ArrowUpRight } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/hooks/useModal";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function Portfolio() {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimateOnScroll className="flex flex-col gap-4 lg:sticky lg:top-36 h-fit overflow-y-hidden">
            <div className="text-center lg:text-start">
              <span className="inline-block text-muted-rose text-sm font-bold tracking-wider uppercase mb-3">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                Karya Terbaru Kami
              </h2>
              <p className="text-dark-charcoal/70 text-lg font-medium">
                Lihat beberapa hasil karya terbaik kami yang dibuat dengan penuh dedikasi dan ketelitian.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Portfolio Grid */}
          <AnimateOnScroll threshold={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-4/5 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={item.featured}
                    onClick={() => openModal(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openModal(item)}
                  />
                  
                  {/* Overlay */}
                  <div className="hidden absolute inset-0 bg-linear-to-t from-dark-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block text-sm text-white mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <button 
                        onClick={() => openModal(item)}
                        className="inline-flex items-center text-white hover:text-muted-rose transition-colors text-sm font-medium"
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
                      <h3 className="font-medium text-lg text-dark-charcoal">
                        {item.title}
                      </h3>
                      <p className="text-sm text-dark-charcoal/70 font-medium">
                        {item.category}
                      </p>
                    </div>
                    <button 
                      onClick={() => openModal(item)}
                      className="text-muted-rose hover:text-pink-700"
                      aria-label={`Lihat detail ${item.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <div className="w-full h-full flex flex-col md:flex-row">
            {/* Kolom Gambar */}
            <div className="hidden md:block relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={modalContent?.image || ''}
                alt={modalContent?.title || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Kolom Deskripsi */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto">
              <h2 className="text-2xl font-bold text-dark-charcoal mb-2">
                {modalContent?.title}
              </h2>
              <p className="text-muted-rose font-medium mb-4">
                {modalContent?.category}
              </p>
              {modalContent?.description && (
                <div className="prose text-dark-charcoal/80 font-medium border-t border-warm-gray pt-6">
                  {modalContent.description}
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
