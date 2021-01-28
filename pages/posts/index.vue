<template>
  <section class="container mx-auto">
    <ul class="flex justify-between text-xs border border-black">
      <li class="bg-black text-white w-1/6">
        <button class="w-full h-10 font-bold uppercase">All</button>
      </li>
      <li class="w-1/6 hover:bg-black hover:text-white">
        <button class="w-full h-10 font-bold uppercase">Food</button>
      </li>
      <li class="w-1/6 hover:bg-black hover:text-white">
        <button class="w-full h-10 font-bold uppercase">Lifestyle</button>
      </li>
      <li class="w-1/6 hover:bg-black hover:text-white">
        <button class="w-full h-10 font-bold uppercase">Book</button>
      </li>
      <li class="w-1/6 hover:bg-black hover:text-white">
        <button class="w-full h-10 font-bold uppercase">Travel</button>
      </li>
      <li class="w-1/6 hover:bg-black hover:text-white">
        <button class="w-full h-10 font-bold uppercase">Technology</button>
      </li>
    </ul>
    <ListItem />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Posts",

  head() {
    const title = "Posts - Leafage | 布吉岛";
    const description = "一个开源的、由布吉岛维护的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title: "Posts - Leafage | 布吉岛",
      meta: [
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