<template>
  <div>
    <a-row :gutter="24" type="flex" justify="space-around">
      <a-col :md="24" :lg="4">
        <author class="box-border" />
      </a-col>
      <a-col :md="24" :lg="20" :xs="18">
        <f-content :content="content" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { fetchArticle } from "@/api/request";
import ArticleTitle from "./ArticleTitle.vue";
import Author from "./Author.vue";
import FContent from "./Content.vue";
import Catalog from "./Catalog.vue";

export default {
  components: {
    ArticleTitle,
    Author,
    Catalog,
    FContent
  },
  data() {
    return {
      catalog: "1.1 、分析原理",
      title: "",
      content: ""
    };
  },
  mounted() {
    this.initArticle(this.$route.params.articleId);
  },
  methods: {
    initArticle(articleId) {
      fetchArticle(articleId).then(
        response => {
          //获取数据
          this.content = response.data.content;
          this.title = response.data.title;
        },
        error => {
          // 执行失败的回调函数
          this.$message.error(error.message);
        }
      );
    }
  }
};
</script>
<style scoped>
.box-border {
  border: 1.2px solid #ebedf0;
  padding: 2rem 1.5rem;
}
</style>
