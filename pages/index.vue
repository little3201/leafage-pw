<template>
  <v-container fluid>
      <starts />
      <about-me />
  </v-container>
</template>

<script>
import Starts from '~/components/Starts.vue'
import AboutMe from '~/components/AboutMe.vue'

export default {
  components: {
    Starts,
    AboutMe
  }
}
</script>
