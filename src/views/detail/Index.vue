<template>
  <v-theme-provider :dark="dark">
    <v-responsive class="mx-auto">
      <v-row justify="center" align="start" class="ma-0">
        <base-img
          :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
          :gradient="gradient"
          :src="detail.imageUrl"
          color="#45516b"
          flat
          max-width="100%"
          tile
          class="text-center white--text align-center"
        >
          <h1>{{ detail.title }}</h1>
          <p class="mt-3"><strong v-if="detail.author != null">作者：</strong> {{ detail.author == null ?  '' : detail.author.nickname}}</p>
        </base-img>
      </v-row>
      <v-row justify="center" align="start" class="my-0 mx-auto">
        <v-col cols="12">
          <p v-html="detail.content"></p>
          <!-- 上一篇：{{ detail.previous.title }} -->
          <v-divider></v-divider>
          <!-- 下一篇：{{ detail.next.title }} -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-theme-provider>
</template>

<script>
import { fetchArticleFunc } from '@/api/method'
import {
  HexToRGBA,
  RGBAtoCSS
} from 'vuetify/lib/util/colorUtils'

export default {
  name: 'Detail',

  props: {
    title: String,
    dark: Boolean,
    businessId: String
  },

  data: () => ({
    preview: 'preview',
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
    if (this.businessId) {
      this.fetchArticle(this.businessId)
    }
  },
  computed: {
    gradient () {
      const color = `${this.$vuetify.theme.themes.light.secondary}CC`
      const overlay = RGBAtoCSS(HexToRGBA(color))
      return `to top, ${overlay}, ${overlay}`
    }
  },
  methods: {
    fetchArticle (businessId) {
      fetchArticleFunc(businessId).then(
        response => {
          this.detail = response.data
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
  overflow: auto;
  color: #525252;
  padding: 10px;
  box-shadow: inherit;
}
</style>
