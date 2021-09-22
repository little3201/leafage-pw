<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div
      class="grid grid-cols-1 md:grid-cols-4 md:gap-4 md:divide-x md:divide-gray-300 my-4 md:my-8"
    >
      <div
        class="flex justify-around md:block md:col-span-1 md:divide-y md:divide-gray-300 text-center my-4 md:py-8 border border-black md:border-none"
      >
        <nuxt-link class="w-full block p-3 hover:bg-black hover:text-white" to="/about">关于本站</nuxt-link>
        <nuxt-link class="w-full block p-3 hover:bg-black hover:text-white" to="/about/profile">关于本人</nuxt-link>
        <nuxt-link class="w-full block p-3 hover:bg-black hover:text-white" to="/about/record">更新日志</nuxt-link>
      </div>
      <div class="col-span-3">
        <article class="prose-sm sm:prose lg:prose-lg mx-auto">
          <nuxt-child />
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "About",
  head: {},

  setup() {
    useMeta(() => ({
      title: "About - Leafage",
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

<style scoped>
.nuxt-link-exact-active {
  @apply text-white bg-black;
}
</style>