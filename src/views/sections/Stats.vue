<template>
  <section id="stats">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'SectionStats',

  data: () => ({
    stats: [
      ['24k', 'Github Stars'],
      ['330+', 'Releases'],
      ['1m', 'Downloads/mo'],
      ['5m', 'Total Downloads']
    ]
  })
}
</script>
