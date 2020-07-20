<template>
  <v-container fluid class="pa-0">
    <profiles :datas.sync="datas" />
  </v-container>
</template>

<script>
import { SERVER_URL } from '~/assets/script/request'
import Profiles from '~/components/sections/Profiles.vue'

export default {
  components: {
    Profiles
  },

  async asyncData ({ $axios }) {
    const datas = await $axios.$get(SERVER_URL.article)
    return { datas }
  }
}
</script>
