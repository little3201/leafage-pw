<template>
  <div>
    <article-title style="text-align: center" :title="title" />
    <a-row type="flex" justify="space-around">
      <a-col :span="5" class="lefgCol">{{ title }}</a-col>
      <a-col :span="13">
        <f-content :content="content" />
      </a-col>
      <a-col :span="5" class="rightCol">
        <anchor />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getArticle } from "@/api/request";
import ArticleTitle from "./ArticleTitle.vue";
import FContent from "./Content.vue";
import Anchor from "./Anchor.vue";

export default {
  components: {
    ArticleTitle,
    Anchor,
    FContent
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  mounted() {
    this.initArticle(this.$route.params.articleId);
  },
  methods: {
    initArticle(articleId) {
      getArticle(articleId).then(
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
  text-align: right;
  padding: 20px 30px;
}
.rightCol {
  padding: 20px 30px;
}
</style>
