module.exports = {
  theme: {
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ],
    options: {
    }
  },
  plugins: [
  ],
  variants: {
  }
}
