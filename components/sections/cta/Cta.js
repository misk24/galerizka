import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-mulberry-deep py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10 md:h-[28rem] md:w-[28rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10 md:h-80 md:w-80" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Animate delay={120}>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
            Mulai dari sini
          </span>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl">
            Punya busana yang ingin diwujudkan?
          </h2>
        </Animate>
        <Animate delay={220}>
          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-white/75">
            Ceritakan model, ukuran, dan kebutuhan Anda. Kita diskusikan detail serta estimasi pengerjaannya sebelum pesanan dibuat.
          </p>
          <Button
            href="https://wa.link/4u5haz"
            className="rounded-none bg-blush-soft px-8 py-4 text-sm font-semibold text-mulberry-deep hover:bg-white"
          >
            Konsultasi via WhatsApp <span aria-hidden="true" className="ml-2">↗</span>
          </Button>
        </Animate>
      </div>
    </section>
  );
}
