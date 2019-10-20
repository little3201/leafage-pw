<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="center">
      <a-col :lg="18" :md="20" :xs="20">
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <template slot="actions" v-for="{ type, text } in actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img slot="extra" width="272" :src="item.imageUrl" />
            <a-list-item-meta :description="item.description">
              <router-link slot="title" :to="'/article/' + item.articleId">
                {{ item.title }}
              </router-link>
              <a-avatar slot="avatar" :src="avatar" />
            </a-list-item-meta>
            <f-content :content="item.summary | ellipsis" />
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import FContent from "./article/Content.vue";
import { fetchArticles } from "@/api/request";

export default {
  components: {
    FContent
  },
  data() {
    return {
      listData: [],
      avatar: "",
      actions: [
        { type: "star", text: "156" },
        { type: "like", text: "156" },
        { type: "message", text: "2" }
      ]
    };
  },
  mounted() {
    this.initArticleList();
  },
  methods: {
    initArticleList() {
      const page = {
        pageNum: 0,
        pageSize: 10
      };
      fetchArticles(page).then(
        response => {
          this.avatar = "http://img.wxcha.com/file/201810/23/5e623a6c2f.jpeg";
          this.listData = response.data.content;
        },
        error => {
          // 执行失败的回调函数
          this.$message.error(error.message);
        }
      );
    }
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 160) {
        return value.slice(0, 160) + "...";
      }
      return value;
    }
  }
};
</script>

<style scoped></style>
