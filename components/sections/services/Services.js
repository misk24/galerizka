import { Animate } from "@/components/ui/Animate";
import { services } from "./constant";

export default function Services() {
  return (
    <section id="services" className="bg-blush-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Animate delay={200} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-mulberry-deep">
            Layanan
          </p>
          <h2 className="mb-4">Dari jahit baru sampai permak, semua dibicarakan dulu.</h2>
          <p>Pilih yang paling sesuai dengan kebutuhan Anda. Detail dan estimasi pengerjaan kami sampaikan sebelum Anda memutuskan.</p>
        </Animate>

        <Animate delay={200} className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-mulberry-deep text-blush-soft">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl">{title}</h3>
                <p className="leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </Animate>
      </div>
    </section>
  );
}
