import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VBtn,
  VCard,
  VCardText,
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
  VListItemAction,
  VListItemAvatar,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMenu,
  VNavigationDrawer,
  VPagination,
  VRow,
  VSheet,
  VSpacer,
  VSubheader,
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
    VCardText,
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
    VListItemAction,
    VListItemAvatar,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VMenu,
    VNavigationDrawer,
    VPagination,
    VRow,
    VSheet,
    VSpacer,
    VSubheader,
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
