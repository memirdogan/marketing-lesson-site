'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/products';

// Global değişken için TypeScript tanımı
declare global {
  interface Window {
    INITIAL_CATEGORY?: string;
  }
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [displayProducts, setDisplayProducts] = useState(products);
  
  // Sayfa yüklendiğinde kategori seçimini yap
  useEffect(() => {
    // Öncelikle global değişkeni kontrol et
    if (window.INITIAL_CATEGORY) {
      applyCategory(window.INITIAL_CATEGORY);
      window.INITIAL_CATEGORY = undefined; // Bir kez kullan ve temizle
    } 
    // Sonra localStorage'ı kontrol et
    else {
      const savedCategory = localStorage.getItem('selectedCategory');
      if (savedCategory) {
        applyCategory(savedCategory);
      } else {
        // Hiçbir kategori seçilmemişse tüm ürünleri göster
        applyCategory('all');
      }
    }
    
    setIsLoading(false);
  }, []);

  // Kategori uygulama fonksiyonu
  const applyCategory = (category: string) => {
    setSelectedCategory(category);
    
    if (category === 'all') {
      setDisplayProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setDisplayProducts(filtered);
    }
  };

  const categories = ['all', 'new-arrivals', 'best-sellers', 'trending'];
  const categoryNames: Record<string, string> = {
    'all': 'Tümü',
    'new-arrivals': 'Yeni Gelenler',
    'best-sellers': 'En Çok Satanlar',
    'trending': 'Trend Olanlar'
  };

  // Kategori değiştiğinde URL'yi güncelle ve ürünleri filtrele
  const handleCategoryChange = (category: string) => {
    applyCategory(category);
    
    // localStorage'a kaydet
    if (category === 'all') {
      localStorage.removeItem('selectedCategory');
    } else {
      localStorage.setItem('selectedCategory', category);
    }
    
    // URL'yi güncelle
    const url = category === 'all' 
      ? '/products/all/' 
      : `/products/${category}/`;
      
    window.history.pushState({}, '', url);
  };

  // Sayfa yüklenirken loading göster
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-8"></div>
          
          <div className="flex gap-4 mb-8">
            <div className="h-10 bg-gray-200 rounded w-20"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-36"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
              onClick={() => handleCategoryChange(category)}
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
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {displayProducts.length === 0 && (
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