"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Heart } from 'lucide-react';
import { portfolioItems, categories } from './portfolioData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-muted-rose mb-3">Portofolio</span>
          <h2 className="text-4xl font-bold text-dark-charcoal mb-4">Karya Terbaru Kami</h2>
          <p className="text-dark-charcoal/70 max-w-2xl mx-auto">
            Lihat beberapa hasil karya terbaik kami yang dibuat dengan penuh dedikasi dan ketelitian.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-muted-rose text-white'
                  : 'text-dark-charcoal/70 hover:bg-soft-pink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-4/5 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={item.featured}
                />
                
                {/* Overlay */}
                <div className="hidden absolute inset-0 bg-linear-to-t from-dark-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-sm text-white mb-1">{item.category}</span>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <button className="inline-flex items-center text-white hover:text-pink-300 transition-colors text-sm font-medium">
                      Lihat Detail <ArrowUpRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 lg:hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <button className="text-pink-600 hover:text-pink-700">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-warm-gray bg-muted-rose hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            Lihat Semua Karya
          </button>
        </div>
      </div>
    </section>
  );
}
