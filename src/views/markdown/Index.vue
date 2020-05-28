<template>
  <v-theme-provider :dark="dark">
    <v-responsive class="mx-auto">
      <v-row class="ma-5">
        <v-btn rounded class="body-1" color="primary" block @click="createArticle">
          提交
        </v-btn>
      </v-row>
      <v-row justify="center" align="start" class="ma-0">
        <v-md-editor v-model="sourceText" height="100%" @change="changeMehtod"></v-md-editor>
      </v-row>
    </v-responsive>
  </v-theme-provider>
</template>

<script>
import { createArticleFunc } from '@/api/method'

export default {
  name: 'editor',

  components: {
  },

  props: {
    dark: Boolean
  },

  data: () => ({
    sourceText: '',
    htmlText: ''
  }),

  methods: {
    createArticle () {
      const params = {
        title: 'redis——分布式锁',
        subtitle: '抢购活动，限量供应；首先第一步设计：将库存信息放入redis进行缓存；',
        imageUrl: 'https://oss.abeille.top',
        content: this.htmlText
      }
      createArticleFunc(params).then(
        response => {
         alert(response.statusText)
        },
        error => {
          alert(error.statusText)
        }
      )
    },
    changeMehtod (sourceText, htmlText) {
      this.sourceText = sourceText
      this.htmlText = htmlText
    }
  }
}
</script>

<style scoped>
</style>
