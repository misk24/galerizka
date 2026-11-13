import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Cta() {
  return (
    <section className="on-dark bg-black-cherry py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionHeading dark title="Punya model di kepala? Mari kita jahit." className="mb-10">
          Kirim foto referensi, ukuran, dan tanggal yang Anda butuhkan. Kami balas dengan masukan
          model, pilihan bahan, dan estimasi pengerjaan.
        </SectionHeading>
        <WhatsAppButton variant="light" size="lg" />
      </div>
    </section>
  );
}
