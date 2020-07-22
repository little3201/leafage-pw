import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from './i18n'

Vue.use(Vuetify)

const opts = {
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
  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
}
export default ({ app }) => {
  app.Vuetify = new Vuetify(opts)
}
