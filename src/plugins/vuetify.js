import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'
import {
  VCol,
  VRow
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow
  }
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FF6F00',
        secondary: '#050b1f',
        accent: '#204165'
      },
      dark: {}
    }
  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
})
