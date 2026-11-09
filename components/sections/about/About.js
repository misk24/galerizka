import { Animate } from "@/components/ui/Animate";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Image Section */}
          <Animate delay={400} className="w-full lg:w-5/12 h-full relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-dusty-rose/30 z-10" />
              <img 
                src="/images/logo/label.jpg" 
                alt="Tentang Galeriz.ka" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Animate>

          {/* Content Section */}
          <div className="w-full lg:w-7/12">
            <Animate delay={200}>
              <span className="inline-block text-dusty-rose text-sm font-bold tracking-wider uppercase mb-3">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl mb-4">
                Menghadirkan Karya Jahitan Berkualitas Tinggi
              </h2>
            </Animate>
            <Animate delay={200} className="space-y-6">
              <p className="leading-relaxed">
                Galeriz.ka adalah penyedia jasa jahit profesional yang berkomitmen untuk memberikan hasil jahitan berkualitas tinggi dengan sentuhan personal. 
                Kami percaya bahwa pakaian yang dibuat khusus akan memberikan kenyamanan dan kepercayaan diri yang lebih.
              </p>
              <p className="leading-relaxed">
                Dengan tim penjahit yang berpengalaman dan bahan berkualitas, kami siap mewujudkan desain baju impian Anda menjadi kenyataan.
              </p>
            </Animate>

            <Animate delay={200} className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blush-soft rounded-2xl">
                <div className="text-2xl md:text-3xl font-bold text-black-cherry mb-2">
                  500+
                </div>
                <div className="text-sm text-black-cherry">
                  Pelanggan
                </div>
              </div>
              <div className="text-center p-4 bg-blush-soft rounded-2xl">
                <div className="text-2xl md:text-3xl font-bold text-black-cherry mb-2">
                  1000+
                </div>
                <div className="text-sm text-black-cherry">
                  Pesanan
                </div>
              </div>
              <div className="text-center p-4 bg-blush-soft rounded-2xl">
                <div className="text-2xl md:text-3xl font-bold text-black-cherry mb-2">
                  98%
                </div>
                <div className="text-sm text-black-cherry">
                  Kepuasan
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}