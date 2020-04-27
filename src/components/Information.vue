<template>
 <v-app app>
    <v-content>
      <v-container
        fluid
      >
        <v-row justify="center" align="start" class="mt-n3">
          <v-img max-height="320" :src="information.imageUrl" class="text-center white--text align-center">
            <h1 class="text_shadow">{{ information.title }}</h1>
            <p class="mt-3 text_shadow"><strong>作者：</strong> {{ information.author == null ?  '' : information.author.nickname}}</p>
          </v-img>
        </v-row>
        <v-row justify="center" align="start" class="my-0">
          <v-col cols="12" md="8" lg="8" xl="6">
            <p class="my-3" v-html="information.content"></p>
            上一篇：spring security 5.x使用及分析（二：自定义配置—oauth2原理解析）
            <v-divider></v-divider>
            下一篇：spring security 5.x使用及分析（四：自定义配置—oauth2原理解析）
          </v-col>
          <v-col cols="12" md="4" lg="2" xl="2" class="hidden-sm-and-down">
            <p v-html="information.catalog"></p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { queryArticleFunc } from '@/api/method'

export default {
  name: 'information',
  components: {
  },
  data: () => ({
    information: {
      businessId: '',
      title: '',
      catalog: '',
      content: '',
      imageUrl: '',
      author: {
        avatar: '',
        nickname: ''
      }
    }
  }),
  created: function () {
    if (this.$route.params.businessId) {
      this.queryArticle(this.$route.params.businessId)
    }
  },
  methods: {
    queryArticle (businessId) {
      queryArticleFunc(businessId).then(
        response => {
          this.information = response.data
        },
        error => {
          alert(error.statusText)
        }
      )
    }
  }
}
</script>

<style lang="scss">
.text_shadow {
  text-shadow:2px 2px 8px #000000;
}
.v-application code {
  display: block;
  color: antiquewhite;
}
</style>
