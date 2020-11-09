<template>
  <div class="max-w-6xl px-4 mx-auto">
    <nuxt-content :document="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: 'About',

  head () {
    const title = 'About - Abeille | 布吉岛'
    const description = '关于布吉岛，关于我'
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
  
  async asyncData ({ app: { $content } }) {
    const data = await $content('about').fetch()
    return { data }
  }
})
</script>