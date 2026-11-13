import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "./constant";

export default function Services() {
  return (
    <section id="services" className="bg-blush-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <SectionHeading title="Dari jahit baru sampai permak, semua dibicarakan dulu." className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          Pilih yang paling sesuai dengan kebutuhan Anda. Detail dan estimasi pengerjaan kami sampaikan sebelum Anda memutuskan.
        </SectionHeading>

        {/* Garis putus-putus meniru jahitan tangan; satu-satunya motif dekoratif di halaman. */}
        <ul className="divide-y divide-dashed divide-mulberry-deep/40 border-y border-dashed border-mulberry-deep/40 lg:col-span-7">
          {services.map(({ title, description, icon: Icon }) => (
            <li key={title} className="grid gap-3 py-8 sm:grid-cols-5 sm:gap-8">
              <div className="flex items-center gap-4 sm:col-span-2">
                <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-mulberry-deep" />
                <h3>{title}</h3>
              </div>
              <p className="sm:col-span-3">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
