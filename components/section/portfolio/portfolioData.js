export const portfolioItems = [
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
    image: "/images/portfolio/shirt.png"
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
    image: "/images/portfolio/suit.png"
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
    image: "/images/portfolio/blazer.png"
  }
];

export const categories = ['Semua', ...new Set(portfolioItems.map(item => item.category))];
