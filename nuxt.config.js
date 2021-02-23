export default {
  ssr: true,
  head: {
    title: 'Leafage',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Leafage' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'google-site-verification', content: 'ph8yiMtTCaq7CbTlp0ut2JvjqhpAZE4QPCbNBgaDcwQ' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Leafage' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Leafage'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css',
    '~/node_modules/highlight.js/styles/github.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/accessor',
    '~/plugins/composition-api',
    '~/plugins/ga.client'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/templates',
    '~/components/global',
    '~/components/sections',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    https: true,
    progress: true,
    credentials: true,
    baseURL: 'https://www.abeille.top/api',
    // proxy: true
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-highlightjs',
      'markdown-it-mark',
      'markdown-it-deflist'
    ],
    runtime: true // Support `$md()`
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://www.abeille.top/api'
  },

  globalName: 'leafage',

  // nuxt loading configuration (https://zh.nuxtjs.org/api/configuration-loading)
  loading: {
    color: 'black'
  },
  generate: {
    fallback: false,
    routes: ['/', '404']
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  }
}
