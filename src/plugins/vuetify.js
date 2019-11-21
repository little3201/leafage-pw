import Vue from 'vue'
import Vuetify, {
  VApp,
  VButton,
  VCard,
  VCol,
  VRow,
  VToolbar
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VButton,
    VCard,
    VCol,
    VRow,
    VToolbar
  },
  directives: {
    Ripple
  }
})

const opts = {}

export default new Vuetify(opts)
