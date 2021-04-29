<template>
  <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <section>
      <ul class="flex text-xs border border-black">
        <li
          class="w-32 hover:bg-black hover:text-white"
          :class="{ 'bg-black text-white': category == '' }"
        >
          <button
            @click="(category = ''), $fetch()"
            type="button"
            aria-label="portfolio_all"
            class="w-full h-10 font-bold uppercase focus:outline-none"
          >
            All
          </button>
        </li>
        <li
          v-for="(cg, index) in categories"
          :key="index"
          class="w-32 hover:bg-black hover:text-white"
          :class="{ 'bg-black text-white': category == cg.alias }"
        >
          <button
            type="button"
            :aria-label="'portfolio_' + cg.alias"
            @click="(category = cg.code), $fetch()"
            class="w-full h-10 font-bold uppercase focus:outline-none"
            v-text="cg.alias"
          ></button>
        </li>
      </ul>
    </section>
    <section class="my-8">
      <div
        class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div v-for="(data, index) in datas" :key="index">
          <img
            v-if="
              data.type == 'jpg' || data.type == 'jpeg' || data.type == 'png'
            "
            class="w-full h-auto"
            :src="data.url[0]"
            :alt="data.title"
          />
          <video
            id="video"
            controls
            preload="metadata"
            class="w-full h-auto outline-none"
            v-else-if="data.type == 'mp4' || data.type == 'flv'"
          >
            <source :src="data.url[0]" :type="'video/' + data.type" />
          </video>
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
    let [datas, categories] = await Promise.all([
      await $axios.$get(SERVER_URL.portfolio.concat("?page=0&size=12")),
      await $axios.$get(SERVER_URL.category.concat("?page=0&size=5")),
    ]);
    return { datas, categories };
  },

  data() {
    return {
      category: "",
      datas: [],
      page: 0,
    };
  },

  async fetch() {
    let dataList = await this.$axios.$get(
      SERVER_URL.portfolio.concat(
        "?page=" + this.page,
        "&size=12&category=",
        this.category
      )
    );
    this.datas = dataList;
  },

  head() {
    const title = "Portfolio - Leafage";
    const description =
      "Leafage的作品集，包含旅行记录、生活分享等资源信息，提供原创、优质、完整内容";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    };
  },
});
</script>