<template>
  <div class="container mx-auto">
    <section>
      <ul class="flex justify-between text-xs border border-black">
        <li
          class="w-24 hover:bg-black hover:text-white"
          :class="{ 'bg-black text-white': category == '' }"
        >
          <button class="w-full h-10 font-bold uppercase">All</button>
        </li>
        <li
          v-for="(data, index) in categories"
          :key="index"
          class="w-24 hover:bg-black hover:text-white"
          :class="{ 'bg-black text-white': category == data.code }"
        >
          <button
            class="w-full h-10 font-bold uppercase"
            v-text="data.alias"
          ></button>
        </li>
      </ul>
    </section>
    <section class="my-12">
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(data, index) in datas" :key="index">
          <img class="w-full h-auto" :src="data.url" :alt="data.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Portfolio",

  scrollToTop: true,

  async asyncData({ app: { $axios } }) {
    let params = "?page=0&size=10";
    if (this.category && this.category.trim.length > 0) {
      params.concat("&category=", this.category);
    }
    let [datas, categories] = await Promise.all([
      await $axios.$get(SERVER_URL.portfolio.concat(params)),
      await $axios.$get(SERVER_URL.category.concat("?page=0&size=5")),
    ]);
    return { datas, categories };
  },

  data() {
    return {
      category: "",
    };
  },

  head() {
    const title = "Portfolio - Leafage";
    const description =
      "Leafage的作品集，包含旅行记录、生活分享等资源信息，提供原创、优质、完整内容";
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
});
</script>