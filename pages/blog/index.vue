<template>
  <v-container fluid class="pa-0">
    <profiles :datas="datas" />
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
  },

  head () {
    return {
      title: 'Abeille-布吉岛，一座永不沉没的网络小岛',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, abeille.top, blog' }
      ]
    }
  }
}
</script>
