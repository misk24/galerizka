export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Galeriz.ka</h2>
            <p className="text-gray-600 mb-6">
              Galeriz.ka adalah penyedia jasa jahit profesional yang berkomitmen untuk memberikan hasil jahitan berkualitas tinggi dengan sentuhan personal. 
              Kami percaya bahwa pakaian yang dibuat khusus akan memberikan kenyamanan dan kepercayaan diri yang lebih.
            </p>
            <p className="text-gray-600 mb-6">
              Dengan tim penjahit yang berpengalaman dan bahan berkualitas, kami siap mewujudkan desain baju impian Anda menjadi kenyataan.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-gray-600">Pesanan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">98%</div>
                <div className="text-gray-600">Kepuasan</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="relative">
                <img 
                  src="/images/hero.png" 
                  alt="About Us" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}