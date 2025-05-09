import { Product, Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'louis-vuitton',
    name: 'Louis Vuitton',
    logo: '/brands/deneme.jpeg'
  },
  {
    id: 'dior',
    name: 'Dior',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Christian_Dior_Logo.svg/2560px-Christian_Dior_Logo.svg.png'
  },
  {
    id: 'versace',
    name: 'Versace',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Versace-logo.svg/2560px-Versace-logo.svg.png'
  },
  {
    id: 'ami',
    name: 'Ami',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/AMI_Paris_logo.png/800px-AMI_Paris_logo.png'
  }
];

export const products: Product[] = [
  {
    id: 'lv-monogram-hoodie',
    name: 'lib altı products',
    brand: 'Louis Vuitton',
    description: 'Luxurious cotton blend hoodie featuring iconic LV monogram pattern.',
    price: 1200,
    images: [
      '/brands/deneme.jpeg',
      'https://images.unsplash.com/photo-1591047139756-eec307b1a7fb'
    ],
    category: 'new-arrivals',
    shopierLink: 'https://shopier.com/lv-monogram-hoodie',
    featured: true,
    new: true
  },
  {
    id: 'dior-oblique-jacket',
    name: 'Oblique Pattern Jacket',
    brand: 'Dior',
    description: 'Premium jacket with all-over Dior Oblique pattern.',
    price: 2300,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      'https://images.unsplash.com/photo-1551028719-8f2b3fada5c8'
    ],
    category: 'best-sellers',
    shopierLink: 'https://shopier.com/dior-oblique-jacket',
    featured: true
  },
  {
    id: 'versace-silk-shirt',
    name: 'Baroque Print Silk Shirt',
    brand: 'Versace',
    description: 'Luxurious silk shirt featuring iconic Versace Baroque print.',
    price: 1150,
    images: [
      'https://images.unsplash.com/photo-1578681994506-b8f463449011',
      'https://images.unsplash.com/photo-1578681994680-d88fb1c3f612'
    ],
    category: 'new-arrivals',
    shopierLink: 'https://shopier.com/versace-silk-shirt',
    featured: true,
    new: true
  },
  {
    id: 'ami-de-coeur-sweater',
    name: 'De Coeur Wool Sweater',
    brand: 'Ami',
    description: 'Classic wool sweater with embroidered Ami de Coeur logo.',
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105'
    ],
    category: 'best-sellers',
    shopierLink: 'https://shopier.com/ami-de-coeur-sweater',
    featured: true
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
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
