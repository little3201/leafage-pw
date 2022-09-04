/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.leafage.top', 'secure.gravatar.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
