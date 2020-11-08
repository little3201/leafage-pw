<template>
  <div class="max-w-6xl px-4 mx-auto">
    blog
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from '~/assets/request'

export default defineComponent({
  name: 'BLog',

  head () {
    const title = 'Blog - Abeille | 布吉岛'
    const description = 'Blog of Abeille'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  
  async asyncData ({ app: { $axios } }) {
    const datas = await $axios.$get(SERVER_URL.article)
    return { datas }
  }
})
</script>