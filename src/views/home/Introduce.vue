<template>
  <v-row justify="center" class="my-0">
    <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="8">
      <v-card class="pa-7">
        <h2>{{ introduction.title }}</h2>
        <p v-html="introduction.content"></p>
        <p v-html="introduction.contact"></p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import { queryTranslationFunc } from '@/api/method'

export default {
  name: 'introduce',
  data () {
    return {
      introduction: {
        title: '关于我',
        content: '还没想好写点啥',
        contact: '<h3>联系方式：</h3><p>CSDN：https://me.csdn.net/zx110503</p><p>GitHub：https://github.com/little3201</p>'
      }
    }
  },
  methods: {
    queryIntroduce () {
      queryTranslationFunc().then(
        response => {
          this.introduction = response.data
        },
        error => {
          alert(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
