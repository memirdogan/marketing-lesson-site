import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts, getNewArrivals, brands } from "@/lib/products";

export default function Home() {
  const newProducts = getNewArrivals();
  const featuredProducts = getFeaturedProducts().filter(product => !product.new);

  // Yeni ürünleri ve diğer öne çıkan ürünleri birleştir
  const displayProducts = [...newProducts, ...featuredProducts].slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background/sahil-bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Sunoa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Koleksiyonu Keşfet
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">Öne Çıkan Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-block border border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-colors"
            >
              Tüm Ürünleri Gör
            </a>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">Sunoa Ürün Serileri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
              >
                <span className="text-xl font-serif">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-8">Bizi Takip Edin</h2>
          <p className="text-lg text-gray-600 mb-8">Yeni ürünler, kampanyalar ve daha fazlası için sosyal medya hesaplarımızı takip edin.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://www.instagram.com/sunoa_tr?igsh=MWhzcGwzejBtaHBheA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-medium">Instagram</span>
            </a>
            
            <a 
              href="https://x.com/Sunao_tr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-medium">X (Twitter)</span>
            </a>
            
            <a 
              href="https://www.tiktok.com/@sunoa_tr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-medium">TikTok</span>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61576436552224" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="text-lg font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}