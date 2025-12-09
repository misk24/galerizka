"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { services } from "./constant";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll delay={200} className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-muted-rose text-sm font-bold tracking-wider uppercase mb-3">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
            Solusi Jahit Berkualitas Tinggi
          </h2>
          <p className="text-dark-charcoal/70 text-lg font-medium">
            Kami menyediakan berbagai layanan jahit dengan kualitas terbaik untuk kebutuhan fashion Anda
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 border border-warm-gray shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-warm-gray text-2xl mb-6 group-hover:bg-muted-rose">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-dark-charcoal/70 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}