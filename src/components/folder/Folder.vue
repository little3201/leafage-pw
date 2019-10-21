<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="center">
      <a-col :lg="5" :md="0" :xs="0">
        <author />
      </a-col>
      <a-col :lg="14" :md="20" :xs="20">
        <a-list itemLayout="vertical" size="large" :dataSource="listData">
          <a-list-item slot="renderItem" slot-scope="item" key="item.title">
            <img
              class="item-img"
              slot="extra"
              width="180"
              :src="item.imageUrl"
            />
            <template slot="actions" v-for="{ type, text } in actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <a-list-item-meta :description="item.description">
              <router-link slot="title" :to="'/article/' + item.articleId">
                {{ item.title }}
              </router-link>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Author from "@/views/article/Author.vue";
import { fetchArticles } from "@/api/request";

export default {
  components: {
    Author
  },
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
      fetchArticles(page).then(
        response => {
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

<style scoped>
@media screen and (max-width: 720px) {
  .item-img {
    display: none;
  }
}
</style>
