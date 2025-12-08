import Link from 'next/link';

export default function Cta() {
  return (
    <section className="py-20 md:py-28 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
            Siap Mewujudkan Proyek Impian Anda?
          </h2>
          <p className="text-dark-charcoal/70 text-lg font-medium max-w-3xl mx-auto mb-8">
            Mari berdiskusi tentang ide dan kebutuhan proyek Anda. Tim kami siap membantu mewujudkannya dengan solusi kreatif dan inovatif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-muted-rose hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Mulai Proyek Anda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
