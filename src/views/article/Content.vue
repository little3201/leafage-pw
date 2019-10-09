<template>
  <div>
    <vue-markdown :source="content" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/railscasts.css";

const highlightCode = () => {
  //获取所有pre code的元素
  const preEl = document.querySelectorAll("pre code");
  //循环处理pre code的元素的数据
  preEl.forEach(el => {
    hljs.highlightBlock(el);
  });
};

export default {
  components: {
    VueMarkdown // 声明组件
  },
  props: ["content"],
  mounted() {
    highlightCode();
  },
  updated() {
    highlightCode();
  }
};
</script>

<style></style>
