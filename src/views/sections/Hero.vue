<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="PROMOTE YOUR BUSINESS WITH ABEILLE" />

          <base-body>
            Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality.
            incubator seed round massmarket.
            buyer agile development growth hacking business-to-consumer ecosystem
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn>
              Discover More
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              Get Started Now
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
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
