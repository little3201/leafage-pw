/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.leafage.top'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
