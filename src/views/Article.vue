<template>
  <a-roe>
    <a-col :span="6" class="lefgCol">{{ title }}</a-col>
    <a-col :span="12">
      <vue-markdown :source="content" />
    </a-col>
    <a-col :span="6" class="rightCol">www</a-col>
  </a-roe>
</template>

<script>
import VueMarkdown from "vue-markdown"; //直接作为一个组件引入
import { getArticle } from "@/api/request";

export default {
  components: {
    VueMarkdown // 声明组件
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  mounted() {
    this.initArticle("002");
  },
  methods: {
    initArticle(articleId) {
      getArticle(articleId).then(
        response => {
          //设置token
          this.$message.success("获取数据成功");
          this.content = response.data.articleContent;
          this.title = response.data.articleTitle;
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
