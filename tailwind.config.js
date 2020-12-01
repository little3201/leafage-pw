module.exports = {
  darkMode: 'media',
  theme: {
  },
  purge: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  plugins: [],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    transitionDuration: ['responsive', 'hover', 'focus'],
  }
}
