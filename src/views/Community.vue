<template>
  <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
      >
        <!-- If using vue-router -->
        <v-row justify="center" class="my-0">
          <v-col cols="12" md="8" lg="8" xl="6">
            <v-card class="pa-7">
              <div class="d-flex">
                <h3>
                  热门话题
                </h3>
                <v-spacer></v-spacer>
                <div>
                  <a>换一换</a><span class="my-10 mx-5">|</span><a>全部话题</a>
                </div>
              </div>
              <v-list dense>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(topic, index) in topics" :key="index">
                    <v-list-item-icon>
                      <v-icon>mdi-flag</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="topic"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-card class="pa-7 mt-6">
              <h3>
                推荐内容
              </h3>
              <v-list three-line>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in recommendatories" :key="i">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      <v-list-item-subtitle >
                        <span class="mr-3">作者：{{ item.author }}</span>
                        <span class="mx-3">评论：{{ item.comment }}</span>
                        <span class="ml-3">阅读：{{ item.scan }}</span>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-img :src="item.avatar" width="208" height="116" style="border-radius: 3px;"></v-img>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3" xl="2" class="hidden-sm-and-down">
            <v-card class="pa-7">
              <div class="d-flex">
                <h3>
                  翻译更新
                </h3>
                <v-spacer></v-spacer>
                <a>
                  查看更多
                </a>
              </div>
              <v-list dense shaped>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(translation, index) in translations" :key="index">
                    <v-list-item-content>
                      <v-list-item-title v-text="translation"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-card class="pa-7 mt-6">
              <div class="d-flex">
                <h3>
                  编辑推荐
                </h3>
                <v-spacer></v-spacer>
                <a>
                  查看更多
                </a>
              </div>
              <v-list dense shaped>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(info, index) in authors" :key="index">
                    <v-list-item-content>
                      <v-list-item-title v-text="info.nickname"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'
import { fetchArticleFunc, fetchTopicFunc, fetchTranslationFunc } from '@/api/method'

export default {
  name: 'community',
  components: {
    Headers
  },
  data: () => ({
    drawer: null,
    activeClass: 'background-color: white',
    recommendatories: [
      {
        title: '如何快速掌握Redis技巧',
        author: '布吉岛',
        subtitle: '缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存缓存',
        avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
        comment: '100',
        scan: '23'
      }
    ],
    topics: [
      '9012年了，工资现在多少啊？'
    ],
    authors: [
      {
        nickname: '布吉岛'
      }
    ],
    translations: [
      'RabbitMQ'
    ],
    items: [
      {
        text: 'COMMUNITY',
        url: '/community'
      },
      {
        text: 'RESOURCE',
        url: '/resource'
      },
      {
        text: 'DOCUMENT',
        url: '/'
      },
      {
        text: 'ABOUT',
        url: '/introduce'
      },
      {
        text: 'SIGN IN',
        url: '/signin'
      },
      {
        text: 'SIGN UP',
        url: '/signup'
      }
    ]
  }),
  created: function () {
    this.fetchrecommendatory()
    this.fetchTopic()
    this.fetchTranslation()
  },
  methods: {
    // 获取推荐内容
    fetchrecommendatory () {
      fetchArticleFunc().then(
        response => {
          // 设置recommendatories
          this.recommendatories = response.data
          this.totalPage = response.pages
          this.totalVisible = Math.ceil(this.totalPage / 2)
        },
        error => {
          // 执行失败的回调函数
          alert(error.message)
        }
      )
    },
    // 获取热门话题
    fetchTopic () {
      fetchTopicFunc().then(
        response => {
          // 设置topics
          this.topics = response.data
        },
        error => {
          // 执行失败的回调函数
          alert(error.message)
        }
      )
    },
    // 获取翻译更新
    fetchTranslation () {
      fetchTranslationFunc().then(
        response => {
          // 设置translations
          this.translations = response.data
        },
        error => {
          // 执行失败的回调函数
          alert(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
