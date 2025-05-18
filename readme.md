# Sunoa

Sunoa markası için geliştirilen premium güneş kremleri e-ticaret vitrini.

## Kurulum ve Geliştirme Rehberi

Bu rehber, projeyi yerel ortamınızda çalıştırmak ve geliştirmek için gerekli adımları içerir.

### Ön Koşullar

- Node.js (v18 veya üzeri)
- npm (v9 veya üzeri)

### Kurulum

1. Repo'yu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/sunoa.git
   cd sunoa
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install --legacy-peer-deps
   ```
   > **Not:** `--legacy-peer-deps` bayrağı, React 19 ve Next.js 15 arasındaki bağımlılık uyumsuzluklarını çözmek için gereklidir.

### Geliştirme

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

### Build Alma

Projeyi statik HTML olarak build etmek için:

```bash
npm run build
```

Bu komut, `out` klasöründe statik dosyalar oluşturacaktır.

### Statik Dosyaları Önizleme

Build edilen statik dosyaları yerel ortamda test etmek için:

```bash
npx serve out
```

### Proje Yapısı

```
sunoa/
├── public/             # Statik dosyalar (resimler, fontlar)
│   ├── images/         # Resimler
│   └── fonts/          # Fontlar
├── src/                # Kaynak kodları
│   ├── app/            # Next.js App Router sayfaları
│   ├── components/     # React bileşenleri
│   ├── lib/            # Yardımcı fonksiyonlar ve veriler
│   └── types/          # TypeScript tip tanımlamaları
├── .gitignore          # Git tarafından yok sayılacak dosyalar
├── next.config.js      # Next.js yapılandırması
├── package.json        # Proje bağımlılıkları ve scriptleri
└── README.md           # Proje dokümantasyonu
```

### Önemli Dosyalar

- **src/lib/products.ts**: Ürün verileri bu dosyada tanımlanmıştır.
- **src/app/page.tsx**: Ana sayfa bileşeni.
- **src/app/products/page.tsx**: Ürünler sayfası bileşeni.
- **src/components/layout/Header.tsx**: Üst menü bileşeni.
- **src/components/layout/Footer.tsx**: Alt menü bileşeni.

### GitHub Pages'e Dağıtım

1. `next.config.js` dosyasını güncelleyin:
   ```javascript
   basePath: '/sunoa',
   assetPrefix: '/sunoa',
   ```

2. GitHub Actions workflow dosyasını oluşturun (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install --legacy-peer-deps

         - name: Build
           run: npm run build

         - name: Add .nojekyll file
           run: touch out/.nojekyll

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: out
             branch: gh-pages
   ```

3. GitHub repo'nuzun "Settings > Pages" bölümünden GitHub Pages'i etkinleştirin.

### AWS S3'e Dağıtım

1. AWS CLI'yi yapılandırın:
   ```bash
   aws configure
   ```

2. S3 bucket oluşturun:
   ```bash
   aws s3api create-bucket --bucket sunoa-website --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
   ```

3. Bucket'ı statik web sitesi olarak yapılandırın:
   ```bash
   aws s3 website s3://sunoa-website --index-document index.html --error-document index.html
   ```

4. Dosyaları yükleyin:
   ```bash
   aws s3 sync out/ s3://sunoa-website --delete
   ```

### Sorun Giderme

- **Bağımlılık Hataları**: `npm install --legacy-peer-deps` komutunu kullanın.
- **Build Hataları**: `next.config.js` dosyasında `typescript.ignoreBuildErrors` ve `eslint.ignoreDuringBuilds` ayarlarını `true` olarak ayarlayın.
- **Görsel Yükleme Sorunları**: `next.config.js` dosyasında `images.unoptimized` ayarını `true` olarak ayarlayın.

