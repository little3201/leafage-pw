<template>
  <v-container fluid class="pa-0">
    <hero />
    <features />
    <starts />
    <news-leter />
  </v-container>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Features from '~/components/sections/Features.vue'
import Starts from '~/components/sections/Starts.vue'
import NewsLeter from '~/components/sections/NewsLeter.vue'

export default {
  components: {
    Hero,
    Features,
    Starts,
    NewsLeter
  },

  head () {
    return {
      title: 'Abeille-布吉岛，一座永不沉没的网络小岛',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, abeille.top, vue.js, vuetify, nuxt.js' },
        { hid: 'description', name: 'description', content: '一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！' },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: '一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！' },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: '一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！' }
      ]
    }
  }
}
</script>
