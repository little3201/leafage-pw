import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VBtn,
  VCard,
  VCarousel,
  VCarouselItem,
  VCol,
  VContent,
  VContainer,
  VCheckbox,
  VDivider,
  VFooter,
  VForm,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemContent,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMenu,
  VNavigationDrawer,
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
    VAppBarNavIcon,
    VBtn,
    VCard,
    VCarousel,
    VCarouselItem,
    VCol,
    VContent,
    VContainer,
    VCheckbox,
    VDivider,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemContent,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VMenu,
    VNavigationDrawer,
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
    iconfont: 'mdi' // default - only for display purposes
  }
}

export default new Vuetify(opts)
