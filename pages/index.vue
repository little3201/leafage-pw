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
      content: '一套完整的免费、开源的集博客、作品集、可视化等一体的前、后端服务产品。基于 Vue.js 精心制作的页面、Nuxt.js 加持的SEO优化，同时提供后端运营和基于JAVA开发的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, 博客, 文章, 照片墙, abeille.top, vue.js, vuetify, nuxt.js' },
        { hid: 'description', name: 'description', content: this.content },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.content },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.content }
      ]
    }
  }
}
</script>
