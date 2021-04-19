<template>
  <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 mt-12">
      <div class="lg:col-span-2">
        <article>
          <ul
            class="flex text-sm font-bold space-x-6 text-gray-600 uppercase mb-4 -mt-3"
          >
            <li>
              <nuxt-link
                :title="data.category"
                to="/posts"
                v-text="data.category"
              ></nuxt-link>
            </li>
            <li
              class="tracking-wider"
              v-text="new Date(data.modifyTime).toLocaleDateString()"
            ></li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye mr-1"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle></svg
              >{{ data.viewed }}
            </li>
            <li class="flex items-center" @click="like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart mr-1 transform hover:scale-150 hover:fill-current transition duration-500"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path></svg
              >{{ data.likes }}
            </li>
          </ul>
          <h2 class="my-3 md:text-3xl font-extrabold" v-text="data.title"></h2>
          <figure v-show="data.cover" class="w-full h-full my-8">
            <img :src="data.cover" :alt="data.title" class="w-full" />
          </figure>
          <div class="prose min-w-full" v-html="rendered"></div>
          <div class="bg-gray-200 my-8 p-8">
            <ul
              class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-xs font-bold"
            >
              <li>
                <nuxt-link
                  :title="previous.code"
                  :to="'/posts/detail/' + previous.code"
                  class="flex items-center transform hover:-translate-x-2 transition duration-500"
                >
                  <svg
                    v-show="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-left"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline></svg
                  >{{ previous.title }}</nuxt-link
                >
              </li>
              <li class="flex items-center justify-end">
                <nuxt-link
                  :title="next.code"
                  :to="'/posts/detail/' + next.code"
                  class="flex items-center transform hover:translate-x-2 transition duration-500"
                  >{{ next.title }}
                  <svg
                    v-show="next"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline></svg
                ></nuxt-link>
              </li>
            </ul>
          </div>
        </article>
        <div class="my-12">
          <div class="flex divide-y-2 divide-gray-400 divide-dotted">
            <h3 class="uppercase font-extrabold">Top Posts</h3>
            <span class="flex-1 w-full ml-4 mt-3"></span>
          </div>
          <div class="my-6">
            <div
              class="grid grid-flow-row grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-4 md:gap-8"
            >
              <div v-for="(topData, index) in topDatas" :key="index">
                <div class="overflow-hidden">
                  <div
                    class="transform hover:scale-110 transition duration-500"
                  >
                    <img
                      :src="
                        topData.cover +
                        '?imageMogr2/thumbnail/640x192/format/webp/blur/1x0/quality/75'
                      "
                      :alt="topData.title"
                      class="w-full h-44"
                    />
                  </div>
                </div>
                <div class="">
                  <h3
                    class="font-extrabold my-4 transform hover:translate-x-2 transition duration-500"
                  >
                    <nuxt-link
                      :title="topData.code"
                      :to="'/posts/detail/' + topData.code"
                      v-text="topData.title"
                    ></nuxt-link>
                  </h3>
                  <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                    <li
                      v-text="new Date(topData.modifyTime).toLocaleDateString()"
                    ></li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye mr-1"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >{{ topData.viewed }}
                    </li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-heart mr-1"
                      >
                        <path
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        ></path></svg
                      >{{ topData.likes }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { SERVER_URL } from "~/assets/request";
import markdown from "~/plugins/markdown";

export default defineComponent({
  name: "Slug",

  scrollToTop: true,

  async asyncData({ app: { $axios, store }, params }) {
    let [data, previous, next, topDatas] = await Promise.all([
      // detail
      await $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/details")),
      // previous
      await $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/previous")),
      // next
      await $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/next")),
      // topThree
      await $axios.$get(SERVER_URL.posts.concat("?page=0&size=3&order=viewed")),
    ]);

    store?.commit("CHANGE_CODE", data.code);
    store?.commit("CHANGE_TITLE", data.title);
    store?.commit("CHANGE_DESCTIPTION", data.subtitle);

    let rendered = markdown.render(data.content);

    return { data, previous, next, topDatas, rendered };
  },

  data() {
    return {
      data: this.$data,
    };
  },

  methods: {
    async like() {
      this.$axios
        .$patch(SERVER_URL.posts.concat("/", this.data.code, "/like"))
        .then((res) => {
          this.data.likes = res.data.likes;
        });
    },
  },

  head() {
    return {
      title: this.$store.getters["title"],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$store.getters["description"],
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://www.leafage.top/posts/detail/" +
            this.$store.getters["code"],
        },
      ],
    };
  },
});
</script>
