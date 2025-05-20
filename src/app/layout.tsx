import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Sunoa - Premium Güneş Kremleri',
  description: 'Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri',
  metadataBase: new URL('https://sunoa.com.tr'),
  openGraph: {
    title: 'Sunoa - Premium Güneş Kremleri',
    description: 'Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri',
    url: 'https://sunoa.com.tr',
    siteName: 'Sunoa',
    images: [
      {
        url: '/images/logo/sunoa.png',
        width: 800,
        height: 600,
        alt: 'Sunoa Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunoa - Premium Güneş Kremleri',
    description: 'Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri',
    creator: '@Sunao_tr',
    images: ['/images/logo/sunoa.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/images/background/sahil-bg.png" />
        <link rel="preload" as="image" href="/images/logo/sunoa.png" />
        {/* Ürün resimlerini preload et */}
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-face-cream-spf50-plus.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-face-mist-spf30.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-body-spray-spf30.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-sunscreen-for-kids-spf50-plus.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-after-run-soothing-lotion.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-tinted-sunscreen-spf50.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-bronzlastirici-gunes-yagi-spf15.jpeg" />
        <link rel="preload" as="image" href="/images/product-images/sunoa-lip-protect-balm-spf30.jpeg" />
        
        {/* Sosyal Medya Meta Etiketleri */}
        <meta property="og:title" content="Sunoa - Premium Güneş Kremleri" />
        <meta property="og:description" content="Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri" />
        <meta property="og:image" content="/images/logo/sunoa.png" />
        <meta property="og:url" content="https://sunoa.com.tr" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sunao_tr" />
        <meta name="twitter:title" content="Sunoa - Premium Güneş Kremleri" />
        <meta name="twitter:description" content="Cildinizi güneşin zararlı etkilerinden koruyan premium güneş kremleri" />
        <meta name="twitter:image" content="/images/logo/sunoa.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}