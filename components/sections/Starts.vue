<template>
  <section id="starts">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      src="https://oss.abeille.top/state.jfif"
      alt="abeille"
    >
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col
            v-for="[value, title] of stats"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="text-h2 font-weight-black mb-4"
                v-text="value"
              />

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'SectionStarts',

  data: () => ({
    stats: [
      ['2', 'Github Stars'],
      ['0', 'Releases'],
      ['1', 'Forks'],
      ['5', 'Total Downloads']
    ]
  })
}
</script>
