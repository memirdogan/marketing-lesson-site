import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Sunoa - Premium Güneş Kremleri',
  description: 'Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/images/background/May 17, 2025, 12_45_17 PM.png" />
        <link rel="preload" as="image" href="/images/logo/sunoa.png" />
        {/* Ürün resimlerini preload et */}
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-face-cream-spf50-plus.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-face-mist-spf30.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-body-spray-spf30.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-for-kids-spf50-plus.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-after-run-soothing-lotion.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-tinted-sunscreen-spf50.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-bronzlastırıcı-gunes-yagi-spf15.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-lip-protect-balm-spf30.jpeg" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}