<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <ul class="flex text-xs border border-black">
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': alias == '' }"
      >
        <button
          aria-label="posts_all"
          type="button"
          @click="(category = ''), $fetch(), (page = 0)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
        >
          All
        </button>
      </li>
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': alias == cg.alias }"
        v-for="(cg, index) in categories"
        :key="index"
      >
        <button
          :aria-label="'posts_' + cg.alias"
          type="button"
          @click="(category = cg.code), $fetch(), (page = 0)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
          v-text="cg.alias"
        ></button>
      </li>
    </ul>
    <PostsList :datas="datas" />
    <Pagation :total="total" @retrieve="retrieve" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Posts",

  async asyncData({ app: { $axios } }) {
    const categories = await $axios.$get(SERVER_URL.category);
    return { categories };
  },

  data() {
    return {
      category: "",
      page: 0,
      total: 0,
      datas: [],
      categories: [],
    };
  },

  async fetch() {
    if (this.alias != "" && this.category == "" && this.categories.length > 0) {
      this.categories.forEach((item: any) => {
        if (this.alias == item.alias) {
          this.category = item.code;
          return;
        }
      });
    }
    const [dataList, rows] = await Promise.all([
      this.$axios.$get(
        SERVER_URL.posts.concat(
          "?page=" + this.page,
          "&size=12&category=",
          this.category ? this.category : ""
        )
      ),
      this.$axios.$get(SERVER_URL.posts.concat("/count")),
    ]);

    this.datas = dataList;
    this.total = rows;
  },

  computed: {
    alias() {
      if (this.$route.query && this.$route.query.category) {
        return this.$route.query.category.toString();
      } else if (this.category) {
        this.categories.forEach((item: any) => {
          if ((this.category = item.code)) {
            return item.alias;
          }
        });
      }
      return "";
    },
  },

  methods: {
    retrieve(page: number) {
      this.page = page;
      this.$fetch();
    },
  },

  head() {
    const description =
      "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title: "Posts - Leafage",
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