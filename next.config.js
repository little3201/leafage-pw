const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
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
=======
  swcMinify: true
>>>>>>> da49d5b5 (升级以来)
}

module.exports = nextConfig
