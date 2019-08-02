<template>
  <div>
    <vue-markdown :source="content"></vue-markdown>
    <a-anchor>
      <a-anchor-link href="#f" title="Basic demo" />
      <a-anchor-link href="#x" title="Fixed demo" />
      <a-anchor-link href="#API" title="API">
        <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
        <a-anchor-link href="#Link-Props" title="Link Props" />
      </a-anchor-link>
    </a-anchor>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown"; //直接作为一个组件引入

export default {
  components: {
    VueMarkdown // 声明组件
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>
