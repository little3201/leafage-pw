<template>
  <div class="container mx-auto">
    <section>
      <ul class="flex justify-between text-xs border border-black">
        <li class="bg-black text-white w-1/6">
          <button class="w-full h-10 font-bold uppercase">All</button>
        </li>
        <li class="w-1/6 hover:bg-black hover:text-white">
          <button class="w-full h-10 font-bold uppercase">Fashion</button>
        </li>
        <li class="w-1/6 hover:bg-black hover:text-white">
          <button class="w-full h-10 font-bold uppercase">Lifestyle</button>
        </li>
        <li class="w-1/6 hover:bg-black hover:text-white">
          <button class="w-full h-10 font-bold uppercase">Beauty</button>
        </li>
        <li class="w-1/6 hover:bg-black hover:text-white">
          <button class="w-full h-10 font-bold uppercase">Travel</button>
        </li>
        <li class="w-1/6 hover:bg-black hover:text-white">
          <button class="w-full h-10 font-bold uppercase">Photograph</button>
        </li>
      </ul>
    </section>
    <section class="my-12">
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(data, index) in datas" :key="index">
          <img class="w-full" :src="data.url" :alt="data.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Portfolio",

  scrollToTop: true,
  
  head() {
    const title = "Portfolio - Abeille | 布吉岛";
    const description = "作品集分享";
    return {
      title,
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

  async asyncData({ app: { $axios } }) {
    const datas = await $axios.$get(
      SERVER_URL.portfolio.concat("?page=0&size=10")
    );
    return { datas };
  },
});
</script>