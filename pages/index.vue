<template>
  <div id="home">
    <button @click="$fetch">Refresh</button>
    <template v-if="$fetchState.pending">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-blue-400 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-blue-400 rounded"></div>
            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <h3>Posts not found</h3>
    </template>
    <div v-else>
      <Hero :datas="featuredDatas.slice(0, 2)" />
      <Featured :datas="featuredDatas" />
      <Main
        :topDatas="viewedDatas.slice(0, 2)"
        :listDatas="likesDatas"
        :total="total"
      />
      <Recommend :recommendDatas="viewedDatas" />
    </div>
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
    const featuredDatas = ref([]);
    const likesDatas = ref([]);
    const viewedDatas = ref([]);
    const total = ref([]);

    const { $axios } = useContext();

    useFetch(async () => {
      [featuredDatas.value, likesDatas.value, viewedDatas.value, total.value] =
        await Promise.all([
          $axios.$get(SERVER_URL.posts.concat("?page=1&size=4")),
          $axios.$get(SERVER_URL.posts.concat("?page=0&size=10&order=likes")),
          $axios.$get(SERVER_URL.posts.concat("?page=0&size=6&order=viewed")),
          $axios.$get(SERVER_URL.posts.concat("/count")),
        ]);
    });

    useMeta(() => ({
      title: "Posts - Leafage",
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
      featuredDatas,
      likesDatas,
      viewedDatas,
      total,
    };
  },
});
</script>
