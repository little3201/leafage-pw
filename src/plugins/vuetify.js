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
  VCol,
  VContent,
  VContainer,
  VDivider,
  VFooter,
  VForm,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAction,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSpacer,
  VSubheader,
  VTextField,
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
    VCol,
    VContent,
    VContainer,
    VDivider,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAction,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSpacer,
    VSubheader,
    VTextField,
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
