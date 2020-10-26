module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
  },
  purge: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  plugins: [],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }
}
