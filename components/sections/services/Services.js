"use client";

import { Animate } from "@/components/ui/Animate";
import { CalendarClock, Palette, Ruler, Scissors } from "lucide-react";
import { services } from "./constant";

const serviceIcons = {
  scissors: Scissors,
  ruler: Ruler,
  palette: Palette,
  "calendar-clock": CalendarClock,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Animate delay={200} className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-mulberry-deep text-sm font-bold tracking-wider uppercase mb-3">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">
            Layanan Jahit dan Penyesuaian Pakaian
          </h2>
          <p className="leading-relaxed">
            Pilih layanan yang sesuai dengan kebutuhan pakaian Anda. Detail pesanan dan estimasi pengerjaan dapat dibicarakan sebelum pemesanan.
          </p>
        </Animate>

        <Animate delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <div
                key={service.title}
                className="group p-8 border border-blush-soft rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blush-soft rounded-2xl text-mulberry-deep mb-6 transition-colors duration-300 group-hover:text-white group-hover:bg-dusty-rose">
                  {Icon && <Icon size={26} strokeWidth={1.8} aria-hidden="true" />}
                </div>
                <h3 className="text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </Animate>
      </div>
    </section>
  );
}
