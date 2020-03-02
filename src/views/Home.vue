<template>
  <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
        class="full-height"
      >
        <v-row class="mt-n3">
          <v-img max-height="600"
            class="text-center white--text align-center"
            src="https://oss.abeille.top/auc.jpg">
            <p class="display-4 font-weight-bold">The beautiful、powerful products</p>
            <p class="headline font-weight-bold my-12">Base with Vue.js、vuetifyjs and is Responsive、Beautiful</p>
            <v-btn to="/document" color="primary" class="mx-6" x-large>DOCUMENT</v-btn>
            <v-btn to="/introduce" class="mx-6" x-large>ABOUT US</v-btn>
          </v-img>
        </v-row>
        <v-sheet color="grey lighten-3">
        <p class="text-center ma-12 display-2">Products</p>
        <v-row justify="center" class="my-0">
          <v-col cols="12">
            <v-row justify="center">
              <v-card
                class="ma-3"
                max-width="344"
                hover
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://oss.abeille.top/project.jpg"
                >
                  <v-card-title>abeillt-ui</v-card-title>
                </v-img>
                <v-card-title>abeillt-ui</v-card-title>
                <v-card-text class="text--primary">
                  <div>Vue、Vuetifyjs、Metrial Design, it's so beautiful</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="primary">
                    Learn more
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card
                class="ma-3"
                max-width="344"
                hover
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://oss.abeille.top/aucbool.jpg"
                >
                </v-img>
                <v-card-title>abeille</v-card-title>
                <v-card-text class="text--primary">
                  <div>Spring Cloud Gateway、Spring Boot Security、Webflux, So it's so powerful</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="primary">
                    Learn more
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-card
                class="ma-3"
                max-width="344"
                hover
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://oss.abeille.top/castle.jpg"
                >
                </v-img>
                <v-card-title>abeille-manager</v-card-title>
                <v-card-text class="text--primary">
                  <div>Vue、Vuetifyjs、Metrial Design, it's so lighteen</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="primary">
                    Learn more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        </v-sheet>
        <p class="text-center ma-12 display-2">About</p>
        <v-row justify="center">
          <v-col cols="12">
            <v-card class="ma-md-4 grey darken-3 text-center">
              <v-card-text class="mx-12 white--text display-1 font-weight-bold">Get started with Abeille today
                <v-btn color="primary" class="ma-8" x-large>try to free</v-btn>
                <v-btn outlined color="white" x-large>learn more</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footers />
  </v-app>
</template>

<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
  name: 'home',
  components: {
    Headers,
    Footers
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="scss" scoped>
</style>
