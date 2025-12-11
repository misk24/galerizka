import { Animate } from '@/components/ui/Animate';
import { Button } from '@/components/ui/Button';

export default function Cta() {
  return (
    <section className="py-20 md:py-28 bg-blush-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Siap Mewujudkan Busana Impian Anda?
          </h2>
        </Animate>
        <Animate delay={200} className="text-center">
          <p className="max-w-3xl mx-auto mb-8">
            Konsultasikan desain dan kebutuhan jahit Anda bersama kami. Tim penjahit profesional kami siap mewujudkan busana yang sempurna sesuai keinginan Anda.
          </p>
        </Animate>
        <Animate delay={200} className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="https://wa.link/4u5haz">
              Pesan Sekarang
            </Button>
          </div>
        </Animate>
      </div>
    </section>
  );
}
