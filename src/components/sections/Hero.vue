<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="images/photo-cf.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'text-h3': 'text-h2']"
                  class="font-weight-black"
                >
                  ABEILLE
                </span>
                <v-responsive
                  class="mx-auto text-h6 font-weight-light my-8"
                  max-width="720"
                >
                  一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！
                </v-responsive>
              </v-col>

              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#features')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',

  provide: {
    theme: { isDark: true }
  },

  computed: {
    minHeight () {
      const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

      return `calc(${height} - ${this.$vuetify.application.top}px)`
    }
  }
}
</script>
