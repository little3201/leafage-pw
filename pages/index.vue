<template>
  <div id="home">
    <Hero :datas="heroDatas" />
    <Featured :datas="featuredDatas" />
    <Main :topDatas="topDatas" :listDatas="listDatas" />
    <Recommend :recommendDatas="recommendDatas" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Home",

  scrollToTop: true,

  async asyncData({ app: { $axios } }) {
    const [
      heroDatas,
      featuredDatas,
      topDatas,
      listDatas,
      recommendDatas,
    ] = await Promise.all([
      await $axios.$get(SERVER_URL.posts.concat("?page=0&size=3")),
      await $axios.$get(SERVER_URL.posts.concat("?page=1&size=4")),
      await $axios.$get(SERVER_URL.posts.concat("?page=0&size=3&order=viewed")),
      await $axios.$get(SERVER_URL.posts.concat("?page=0&size=10&order=likes")),
      await $axios.$get(SERVER_URL.posts.concat("?page=0&size=6&order=viewed")),
      await $axios.$get("/check"),
    ]);
    return { heroDatas, featuredDatas, topDatas, listDatas, recommendDatas };
  },

  head() {
    const title = "Leafage";
    const description =
      "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 布吉岛, nuxtjs, vue, typescript, tailwindcss, 博客",
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
