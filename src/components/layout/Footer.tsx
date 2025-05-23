import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Sunoa</h3>
            <p className="text-gray-400">
              Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/new-arrivals/" className="text-gray-400 hover:text-white transition-colors">
                  Yeni Gelenler
                </Link>
              </li>
              <li>
                <Link href="/products/best-sellers/" className="text-gray-400 hover:text-white transition-colors">
                  En Çok Satanlar
                </Link>
              </li>
              <li>
                <Link href="/products/all/" className="text-gray-400 hover:text-white transition-colors">
                  Tüm Ürünler
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.instagram.com/sunoa_tr?igsh=MWhzcGwzejBtaHBheA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://x.com/Sunao_tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.tiktok.com/@sunoa_tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576436552224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sunoa. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;