<template>
  <v-row justify="center">
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="6">
      <v-card>
        <div style="display: flex;">
          <h3>
            <i class="el-icon-chat-line-square"></i>话题
          </h3>
          <v-spacer></v-spacer>
          <div>
            <a>换一换</a><span style="margin:0 10px;">|</span><a>全部话题</a>
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
      <v-card>
        <h3>
          <v-icon>mdi-file-document-box-multiple-outline</v-icon>推荐内容
        </h3>
        <v-list three-line>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in datas" :key="i">
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
          v-model="page"
          :total="50">
        </v-pagination>
      </v-card>
    </v-col>
    <v-col cols="12" xs="0" sm="12" md="4" lg="3" xl="2">
      <v-card>
        <div style="display: flex;">
          <h3>
            <v-icon>mdi-official</v-icon>官方编辑
          </h3>
          <v-spacer></v-spacer>
          <a>
            查看更多
          </a>
        </div>
        <v-list dense shaped>
          <v-list-item-group color="primary">
            <v-list-item v-for="(hot, index) in hots" :key="index">
              <v-list-item-content>
                <v-list-item-title v-html="hot"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-card>
        <div style="display: flex;">
          <h3>
            <v-icon>mdi-newspaper</v-icon>新闻资讯
          </h3>
          <v-spacer></v-spacer>
          <a>
            查看更多
          </a>
        </div>
        <v-list dense shaped>
          <v-list-item-group color="primary">
            <v-list-item v-for="(info, index) in news" :key="index">
              <v-list-item-content>
                <v-list-item-title v-html="info"></v-list-item-title>
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

export default {
  name: 'technology',
  components: {
  },
  data () {
    return {
      page: 1,
      datas: [
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
      hots: [
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
      news: [
        '马云套现40亿',
        '刘强东套现40亿',
        '李彦宏套现40亿',
        '俞敏洪现40亿',
        '马化腾套现40亿',
        '王健林套现40亿',
        '王思聪套现40亿',
        '贾跃亭套现40亿',
        '王石套现40亿',
        '孙斌套现40亿'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  padding: 30px;
  margin-bottom: 25px;
}
.v-list-item__icon:first-child {
  margin-right: 10px;
}
</style>
