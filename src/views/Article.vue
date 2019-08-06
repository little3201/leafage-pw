<template>
  <div>
    <a-row>
      <a-col :span="6">prometheus-book</a-col>
      <a-col :span="12">
        <vue-markdown :source="content"></vue-markdown>
      </a-col>
      <a-col :span="6">
        <a-anchor>
          <a-anchor-link href="#f" title="Basic demo" />
          <a-anchor-link href="#x" title="Fixed demo" />
          <a-anchor-link href="#API" title="API">
            <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
            <a-anchor-link href="#Link-Props" title="Link Props" />
          </a-anchor-link>
        </a-anchor>
      </a-col>
    </a-row>
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
      content: "neirong"
    };
  }
};
</script>
