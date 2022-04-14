const axios = require('axios')

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
      { name: 'google-site-verification', content: '_2Z6I2Wl5xuTKIGRrCD3meIZDgfn_XFVrTv1tKeJ6v8' },
      { name: 'msvalidate.01', content: 'E02DDF417CA7C7D33A55805B3E9A81C7' },
      { name: 'bytedance-verification-code', content: 'QAK19uJv32RHmoMsQ+hi' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ]
  },

  // Global CSS
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/ga.client', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    '~/components/layout',
    '~/components/comment',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // https: true,
    progress: true,
    // credentials: true,
    baseURL: "https://www.leafage.top/api"
  },

  globalName: 'leafage',

  // nuxt loading configuration (https://nuxtjs.org/docs/configuration-glossary/configuration-loading/)
  loading: {
    color: 'black'
  },

  tailwindcss: {
    viewer: false
  },

  // sitemap: sitemap
  sitemap: {
    hostname: 'https://www.leafage.top/',
    exclude: [
      '/error'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    routes: async () => {
      const { data } = await axios.get('https://www.leafage.top/api/assets/posts', { params: { page: 0, size: 99 } })
      return data.content.map((posts) => `/posts/detail/${posts.code}`)
    }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  }
}
