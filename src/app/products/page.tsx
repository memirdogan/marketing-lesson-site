'use client';

import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'new-arrivals', 'best-sellers', 'trending'];
  const categoryNames: Record<string, string> = {
    'all': 'Tümü',
    'new-arrivals': 'Yeni Gelenler',
    'best-sellers': 'En Çok Satanlar',
    'trending': 'Trend Olanlar'
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-serif mb-8">Koleksiyonumuz</h1>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md capitalize ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {categoryNames[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-gray-900">Ürün bulunamadı</h3>
          <p className="mt-1 text-gray-500">
            Filtre seçiminizi değiştirmeyi deneyin veya daha sonra tekrar kontrol edin.
          </p>
        </div>
      )}
    </div>
  );
} 