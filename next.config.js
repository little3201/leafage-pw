/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.leafage.top', 'secure.gravatar.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
