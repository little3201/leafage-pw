<template>
  <v-row justify="center" class="my-0">
    <v-col cols="12" md="8" lg="8" xl="6">
      <v-card class="pa-7">
        <div class="d-flex">
          <h3>
            <i class="el-icon-chat-line-square"></i>话题
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
                <v-list-item-title v-html="topic"></v-list-item-title>
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
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-pagination
          v-model="currentPage"
          :length="totalPage"
          :total-visible="totalVisible"
          circle
        >
        </v-pagination>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" lg="3" xl="2" class="hidden-sm-and-down">
      <v-card class="pa-7">
        <div class="d-flex">
          <h3>
            最新编辑
          </h3>
          <v-spacer></v-spacer>
          <a>
            查看更多
          </a>
        </div>
        <v-list dense shaped>
          <v-list-item-group color="primary">
            <v-list-item v-for="(info, index) in latest" :key="index">
              <v-list-item-content>
                <v-list-item-title v-html="info"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card class="pa-7 mt-6">
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
                <v-list-item-title v-html="translation"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import { fetchArticleFunc, fetchTopicFunc, fetchTranslationFunc } from '@/api/method'

export default {
  name: 'technology',
  components: {
  },
  data () {
    return {
      currentPage: 1,
      totalPage: 15,
      totalVisible: 7,
      recommendatories: [
        {
          title: '如何快速掌握Redis技巧',
          author: '布吉岛',
          subtitle: '缓存',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握RocketMQ技巧',
          author: '布吉岛',
          subtitle: '一个消息',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        },
        {
          title: '如何快速掌握Elasticsearch技巧',
          author: '布吉岛',
          subtitle: 'Elasticsearch',
          avatar: 'https://cdn.pixabay.com/photo/2019/11/23/07/24/christmas-4646421_1280.jpg',
          comment: '100',
          scan: '23'
        }
      ],
      topics: [
        '9012年了，买房买车了没有啊？',
        '9012年了，对象谈了没有啊？',
        '9012年了，工资现在多少啊？'
      ],
      latest: [
        '七天快速入门Go语言',
        '七天快速入门C++语言',
        '七天快速入门C#语言',
        '七天快速入门C语言',
        '七天快速入门Ruby语言',
        '七天快速入门.net语言',
        '七天快速入门Docker',
        '七天快速入门R语言',
        '七天快速入门VB语言',
        '七天快速入门Python语言'
      ],
      translations: [
        'Docker',
        'Prometheus',
        'Kubernetes',
        'RabbitMQ'
      ]
    }
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
