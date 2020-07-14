<template>
  <section id="404">
    <span
      :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3']"
      class="font-weight-light"
    >
      Looks like this page doesn't exis
    </span>
    
    <v-img
      :src="require('@/assets/images/logo.png')"
      class="mx-auto mb-4"
      contain
      width="200"
    />

    <div class="text-center">
      <v-btn :to="{ name: 'Home' }">
        Get me Out of Here
      </v-btn>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
