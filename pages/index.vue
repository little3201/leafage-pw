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
  }
}
</script>