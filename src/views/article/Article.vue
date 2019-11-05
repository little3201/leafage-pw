<template>
  <div :style="{ margin: '3rem auto' }">
    <a-row :gutter="24" type="flex" justify="center">
      <a-col :xl="4" :lg="5" :md="0" :xs="0">
        <author />
      </a-col>
      <a-col :xl="14" :lg="16" :md="22" :xs="21">
        <f-content :content="content" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { queryArticle } from "@/api/request";
import Author from "./Author.vue";
import FContent from "./Content.vue";

export default {
  components: {
    Author,
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
      queryArticle(articleId).then(
        response => {
          //获取数据
          if (response.data.content) {
            this.content = response.data.content;
          }
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
<style scoped></style>
