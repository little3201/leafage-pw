<template>
  <v-app>
    <Headers />
    <v-content>
      <v-container
        fluid
        class="full-height"
      >
        <v-row justify="center" class="my-0">
          <v-col cols="12" md="10" lg="10" xl="8">
            <h2>{{ introduction.title }}</h2>
            <p v-html="introduction.content"></p>
            <p v-html="introduction.contact"></p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footers />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import { queryTranslationFunc } from '@/api/method'

export default {
  name: 'document',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      drawer: null,
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
          alert(error.statusText)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
