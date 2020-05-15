<template>
  <v-theme-provider :dark="dark">
    <section id="detail">
      <v-row justify="center" align="start" class="mt-n3">
        <v-img max-height="320" :src="detail.imageUrl" class="text-center white--text align-center">
          <h1 class="text_shadow">{{ detail.title }}</h1>
          <p class="mt-3 text_shadow"><strong>作者：</strong> {{ detail.author == null ?  '' : detail.author.nickname}}</p>
        </v-img>
      </v-row>
      <v-row justify="center" align="start" class="my-0">
        <v-col cols="12" md="8" lg="8" xl="6">
          <p class="my-3" v-html="detail.content"></p>
          上一篇：{{ detail.previous.title }}
          <v-divider></v-divider>
          下一篇：{{ detail.next.title }}
        </v-col>
        <v-col cols="12" md="4" lg="2" xl="2" class="hidden-sm-and-down">
          <p v-html="detail.catalog"></p>
        </v-col>
      </v-row>
    </section>
  </v-theme-provider>
</template>

<script>
import { queryArticleFunc } from '@/api/method'

export default {
  name: 'SectionDetail',

  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    detail: {
      businessId: '',
      title: '',
      catalog: '',
      content: '',
      imageUrl: '',
      author: {
        avatar: '',
        nickname: ''
      },
      next: {
        businessId: '',
        title: 'spring security 5.x使用及分析（二：自定义配置—oauth2原理解析）'
      },
      previous: {
        businessId: '',
        title: 'spring security 5.x使用及分析（四：自定义配置—oauth2原理解析）'
      }
    },
    items: [
      { text: 'Spring', to: '/' },
      { text: 'Spring Security' }
    ]
  }),
  created () {
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
