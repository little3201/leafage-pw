module.exports = {
  pwa: {
    name: 'Abeille',
    themeColor: '#FF6F00'
  },

  productionSourceMap: false,

  devServer: {
    disableHostCheck: true
  },

  transpileDependencies: [
    'vuetify'
  ],

  css: {
    extract: false
  }
}
