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
  const preEl = document.querySelectorAll("pre code");

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
