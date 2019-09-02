<template>
  <a-row type="flex" justify="space-around">
    <a-col :span="5" class="lefgCol">左侧菜单栏</a-col>
    <a-col :span="13">
      <vue-markdown v-highlight :source="content" />
    </a-col>
    <a-col :span="5" class="rightCol">右侧目录栏</a-col>
  </a-row>
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
          //获取数据
          this.content = response.data.details;
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
