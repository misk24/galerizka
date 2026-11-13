"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useModal } from "@/hooks/useModal";
import { sortedPortfolioItems } from "./constant";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

export default function Portfolio() {
  const { isOpen, modalContent, openModal, closeModal } = useModal();

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Pesanan yang sudah kami selesaikan."
            className="h-fit text-center lg:sticky lg:top-36 lg:text-start"
          >
            Gamis, kemeja, dan tunik dari berbagai pesanan. Pilih salah satu untuk melihat foto dan detailnya.
          </SectionHeading>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sortedPortfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} onOpen={openModal} />
            ))}
          </div>
        </div>

        <PortfolioModal item={modalContent} isOpen={isOpen} onClose={closeModal} />
      </div>
    </section>
  );
}
