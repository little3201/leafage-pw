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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/accessor',
    { src: '~/plugins/ga.client', ssr: false },
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
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    https: true,
    progress: true,
    credentials: true,
    baseURL: '/api'
  },

  globalName: 'leafage',

  // nuxt loading configuration (https://zh.nuxtjs.org/api/configuration-loading)
  loading: {
    color: 'black'
  },

  tailwindcss: {
    viewer: false
  },

  // sitemap: sitemap
  sitemap: {
    hostname: 'https://www.leafage.top/',
    cacheTime: 1000 * 60 * 60 * 24,
    generate: false,
    exclude: [
      '/error'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: "2021-09-07"
    },
    routes: async () => {
      const routes = [
        {
          url: "/",  //  这里的路径相对 hostname
          changefreq: "always",
          lastmod: new Date()
        },
        {
          url: "/about",
          changefreq: "yearly",
          lastmod: "2021-06-27"
        },
        {
          url: "/resource",
          changefreq: "always",
          lastmod: "2021-07-18"
        },
        {
          url: "/posts",
          changefreq: "always",
          lastmod: new Date
        }
      ]

      const { datas } = await axios.get('https://www.leafage.top/api/assets/posts')

      if (datas) {
        let posts = datas.map((posts: any) => ({
          url: "/posts/detail/" + posts.code,
          changefreq: "monthly",
          lastmod: new Date(posts.modifyTime)
        }))
        // let posts = datas.map((posts: any) => `/posts/detail/${posts.code}`);
        routes.concat(posts)
      }
      
      return routes;
    }
  }
}
