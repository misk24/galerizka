"use client";

import { Animate } from "@/components/ui/Animate";
import { services } from "./constant";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-5 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <Animate delay={100}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-dusty-rose">
              Layanan Galeriz.ka
            </span>
            <h2 className="max-w-md text-4xl leading-[1.05] md:text-5xl">
              Dibuat sesuai ukuran dan kebutuhan.
            </h2>
          </Animate>
          <Animate delay={180} className="md:justify-self-end md:max-w-lg">
            <p className="text-base leading-relaxed text-black-cherry/70">
              Dari pembuatan busana hingga penyesuaian pakaian, setiap kebutuhan bisa dibicarakan lebih dulu sebelum pesanan disepakati.
            </p>
          </Animate>
        </div>

        <div className="grid border-t border-mulberry-deep/15 sm:grid-cols-2">
          {services.map((service, index) => (
            <Animate
              key={service.title}
              delay={index * 90}
              className="group flex gap-5 border-b border-mulberry-deep/15 py-7 sm:px-6 sm:py-9 [&:nth-child(odd)]:sm:pl-0 [&:nth-child(even)]:sm:border-l [&:nth-child(even)]:sm:border-mulberry-deep/15"
            >
              <span className="pt-1 font-body text-xs tracking-[0.18em] text-dusty-rose">
                0{index + 1}
              </span>
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-3">
                  <span aria-hidden="true" className="text-xl">{service.icon}</span>
                  <h3 className="text-2xl md:text-3xl">{service.title}</h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-black-cherry/70 md:text-base">
                  {service.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
