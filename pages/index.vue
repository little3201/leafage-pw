<template>
  <div id="home">
    <Popular />
    <Featured />
    <Content />
    <Recommend />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",

  scrollToTop: true,
  
  head() {
    const title = "Abeille-布吉岛";
    const description =
      "一个开源的、由布吉岛维护的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "abeille, 布吉岛, nuxtjs, vue, typescript, tailwindcss, 博客",
        },
        { hid: "description", name: "description", content: description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        // Twitter Card
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
});
</script>
