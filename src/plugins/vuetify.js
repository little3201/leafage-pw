import Vue from 'vue'
import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCol,
  VContainer,
  VContent,
  VFooter,
  VForm,
  VInput,
  VRow,
  VTextField,
  VToolbar,
  VTooltip
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCol,
    VContainer,
    VContent,
    VTextField,
    VFooter,
    VForm,
    VInput,
    VRow,
    VToolbar,
    VTooltip
  },
  directives: {
    Ripple
  }
})

const opts = {}

export default new Vuetify(opts)
