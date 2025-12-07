export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl group">
              <div className="absolute inset-0 bg-[#ec227a]/10 z-10" />
              <img 
                src="/images/logo/label.jpg" 
                alt="Tentang Galeriz.ka" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-gray-100 rounded-2xl"></div>
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