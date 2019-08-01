<template>
  <vue-markdown :source="content"></vue-markdown>
</template>
<script>
import VueMarkdown from "vue-markdown";  //直接作为一个组件引入

export default {
  components: {
    VueMarkdown  // 声明组件
  },
  data() {
    return {
      content: ""
    }
  }
}
</script>