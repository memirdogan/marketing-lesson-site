/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;