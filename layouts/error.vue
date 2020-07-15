<template>
  <section id="404">
    <v-container class="text-center">
    <div class="text-center mb-6">
      <p
        :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h5']"
        class="font-weight-black">
        404
      </p>
      <p
        :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h5']"
        class="font-weight-black">
        Oh!
      </p>
      <p
        :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h5']"
        class="font-weight-black">
        Looks like this page doesn't exis
      </p>
    </div>
    
    <v-img
      src="images/logo.png"
      class="mx-auto mb-4"
      contain
      width="200"
    />

    <div class="text-center">
      <v-btn :to="{ name: 'home' }" depressed>
        Get me Out of Here
      </v-btn>
    </div>
    </v-container>
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
