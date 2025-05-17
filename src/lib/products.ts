import { Product, Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'sunoa-original',
    name: 'Sunoa Original',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-premium',
    name: 'Sunoa Premium',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-kids',
    name: 'Sunoa Kids',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-sport',
    name: 'Sunoa Sport',
    logo: '/images/logo/sunoa.png'
  }
];

export const products: Product[] = [
  {
    id: 'lv-sunscreen-spf50',
    name: 'Luxury SPF50 Güneş Kremi',
    brand: 'Sunoa Original',
    description: 'Yüksek koruma faktörlü lüks güneş kremi, cildi UV ışınlarından korur.',
    price: 650,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.31 (2).jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.29.jpeg'
    ],
    category: 'new-arrivals',
    shopierLink: 'https://shopier.com/lv-sunscreen',
    featured: false,
    new: true
  },
  {
    id: 'dior-sunscreen-face',
    name: 'Yüz İçin Güneş Kremi',
    brand: 'Sunoa Premium',
    description: 'Yüz cildi için özel formüllü, ince dokulu güneş koruyucu.',
    price: 580,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30.jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (1).jpeg'
    ],
    category: 'best-sellers',
    shopierLink: 'https://shopier.com/dior-sunscreen',
    featured: true
  },
  {
    id: 'versace-sunscreen-spray',
    name: 'Sprey Güneş Koruyucu',
    brand: 'Sunoa Premium',
    description: 'Kolay uygulanan sprey formülüyle etkili güneş koruması.',
    price: 450,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (2).jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (3).jpeg'
    ],
    category: 'trending',
    shopierLink: 'https://shopier.com/versace-sunscreen',
    featured: false
  },
  {
    id: 'ami-sunscreen-kids',
    name: 'Çocuklar İçin Güneş Kremi',
    brand: 'Sunoa Kids',
    description: 'Hassas ciltler için özel formüllü, suya dayanıklı güneş koruyucu.',
    price: 380,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (4).jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.31.jpeg'
    ],
    category: 'best-sellers',
    shopierLink: 'https://shopier.com/ami-sunscreen',
    featured: true,
    new: true
  },
  {
    id: 'lv-sunscreen-aftersun',
    name: 'After Sun Nemlendirici',
    brand: 'Sunoa Original',
    description: 'Güneş sonrası cildi yatıştıran ve nemlendiren bakım kremi.',
    price: 420,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.29.jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30.jpeg'
    ],
    category: 'new-arrivals',
    shopierLink: 'https://shopier.com/lv-aftersun',
    featured: true,
    new: true
  },
  {
    id: 'dior-sunscreen-tinted',
    name: 'Renkli Güneş Koruyucu',
    brand: 'Sunoa Premium',
    description: 'Hafif ton veren, makyaj bazı olarak da kullanılabilen güneş kremi.',
    price: 620,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (1).jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (2).jpeg'
    ],
    category: 'trending',
    shopierLink: 'https://shopier.com/dior-tinted-sunscreen',
    featured: true
  },
  {
    id: 'versace-sunscreen-body',
    name: 'Vücut İçin Güneş Kremi',
    brand: 'Sunoa Original',
    description: 'Tüm vücut için zengin içerikli, uzun süre koruma sağlayan güneş kremi.',
    price: 550,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (3).jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.30 (4).jpeg'
    ],
    category: 'best-sellers',
    shopierLink: 'https://shopier.com/versace-body-sunscreen',
    featured: true
  },
  {
    id: 'ami-sunscreen-sport',
    name: 'Sporcu Güneş Koruyucu',
    brand: 'Sunoa Sport',
    description: 'Terlemeye ve suya dayanıklı, aktif yaşam için özel formüllü güneş kremi.',
    price: 480,
    images: [
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.31.jpeg',
      '/images/product-images/WhatsApp Image 2025-05-16 at 17.24.31 (1).jpeg'
    ],
    category: 'trending',
    shopierLink: 'https://shopier.com/ami-sport-sunscreen',
    featured: true,
    new: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category || product.category === 'all');
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};