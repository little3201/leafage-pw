<template>
  <div class="share">
    <div class="shareHeader">技术驱动未来</div>
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="16">
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <template slot="actions" v-for="{ type, text } in actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img slot="extra" width="272" :src="item.url" />
            <a-list-item-meta :description="item.description">
              <router-link
                slot="title"
                to="/article"
                :articleId="item.articleId"
              >
                {{ item.title }}
              </router-link>
              <a-avatar
                slot="avatar"
                src="http://img.wxcha.com/file/201810/23/5e623a6c2f.jpeg"
              />
            </a-list-item-meta>
            {{ item.content | ellipsis }}
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { findArticles } from "@/api/request";

export default {
  data() {
    return {
      listData: [],
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
      findArticles(page).then(
        response => {
          this.listData = response.data;
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
      if (value.length > 100) {
        return value.slice(0, 100) + "...";
      }
      return value;
    }
  }
};
</script>

<style scoped>
.share {
  margin: 0 auto;
}
.shareHeader {
  height: 200px;
  font-size: 34px;
  text-align: center;
}
</style>
