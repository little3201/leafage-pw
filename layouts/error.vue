<template>
  <section id="error">
    <v-container fluid>
      <div class="text-center">
        <p
          :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3']"
          class="font-weight-black mt-12"
        >
          {{ error.statusCode ? error.statusCode : 404 }}
        </p>
        <p
          :class="[$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h4']"
          class="font-weight-black"
        >
          Oh!
        </p>
        <p
          :class="[$vuetify.breakpoint.smAndDown ? 'text-h5' : 'text-h4']"
          class="font-weight-black"
        >
          Looks like this page doesn't exist
        </p>
      </div>

      <v-img
        src="images/logo.png"
        class="mx-auto mb-4"
        contain
        width="200"
      />

      <v-row justify="center">
        <v-btn :to="{ name: 'index' }" large depressed color="primary">
          Get me Out of Here
        </v-btn>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  head () {
    const title =
      this.error.statusCode === 404 ? 'This page not found' : 'Server error'
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
