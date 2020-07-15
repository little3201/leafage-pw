import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    themes: {
      dark: {
        primary: '#FF6F00'
      },
      light: {
        primary: '#FF6F00'
      }
    }
  },
  icons: {
    iconfont: 'mdi' as 'mdi' // default - only for display purposes
  }
}

export default new Vuetify(opts)