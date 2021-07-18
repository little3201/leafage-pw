<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid grid-cols-4 gap-4 divide-x divide-gray-300 my-8">
      <div class="">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Resource",
  head: {},

  setup() {
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
  },
});
</script>