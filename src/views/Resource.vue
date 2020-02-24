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
                v-for="(source, index) in sources" :key="index"
                class="ma-3"
                max-width="344"
                hover
              >
                <v-img
                  :src="source.url"
                  height="194"
                ></v-img>
                <v-card-title>
                  {{ source.title }}
                </v-card-title>
                <v-card-text>
                  {{ source.subTitle }}
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'
import { fetchSourceFunc } from '@/api/method'

export default {
  name: 'resource',
  components: {
    Headers
  },
  data: () => ({
    drawer: null,
    sources: [
      {
        title: 'Top western road trips',
        subTitle: 'Visit ten places on our planet that are undergoing the biggest changes today.',
        url: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg'
      }
    ]
  }),
  created: function () {
    this.fetchSources()
  },
  methods: {
    fetchSources () {
      fetchSourceFunc().then(
        response => {
          // 设置recommendatories
          this.sources = response.data
        },
        error => {
          // 执行失败的回调函数
          alert(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
