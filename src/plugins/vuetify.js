import Vue from 'vue'
import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCol,
  VInput,
  VRow,
  VToolbar
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCol,
    VInput,
    VRow,
    VToolbar
  },
  directives: {
    Ripple
  }
})

const opts = {}

export default new Vuetify(opts)
