<template>
  <div id="home">
    <Hero :datas="recentDatas" />
    <Featured :datas="recentDatas" />
    <Main :topDatas="viewedDatas" :listDatas="likesDatas" :total="total" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Home",

  head: {},
  scrollToTop: true,

  setup() {
    const recentDatas = ref([]);
    const likesDatas = ref([]);
    const viewedDatas = ref([]);
    const total = ref(0);

    const { $axios } = useContext();

    useFetch(async () => {
      [recentDatas.value, likesDatas.value, viewedDatas.value, total.value] =
        await Promise.all([
          $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 7 } }),
          $axios.$get(SERVER_URL.posts, {
            params: { page: 0, size: 10, order: "likes" },
          }),
          $axios.$get(SERVER_URL.posts, {
            params: { page: 0, size: 10, order: "viewed" },
          }),
          $axios.$get(SERVER_URL.posts.concat("/count")),
        ]);
    });

    useMeta(() => ({
      title: "Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    }));

    return {
      recentDatas,
      likesDatas,
      viewedDatas,
      total,
    };
  },
});
</script>
