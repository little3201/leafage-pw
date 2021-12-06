<template>
  <div>
    <Tab @chageParams="chageParams" :datas="categories" />
    <div
      class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
    >
      <NuxtLink
        v-for="data in datas"
        :key="data.code"
        :to="'/posts/detail/' + data.code"
        class="group"
      >
        <div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border">
          <img
            :src="data.cover"
            alt="images"
            class="w-full h-full object-center filter grayscale group-hover:opacity-75"
            height="100%"
            width="100%"
          />
        </div>
        <p
          class="my-3 text-lg font-bold text-gray-800 dark:text-gray-300 group-hover:underline"
        >《{{ data.title }}》</p>
        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
          <div>
            <div class="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-eye mr-1"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {{ data.viewed }}
            </div>
            <div class="inline-flex items-center mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-download-cloud mr-1"
              >
                <polyline points="8 17 12 21 16 17" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
              </svg>
              {{ data.downloads }}
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Pagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
  name: "Resource",
  head() {
    return {
      title: "Resource - Leafage",
    }
  },

  data() {
    return {
      page: 0,
      size: 12
    }
  },

  async asyncData({ $axios }) {
    let [datas, total, categories] = await Promise.all([
      $axios.$get(SERVER_URL.resource, { params: { page: 0, size: 12 } }),
      $axios.$get(SERVER_URL.resource.concat("/count")),
      $axios.$get(SERVER_URL.category)]
    )

    return { datas, total, categories }
  },

  methods: {
    chageParams(num, code) {
      this.page = num ? num : 0;
      this.retrieve(code);
    },

    async retrieve(code) {
      await Promise.all([
        this.$axios.$get(SERVER_URL.resource, {
          params: { page: this.page, size: this.size, category: code }
        }).then(res => this.datas = res.data),
        this.$axios.$get(SERVER_URL.resource.concat("/count").then(res => this.total = res.data))])
    }
  }
}
</script>