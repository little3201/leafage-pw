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
  VExpandTransition,
  VFooter,
  VForm,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAction,
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
  VToolbarTitle,
  VToolbarItems
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
    VExpandTransition,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAction,
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
    VToolbarTitle,
    VToolbarItems
  },
  directives: {
    Ripple
  }
})

const opts = {
//  theme: {
//    themes: {
//      light: {
//        primary: '#FF9900'
//      }
//    }
//  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
}

export default new Vuetify(opts)
