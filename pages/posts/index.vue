<template>
  <section class="container mx-auto">
    <ul class="flex text-xs border border-black">
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': code == '' }"
      >
        <button class="w-full h-10 font-bold uppercase">All</button>
      </li>
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': code == category.code }"
        v-for="(category, index) in categories"
        :key="index"
      >
        <button
          @click="retrieve(category.code)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
          v-text="category.alias"
        ></button>
      </li>
    </ul>
    <PostsList :datas="datas" />
    <Pagation />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Posts",

  async asyncData({ app: { $axios }, params }) {
    let [datas, categories] = await Promise.all([
      await $axios
        .get(SERVER_URL.posts.concat("?page=0&size=12&category=", params.code))
        .then((res) => res.data),

      await $axios
        .get(SERVER_URL.category.concat("?page=0&size=5"))
        .then((res) => res.data),
    ]);

    return { datas, categories };
  },

  data() {
    return {
      code: "",
      datas: [],
    };
  },

  methods: {
    retrieve(code: string) {
      this.code = code
      this.$axios
        .get(SERVER_URL.posts.concat("?page=0&size=12&category=", code))
        .then((res) => (this.datas = res.data));
    },
  },

  head() {
    const title = "Posts - Leafage";
    const description =
      "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title: "Posts - Leafage",
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