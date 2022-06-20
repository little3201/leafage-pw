const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      UnoCSS(), // <--
    )
    return config
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  swcMinify: true
}

module.exports = nextConfig
