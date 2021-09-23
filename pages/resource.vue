<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
      <figure
        v-for="data in datas"
        :key="data.code"
        class="overflow-hidden border shadow-lg filter grayscale hover:grayscale-0 relative"
      >
        <nuxt-picture :src="data.url[0]" width="474" height="617" />
        <div
          class="hover:bg-black hover:opacity-75 opacity-0 absolute inset-0 transition duration-500 ease-in-out flex items-center justify-center"
        >
          <div class="text-gray-300">
            <p class="p-2 my-4">
              <a href="#" class="hover:underline hover:text-white">在线阅读</a>
            </p>
            <p class="p-2 my-4">
              <a href="#" class="hover:underline hover:text-white">立即下载</a>
            </p>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Resource",
  head: {},

  setup() {
    const datas = ref([]);

    const { $axios } = useContext();

    useFetch(async () => {
      datas.value = await $axios.$get(SERVER_URL.resource, { params: { page: 0, size: 12 }, });
    });

    useMeta(() => ({
      title: "Resource - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage 是一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 生活分享, 资源推荐, 技术总结, 影视浏览, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    }));

    return { datas };
  },
});
</script>