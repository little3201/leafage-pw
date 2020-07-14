<template>
   <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/photo-cf.jpg"
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
                  :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3']"
                  class="font-weight-light"
                >
                  WELCOME TO
                </span>

                <br>

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'text-h2': 'text-h1']"
                  class="font-weight-black"
                >
                  ABEILLE
                </span>

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
