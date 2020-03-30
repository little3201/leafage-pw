<template>
 <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
      >
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

            <v-form>
              <v-textarea
                outlined
                name="input-7-4"
                label="留言评论："
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-btn>提交</v-btn>
            </v-form>
          </v-col>

          <v-col cols="12" md="4" lg="2" xl="2" class="hidden-sm-and-down">
            <v-cart outlined class="mb-3 hidden-sm-and-down">
              <v-list-item>
                <v-list-item-avatar></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">Clifford Kelley</v-list-item-title>
                  <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-cart>
              <div class="d-flex">
                <p>
                  RECENT POST
                </p>
              </div>
              <v-list dense shaped>
                <v-list-item-group color="primary">
                  <v-list-item
                    :to="'/information/' + article.businessId"
                    v-for="(article, index) in articles"
                    :key="index"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="article.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row justify="center">
              <v-card
                v-for="(article, index) in articles" :key="index"
                class="ma-3"
                max-width="344"
                hover
                :to="'/information/' + article.businessId"
              >
                <v-img
                  src=""
                  height="194"
                ></v-img>
                <v-card-title>
                  {{ article.title }}
                </v-card-title>
                <v-card-text>
                  {{ article.title }}
                </v-card-text>
              </v-card>
            </v-row>
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
</style>
