<template>
  <v-system-bar
    v-if="model"
    app
    color="#262626"
    class="px-4"
    dark
    height="58"
  >
    <a
      class="d-flex align-center"
      href="https://vuetifyjs.com/?ref=vtyd-pro-demo-system-bar"
      target="_blank"
    >
      <v-img
        alt="Vuetify Logo"
        class="mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        width="32"
      />

      <v-img
        alt="Vuetify Name"
        contain
        width="96"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
      />
    </a>

    <v-spacer />

    <v-btn
      class="text-capitalize subtitle-2"
      color="success"
      href="https://store.vuetifyjs.com/product/daedal-responsive-multi-purpose-theme-pro?ref=vtyd-pro-page-features"
      min-width="112"
    >
      Buy Now
    </v-btn>

    <v-divider
      class="ml-6 mr-3"
      vertical
    />

    <v-btn
      class="text-capitalize grey--text mr-n1"
      small
      text
      @click="model = false"
    >
      <v-icon
        color="white"
        left
      >
        mdi-close
      </v-icon>

      Remove Frame
    </v-btn>
  </v-system-bar>
</template>

<script>
export default {
  name: 'HomeSystemBar',

  data: () => ({
    model: true
  })
}
</script>
