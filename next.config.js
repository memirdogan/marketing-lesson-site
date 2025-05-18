/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true, // S3 için gerekli
  },
  output: 'export', // Statik HTML export için
  typescript: {
    // !! UYARI !!
    // TypeScript hatalarını görmezden gel
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;