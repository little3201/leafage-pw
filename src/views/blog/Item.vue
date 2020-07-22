<template>
  <v-container fluid class="pa-0">
    <profiles :datas.sync="datas" />
  </v-container>
</template>

<script>
import { retrieveArticleFunc } from '@/api/method'
import Profiles from '@/components/sections/Profiles.vue'

export default {
  components: {
    Profiles
  },

  data: () => ({
    datas: []
  }),

  created () {
    this.retrieveArticle()
  },

  methods: {
    retrieveArticle () {
      retrieveArticleFunc().then(
        response => {
          // imageUrl处理imageMogr2/thumbnail/640x640/interlace/1/blur/1x0/quality/100
          this.items = response.data
        },
        error => {
          alert(error.statusText)
        }
      )
    }
  }
}
</script>
