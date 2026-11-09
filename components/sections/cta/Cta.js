import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";

export default function Cta() {
  return (
    <section aria-labelledby="closing-cta-title" className="py-20 md:py-28 bg-blush-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center">
          <h2 id="closing-cta-title" className="text-3xl md:text-4xl mb-6">
            Punya Model Busana yang Ingin Dibuat?
          </h2>
        </Animate>
        <Animate delay={200} className="text-center">
          <p className="max-w-3xl mx-auto mb-8">
            Ceritakan kebutuhan ukuran, model, dan tanggal pemakaian Anda.
            Kami akan membantu membahas detail pesanan dan estimasi pengerjaannya.
          </p>
        </Animate>
        <Animate delay={200} className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="https://wa.link/4u5haz" target="_blank" rel="noopener noreferrer">
              Mulai Konsultasi
            </Button>
          </div>
        </Animate>
      </div>
    </section>
  );
}
