import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="py-20 md:py-28 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll delay={200} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
            Siap Mewujudkan Busana Impian Anda?
          </h2>
          <p className="text-dark-charcoal/70 text-lg font-medium max-w-3xl mx-auto mb-8">
            Konsultasikan desain dan kebutuhan jahit Anda bersama kami. Tim penjahit profesional kami siap mewujudkan busana yang sempurna sesuai keinginan Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#contact">
              Pesan Sekarang
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
