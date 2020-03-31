<template>
 <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
      >
        <v-row justify="center" align="start" class="my-0">
          <v-img max-height="280" :src="information.imageUrl" class="text-center white--text align-center">
            <h1>{{ information.title }}</h1>
            <p class="mt-3">作者：{{ information.author }}</p>
          </v-img>
        </v-row>
        <v-row justify="center" align="start" class="my-0">
          <v-col cols="12" md="8" lg="8" xl="6">
            <h1>{{ information.title }}</h1>
            <p class="mt-3">
              <v-avatar src="https://cdn.vuetifyjs.com/images/john.jpg">
              </v-avatar>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              布吉岛
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-icon>mdi-local-offer</v-icon>
            </p>
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
   <Footers />
  </v-app>
</template>

<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import { queryArticleFunc } from '@/api/method'

export default {
  name: 'information',
  components: {
    Headers,
    Footers
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
    },
    articles: [
      {
        businessId: '1',
        title: 'haiyoushui'
      }
    ]
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
.v-application code {
  display: block;
  color: darkkhaki;
}
#app {
  line-height: 1.5;
}
</style>
