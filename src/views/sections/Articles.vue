<template>
  <v-theme-provider :dark="dark">
    <section id="articles">
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
      <v-row class="ma-0 fill-height">
        <v-list three-line>
          <v-list-item-group color="primary">
            <v-list-item :to="'/detail/' + article.businessId" v-for="(article, i) in articles" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="article.title"></v-list-item-title>
                <v-list-item-subtitle v-text="article.subtitle"></v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span class="mr-3">作者：{{ article.author }}</span>
                  <span class="mx-3">评论：{{ article.comment }}</span>
                  <span class="ml-3">阅读：{{ article.scan }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-img :src="article.imageUrl" width="208" height="116" style="border-radius: 3px;"></v-img>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-row>
      </v-responsive>
    </section>
  </v-theme-provider>
</template>

<script>
import { fetchArticleFunc } from '@/api/method'

export default {
  name: 'SectionArticles',

  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    articles: [{
      businessId: '',
      title: '',
      catalog: '',
      content: '',
      imageUrl: '',
      author: {
        avatar: '',
        nickname: ''
      }
    }],
    items: [
      { text: 'Spring', to: '/' },
      { text: 'Spring Security' }
    ]
  }),
  created () {
    this.fetchArticle()
  },
  methods: {
    fetchArticle () {
      fetchArticleFunc().then(
        response => {
          this.articles = response.data
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
</style>
