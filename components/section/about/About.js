export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-5/12 relative">
            <svg width="0" height="0">
              <clipPath id="shape" clipPathUnits="objectBoundingBox">
                <path d="M0.04,0H0.56A0.04,0.04,0,0,1,0.6,0.04V0.06A0.04,0.04,0,0,0,0.64,0.1H0.96A0.04,0.04,0,0,1,1,0.14V0.96A0.04,0.04,0,0,1,0.96,1H0.44A0.04,0.04,0,0,1,0.4,0.96V0.94A0.04,0.04,0,0,0,0.36,0.9H0.04A0.04,0.04,0,0,1,0,0.86V0.04A0.04,0.04,0,0,1,0.04,0Z"/>
              </clipPath>
            </svg>
            <div className="relative aspect-square inverted overflow-hidden rounded-[20px] group">
              <div className="absolute inset-0 bg-[#ec227a]/10 z-10" />
              <img 
                src="/images/logo/label.jpg" 
                alt="Tentang Galeriz.ka" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-7/12">
            <span className="inline-block text-sm font-medium text-muted-rose mb-3 tracking-wider uppercase">Tentang Kami</span>
            <h2 className="text-4xl font-bold text-dark-charcoal mb-6 leading-tight">
              Menghadirkan Karya Jahitan Berkualitas Tinggi
            </h2>
            
            <div className="space-y-6 text-dark-charcoal/70">
              <p className="leading-relaxed">
                Galeriz.ka adalah penyedia jasa jahit profesional yang berkomitmen untuk memberikan hasil jahitan berkualitas tinggi dengan sentuhan personal. 
                Kami percaya bahwa pakaian yang dibuat khusus akan memberikan kenyamanan dan kepercayaan diri yang lebih.
              </p>
              <p className="leading-relaxed">
                Dengan tim penjahit yang berpengalaman dan bahan berkualitas, kami siap mewujudkan desain baju impian Anda menjadi kenyataan.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-warm-gray border border-soft-pink rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">500+</div>
                <div className="text-sm text-dark-charcoal/70 font-medium">Pelanggan</div>
              </div>
              <div className="text-center p-4 bg-warm-gray border border-soft-pink rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">1000+</div>
                <div className="text-sm text-dark-charcoal/70 font-medium">Pesanan</div>
              </div>
              <div className="text-center p-4 bg-warm-gray border border-soft-pink rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-dark-charcoal mb-2">98%</div>
                <div className="text-sm text-dark-charcoal/70 font-medium">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}