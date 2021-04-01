<template>
  <section class="container mx-auto md:px-12 lg:px-16 xl:px-20">
    <ul class="flex text-xs border border-black">
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': category == '' }"
      >
        <button
          type="button"
          class="w-full h-10 font-bold uppercase focus:outline-none"
        >
          All
        </button>
      </li>
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': category == cg.code }"
        v-for="(cg, index) in categories"
        :key="index"
      >
        <button
          type="button"
          @click="retrieve(0, cg.code)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
          v-text="cg.alias"
        ></button>
      </li>
    </ul>
    <PostsList :datas="datas" />
    <Pagation @retrieve="retrieve" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Posts",

  async asyncData({ app: { $axios }, params }) {
    let [datas, categories] = await Promise.all([
      await $axios.$get(
        SERVER_URL.posts.concat("?page=0&size=12&category=", params.code)
      ),
      await $axios.$get(SERVER_URL.category),
    ]);

    return { datas, categories };
  },

  props: {
    code: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      category: this.code,
      page: 0,
      datas: [],
    };
  },

  methods: {
    retrieve(page: number, category: string) {
      this.page = page ? page : 0;
      this.category = category ? category : "";
      this.$axios
        .get(
          SERVER_URL.posts.concat(
            "?page=" + this.page,
            "&size=12&category=",
            category
          )
        )
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