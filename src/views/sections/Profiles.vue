<template>
  <v-theme-provider :dark="dark">
    <section id="profiles">
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
              <v-hover v-slot:default="{ hover }">
                <v-img
                  :src="`${article.imageUrl}?imageMogr2/thumbnail/640x640/interlace/1/blur/1x0/quality/100.jpg`"
                  height="245"
                  max-width="100%"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out reveal grey darken-3 white--text pa-3"
                      style="height: 100%;"
                    >
                      {{ article.subtitle }}
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
              <h3
                class="font-weight-black text-truncate"
                v-text="article.title"
              ></h3>

              <v-btn
                class="ml-n4 font-weight-black"
                text
                :to="'/blog/detail/' + article.businessId"
                v-if="article"
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
  name: 'SectionProfiles',

  props: {
    title: String,
    dark: Boolean
  },

  data: () => ({
    articles: []
  }),

  created () {
    this.retrieveArticle()
  },

  methods: {
    retrieveArticle () {
      retrieveArticleFunc().then(
        response => {
          // imageUrl处理imageMogr2/thumbnail/640x640/interlace/1/blur/1x0/quality/100
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
.reveal {
  align-items: center;
  bottom: 0;
  opacity: .8;
  position: absolute;
}
</style>
