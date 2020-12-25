module.exports = {
  theme: {
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode', 'light-mode']
    }
  },
  plugins: [],
  variants: {
  }
}
