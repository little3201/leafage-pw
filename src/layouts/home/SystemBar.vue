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
      href="https://abeille.top"
      target="_blank"
    >
      <v-img
        alt="Abeille Logo"
        class="mr-2"
        contain
        src="@/assets/logo.png"
        width="32"
      />
      <span class="title">ABEILLE</span>
    </a>

    <v-spacer />

    <v-btn
      class="text-capitalize subtitle-2"
      color="success"
      href="https://abeille.top"
      min-width="112"
    >
      Read More
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
