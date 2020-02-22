<template>
  <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
      >
        <v-row>
          <v-col cols="12">
            <v-row justify="center">
              <v-card
                v-for="n in 9" :key="n"
                class="ma-3"
                max-width="344"
                hover
              >
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                  height="194"
                ></v-img>
                <v-card-title>
                  Top western road trips
                </v-card-title>
                <v-card-text>
                  Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>
                <!-- <v-card-actions>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions> -->
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'

export default {
  name: 'resourcd',
  components: {
    Headers
  },
  data: () => ({
    drawer: null,
    items: [
      {
        text: 'COMMUNITY',
        url: '/community'
      },
      {
        text: 'RESOURCE',
        url: '/resource'
      },
      {
        text: 'DOCUMENT',
        url: '/document'
      },
      {
        text: 'ABOUT',
        url: '/introduce'
      },
      {
        text: 'SIGN IN',
        url: '/signin'
      },
      {
        text: 'SIGN UP',
        url: '/signup'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.row {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
