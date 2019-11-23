import Vue from 'vue'
import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCarousel,
  VCarouselItem,
  VCol,
  VContainer,
  VContent,
  VFooter,
  VForm,
  VInput,
  VRow,
  VSheet,
  VTextField,
  VToolbar
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCarousel,
    VCarouselItem,
    VCol,
    VContainer,
    VContent,
    VFooter,
    VForm,
    VInput,
    VRow,
    VSheet,
    VTextField,
    VToolbar
  },
  directives: {
    Ripple
  }
})

const opts = {}

export default new Vuetify(opts)
