<template>
  <section id="articles">
    <v-responsive
      class="mx-auto"
      max-width="1400"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="n in 9"
            :key="n"
            class="d-flex child-flex"
            cols="4"
          >
            <v-card flat tile class="d-flex">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>

<script>
export default {
  name: 'SectionPhotoWall',

  data: () => ({
  })
}
</script>
