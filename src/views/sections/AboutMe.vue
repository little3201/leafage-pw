<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="text-h3 font-weight-bold mb-3">ABOUT ME</h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！
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
        to="/about"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          了解更多
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
