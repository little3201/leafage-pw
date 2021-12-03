<template>
  <div>
    <Tab @chageParams="chageParams" :datas="categories" />
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8">
      <Item v-for="data in datas" :key="data.code" :data="data" />
    </div>
    <Pagation :page="page" :size="size" :total="total" @retrieve="retrieve" />
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
  name: "Posts",

  head() {
    return {
      title: "Posts - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    }
  },

  asyncData({ $axios }) {
    let categories = $axios.$get(SERVER_URL.category)

    return { categories }
  },

  data() {
    return {
      categories: [],
      datas: [],
      category: "",
      page: 0,
      size: 0,
      total: 0
    }
  },

  methods: {
    async retrieve(num, code) {
      this.page = num;
      this.category = code;
      [datas, total] = await Promise.all([
        this.$axios.$get(SERVER_URL.posts, { params: { page: this.page, size: this.size, category: this.category } }),
        this.$axios.$get(SERVER_URL.posts.concat("/count"))])
    },
    
    async chageParams(num, code) {
      this.page = num ? num : 0;
      this.category = code
      await Promise.all([
        this.$axios.$get(SERVER_URL.posts, {
          params: { page: 0, size: 10, order: "likes" },
        }),
        this.$axios.$get(SERVER_URL.posts.concat("/count"))]);
    }

  }
}
</script>