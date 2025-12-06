"use client";

import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Gaun Malam",
    category: "Gaun",
    image: "/images/portfolio/dress.png"
  },
  {
    id: 2,
    title: "Kemeja Pria",
    category: "Kemeja",
    image: "/images/portfolio/shirt1.jpg"
  },
  {
    id: 3,
    title: "Kebaya Modern",
    category: "Kebaya",
    image: "/images/portfolio/kebaya.png"
  },
  {
    id: 4,
    title: "Setelan Formal",
    category: "Setelan",
    image: "/images/portfolio/suit1.jpg"
  },
  {
    id: 5,
    title: "Jas Pengantin",
    category: "Jas",
    image: "/images/portfolio/wedding.png"
  },
  {
    id: 6,
    title: "Blazer Wanita",
    category: "Blazer",
    image: "/images/portfolio/blazer1.jpg"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Portofolio Kami</h2>
          <div className="w-20 h-1 bg-muted-rose mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat beberapa hasil karya terbaik kami yang dibuat dengan penuh dedikasi dan ketelitian.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-9 aspect-h-16">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm text-rose-200 mb-1">{item.category}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <button className="text-white hover:text-rose-200 transition-colors flex items-center">
                  Lihat Detail <ArrowUpRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-muted-rose text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">
            Lihat Semua Karya
          </button>
        </div>
      </div>
    </section>
  );
}
