<template>
  <v-container fluid class="pa-0">
    <profiles :datas="items" />
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
    console.log($axios)
    const datas = await $axios.$get(SERVER_URL.article)
    console.log(datas)
    return { items: datas }
  }
}
</script>
