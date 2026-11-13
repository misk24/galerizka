import { Animate } from "@/components/ui/Animate";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/constants/constant";
import { MessageCircle } from "lucide-react";

export default function Cta() {
  return (
    <section className="on-dark bg-black-cherry py-20 md:py-28">
      <Animate delay={200} className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dusty-rose">
          Mulai dari obrolan
        </p>
        <h2 className="mb-6 text-blush-soft">Punya model di kepala? Mari kita jahit.</h2>
        <p className="mb-10 text-blush-soft">
          Kirim foto referensi, ukuran, dan tanggal yang Anda butuhkan. Kami balas dengan masukan
          model, pilihan bahan, dan estimasi pengerjaan.
        </p>
        <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="light" size="lg">
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          Chat via WhatsApp
        </Button>
      </Animate>
    </section>
  );
}
