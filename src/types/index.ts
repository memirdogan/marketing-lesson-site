export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  shopierLink: string;
  featured?: boolean;
  new?: boolean;
}

export type ProductCategory = 'all' | 'new-arrivals' | 'best-sellers' | 'trending';

export interface Brand {
  id: string;
  name: string;
  logo: string;
}
