<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img src="https://avatars3.githubusercontent.com/u/34156125?s=400&v=4"></v-img>
      </v-avatar>

      <div></div>

      <v-btn
        color="grey"
        href="https://vuetifyjs.com"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          Vuetify Documentation
        </span>
      </v-btn>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'SectionAboutMe'
}
</script>
