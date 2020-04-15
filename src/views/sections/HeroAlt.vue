<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
        :gradient="gradient"
        :src="src"
        color="#45516b"
        flat
        max-width="100%"
        tile
      >
        <v-row
          v-if="title"
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <base-heading
              :title="title"
              space="2"
              weight="500"
            />

            <base-divider
              color="primary"
              dense
            />

            <v-breadcrumbs
              :items="items"
              class="justify-center pa-0"
              divider=">"
            />
          </v-col>
        </v-row>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
// Components
import {
  HexToRGBA,
  RGBAtoCSS
} from 'vuetify/lib/util/colorUtils'

export default {
  name: 'SectionHeroAlt',

  metaInfo () {
    return {
      changed: meta => (this.title = meta.titleChunk.toUpperCase())
    }
  },

  provide: {
    heading: { align: 'center' }
  },

  data: () => ({
    title: ''
  }),

  computed: {
    gradient () {
      const color = `${this.$vuetify.theme.themes.light.secondary}CC`
      const overlay = RGBAtoCSS(HexToRGBA(color))

      return `to top, ${overlay}, ${overlay}`
    },
    src () {
      return this.$route.meta.src
    },
    items () {
      return [
        { text: 'HOME', to: '/' },
        { text: this.title }
      ]
    }
  }
}
</script>

<style lang="sass">
  #hero-alt
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
