import Vue from 'vue'
import Vuetify, {
  VApp,
  VAppBar,
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
  VImg,
  VMenu,
  VRow,
  VSheet,
  VSpacer,
  VTextField,
  VToolbarTitle
} from 'vuetify/lib'

import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
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
    VImg,
    VMenu,
    VRow,
    VSheet,
    VSpacer,
    VTextField,
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
