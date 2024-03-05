// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  extends: ['@nuxt/ui-pro'],
  content: {
    highlight: {
      theme: {
        default: 'material-theme-lighter',
        dark: 'material-theme-palenight'
      },
      langs: [
        'js',
        'ts',
        'vue',
        'css',
        'scss',
        'sass',
        'html',
        'bash',
        'md',
        'mdc',
        'json'
      ]
    }
  }
})
