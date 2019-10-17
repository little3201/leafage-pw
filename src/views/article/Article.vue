<template>
  <div>
    <article-title style="text-align: center" :title="title" />
    <a-row type="flex" justify="space-around">
      <a-col :span="1" />
      <a-col :span="4" class="lefgCol">
        <author />
      </a-col>
      <a-col :span="13">
        <f-content :content="content" />
      </a-col>
      <a-col :span="4" class="rightCol">
        <catalog :catalog="catalog" />
      </a-col>
      <a-col :span="1" />
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
.lefgCol {
  padding: 30px 20px;
}
.rightCol {
  padding: 30px 20px;
}
</style>
