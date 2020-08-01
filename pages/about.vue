<template>
  <v-container fluid class="pa-0">
    <about-me />
    <social />
  </v-container>
</template>

<script>
import AboutMe from '~/components/sections/AboutMe.vue'
import Social from '~/components/sections/Social.vue'

export default {
  components: {
    AboutMe,
    Social
  },

  head () {
    return {
      title: 'About - abeille | 布吉岛',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'abeille, 布吉岛, about, 关于' }
      ]
    }
  }
}
</script>
