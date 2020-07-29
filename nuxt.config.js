export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msvalidate.01', content: 'E02DDF417CA7C7D33A55805B3E9A81C7' },
      { name: 'google-site-verification', content: 'ph8yiMtTCaq7CbTlp0ut2JvjqhpAZE4QPCbNBgaDcwQ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    https: true,
    baseURL: 'http://abeille.top/api'
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    lang: {
      t: (key, ...params) => i18n.t(key, params)
    },
    theme: {
      themes: {
        dark: {
          primary: '#FF6F00'
        },
        light: {
          primary: '#FF6F00'
        }
      }
    }
  },
  /*
  ** nuxt prismjs configuration
  ** https://zh.nuxtjs.org/api/configuration-loading/
  */
  prismjs: {
    languages: [
      'html',
      'css',
      'javascript',
      'bash',
      'nginx',
      'sql',
      'java'
    ],
    plugins: [
      'line-numbers',
      'show-language',
      'copy-to-clipboard'
    ],
    theme: 'coy',
    css: true
  },
  /*
  ** nuxt loading configuration
  ** https://zh.nuxtjs.org/api/configuration-loading/
  */
  loading: {
    color: '#FF6F00'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true
  }
}
