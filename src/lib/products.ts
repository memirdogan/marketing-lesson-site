import { Product, Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'sunoa-protect',
    name: 'Sunoa Protect',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-face',
    name: 'Sunoa Face',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-kids',
    name: 'Sunoa Kids',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-active',
    name: 'Sunoa Active',
    logo: '/images/logo/sunoa.png'
  }
];

export const products: Product[] = [
  {
    id: 'sunoa-sunscreen-face-cream-spf50-plus',
    name: 'Yüz İçin Güneş Kremi SPF50+',
    brand: 'Sunoa Face',
    description: 'Yüz cildi için özel formüllü, ince dokulu ve yüksek koruma faktörlü güneş kremi.',
    price: 650,
    images: [
      '/images/product-images/sunoa-sunscreen-face-cream-spf50-plus.jpeg'
    ],
    category: 'new-arrivals',
    shopierLink: '', 
    featured: true,
    new: true
  },
  {
    id: 'sunoa-sunscreen-face-mist-spf30',
    name: 'Yüz İçin Güneş Spreyi SPF30',
    brand: 'Sunoa Face',
    description: 'Yüz cildi için ferahlatıcı, makyaj üzerine uygulanabilen sprey formülü.',
    price: 580,
    images: [
      '/images/product-images/sunoa-sunscreen-face-mist-spf30.jpeg'
    ],
    category: 'best-sellers',
    shopierLink: '',
    featured: true
  },
  {
    id: 'sunoa-sunscreen-body-spray-spf30',
    name: 'Vücut İçin Güneş Spreyi SPF30',
    brand: 'Sunoa Protect',
    description: 'Kolay uygulanan sprey formülüyle tüm vücut için etkili güneş koruması.',
    price: 450,
    images: [
      '/images/product-images/sunoa-sunscreen-body-spray-spf30.jpeg'
    ],
    category: 'trending',
    shopierLink: '',
    featured: true
  },
  {
    id: 'sunoa-sunscreen-for-kids-spf50-plus',
    name: 'Çocuklar İçin Güneş Kremi SPF50+',
    brand: 'Sunoa Kids',
    description: 'Hassas çocuk cildi için özel formüllü, suya dayanıklı güneş koruyucu.',
    price: 380,
    images: [
      '/images/product-images/sunoa-sunscreen-for-kids-spf50-plus.jpeg'
    ],
    category: 'best-sellers',
    shopierLink: '',
    featured: true,
    new: true
  },
  {
    id: 'sunoa-after-run-soothing-lotion',
    name: 'After Sun Nemlendirici Losyon',
    brand: 'Sunoa Active',
    description: 'Güneş sonrası cildi yatıştıran ve nemlendiren bakım losyonu.',
    price: 420,
    images: [
      '/images/product-images/sunoa-after-run-soothing-lotion.jpeg'
    ],
    category: 'new-arrivals',
    shopierLink: '',
    featured: true,
    new: true
  },
  {
    id: 'sunoa-tinted-sunscreen-spf50',
    name: 'Renkli Güneş Kremi SPF50',
    brand: 'Sunoa Face',
    description: 'Hafif ton veren, makyaj bazı olarak da kullanılabilen güneş kremi.',
    price: 620,
    images: [
      '/images/product-images/sunoa-tinted-sunscreen-spf50.jpeg'
    ],
    category: 'trending',
    shopierLink: '',
    featured: true
  },
  {
    id: 'sunoa-bronzlastirici-gunes-yagi-spf15',
    name: 'Bronzlaştırıcı Güneş Yağı SPF15',
    brand: 'Sunoa Protect',
    description: 'Eşsiz bronzlaşma etkisi sunan, cildi besleyen güneş yağı.',
    price: 550,
    images: [
      '/images/product-images/sunoa-bronzlastirici-gunes-yagi-spf15.jpeg'
    ],
    category: 'best-sellers',
    shopierLink: '',
    featured: true
  },
  {
    id: 'sunoa-lip-protect-balm-spf30',
    name: 'Dudak Koruyucu Balm SPF30',
    brand: 'Sunoa Active',
    description: 'Dudakları güneşin zararlı etkilerinden koruyan, nemlendirici balm.',
    price: 180,
    images: [
      '/images/product-images/sunoa-lip-protect-balm-spf30.jpeg'
    ],
    category: 'trending',
    shopierLink: '',
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