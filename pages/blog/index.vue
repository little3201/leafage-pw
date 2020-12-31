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
    <Common />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Blog",

  head() {
    const title = "Blog - Abeille | 布吉岛";
    const description = "Blog of Abeille";
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

  // async asyncData({ app: { $axios } }) {
  //   const datas = await $axios.$get(SERVER_URL.posts);
  //   return { datas };
  // },
});
</script>