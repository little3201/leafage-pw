import Vue from 'vue'
import Vuetify, {
  VCard,
  VRating,
  VToolbar
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCard,
    VRating,
    VToolbar
  },
  directives: {
  // Ripples
  }
})

const opts = {}

export default new Vuetify(opts)
