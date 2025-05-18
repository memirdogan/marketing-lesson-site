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
  trailingSlash: false, // URL sonlarında slash olmamasını sağlar
  eslint: {
    ignoreDuringBuilds: true, // ESLint hatalarını build sırasında görmezden gel
  },
};

module.exports = nextConfig;