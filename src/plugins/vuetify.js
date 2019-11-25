import Vue from 'vue'
import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VCarousel,
  VCarouselItem,
  VCheckbox,
  VCol,
  VContainer,
  VContent,
  VFooter,
  VForm,
  VIcon,
  VRow,
  VSheet,
  VSpacer,
  VTextField,
  VToolbar,
  VToolbarItems,
  VToolbarTitle
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VCarousel,
    VCarouselItem,
    VCheckbox,
    VCol,
    VContainer,
    VContent,
    VFooter,
    VForm,
    VIcon,
    VRow,
    VSheet,
    VSpacer,
    VTextField,
    VToolbar,
    VToolbarItems,
    VToolbarTitle
  },
  directives: {
    Ripple
  }
})

const opts = {
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
}

export default new Vuetify(opts)
