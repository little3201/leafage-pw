import Vue from 'vue'
import { Ripple } from 'vuetify/lib/directives'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAvatar,
  VBtn,
  VCard,
  VCardActions,
  VCardSubtitle,
  VCardTitle,
  VCardText,
  VCarousel,
  VCarouselItem,
  VCol,
  VContent,
  VContainer,
  VCheckbox,
  VDivider,
  VDialog,
  VFooter,
  VForm,
  VIcon,
  VImg,
  VList,
  VListGroup,
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
  VSparkline,
  VTextField,
  VTooltip,
  VToolbarTitle,
  VToolbarItems
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAvatar,
    VBtn,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardTitle,
    VCardText,
    VCarousel,
    VCarouselItem,
    VCol,
    VContent,
    VContainer,
    VCheckbox,
    VDivider,
    VDialog,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VList,
    VListGroup,
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
    VSparkline,
    VTextField,
    VTooltip,
    VToolbarTitle,
    VToolbarItems
  },
  directives: {
    Ripple
  }
})

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.amber.darken4
      }
    }
  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
}

export default new Vuetify(opts)
