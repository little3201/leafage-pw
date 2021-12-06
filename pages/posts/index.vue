<template>
  <div>
    <Tab @chageParams="chageParams" :datas="categories" />
    <div
      class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
    >
      <Item v-for="data in datas" :key="data.code" :data="data" />
    </div>
    <Pagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
  name: "Posts",

  head() {
    return {
      title: "Posts - Leafage",
    }
  },

  async asyncData({ $axios }) {
    let [datas, total, categories] = await Promise.all([
      $axios.$get(SERVER_URL.posts, {
        params: { page: 0, size: 16, order: "likes" },
      }),
      $axios.$get(SERVER_URL.posts.concat("/count")),
      $axios.$get(SERVER_URL.category)])

    return { datas, total, categories }
  },

  data() {
    return {
      page: 0,
      size: 16,
      total: 0,
      datas: []
    }
  },

  methods: {
    chageParams(num, code) {
      this.page = num ? num : 0;
      this.retrieve(code);
    },

    async retrieve(code) {
      await Promise.all([
        this.$axios.get(SERVER_URL.posts, {
          params: { page: this.page, size: this.size, category: code },
        }).then(res => this.datas = res.data),
        this.$axios.get(SERVER_URL.posts.concat("/count")).then(res => this.total = res.data)])
    }
  }
}
</script>