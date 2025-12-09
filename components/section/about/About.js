import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <AnimateOnScroll delay={400} className="w-full lg:w-5/12 relative">
            <div className="relative aspect-square overflow-hidden group">
              <div className="absolute inset-0 bg-muted-rose/30 z-10" />
              <img 
                src="/images/logo/label.jpg" 
                alt="Tentang Galeriz.ka" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimateOnScroll>

          {/* Content Section */}
          <div className="w-full lg:w-7/12">
            <AnimateOnScroll delay={200}>
              <span className="inline-block text-sm fon font-bold text-muted-rose mb-3 tracking-wider uppercase">
                Tentang Kami
              </span>
              <h2 className="text-4xl font-bold text-dark-charcoal mb-6 leading-tight">
                Menghadirkan Karya Jahitan Berkualitas Tinggi
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="space-y-6 text-dark-charcoal/70">
              <p className="leading-relaxed font-medium">
                Galeriz.ka adalah penyedia jasa jahit profesional yang berkomitmen untuk memberikan hasil jahitan berkualitas tinggi dengan sentuhan personal. 
                Kami percaya bahwa pakaian yang dibuat khusus akan memberikan kenyamanan dan kepercayaan diri yang lebih.
              </p>
              <p className="leading-relaxed font-medium">
                Dengan tim penjahit yang berpengalaman dan bahan berkualitas, kami siap mewujudkan desain baju impian Anda menjadi kenyataan.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-warm-gray">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">
                  500+
                </div>
                <div className="text-sm text-dark-charcoal/70 font-medium">
                  Pelanggan
                </div>
              </div>
              <div className="text-center p-4 bg-warm-gray">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">
                  1000+
                </div>
                <div className="text-sm text-dark-charcoal/70 font-medium">
                  Pesanan
                </div>
              </div>
              <div className="text-center p-4 bg-warm-gray">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">
                  98%
                </div>
                <div className="text-sm text-dark-charcoal/70 font-medium">
                  Kepuasan
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}