<template>
  <v-theme-provider :dark="dark">
    <section id="articles">
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container>
          <v-row>
            <v-col
              v-for="(article, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="article.imageUrl"
                height="245"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black text-truncate"
                v-text="article.title"
              ></h3>

              <div
                class="title font-weight-light text-truncate"
                v-text="article.subtitle"
              ></div>

              <v-btn
                class="ml-n4 font-weight-black"
                text
                :to="'detail/' + article.businessId"
              >
                点击阅读
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </section>
  </v-theme-provider>
</template>

<script>
import { retrieveArticleFunc } from '@/api/method'

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
      subtitle: '',
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
    this.retrieveArticle()
  },
  methods: {
    retrieveArticle () {
      retrieveArticleFunc().then(
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
