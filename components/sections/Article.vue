<template>
  <div>
    <div class="container mx-auto px-6 py-3">
      <div class="relative mt-6 max-w-lg mx-auto focus-within:text-orange-600">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="container mx-auto my-8 px-6">
      <div class="md:flex mt-8 md:-mx-4">
        <div
          v-for="idx in (datas.length > 2 ? 2 : datas.length)"
          :key="idx"
          class="h-64 mt-8 rounded-md overflow-hidden bg-cover bg-center md:mx-4 md:w-1/2"
          :style="{ 'background-image': 'url(' + datas[idx].imageUrl + ')' }"
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold" v-text="datas[idx].title">Sport Shoes</h2>
              <p class="mt-2 text-gray-400" v-text="datas[idx].subtitle">
              </p>
              <nuxt-link
                :to="'/blog/detail/' + datas[idx].businessId"
                class="flex items-center mt-4 px-3 py-2 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
              >
                <span>Shop Now</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 1/3 -->
      <div class="md:flex mt-8 md:-mx-4">
        <div
          v-for="index in ((datas.length - 2) > 3 ? 3 : (datas.length - 2))"
          :key="index"
          class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/3"
          :style="{ 'background-image': 'url(' + datas[index + 2].imageUrl + ')' }"
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold" v-text="datas[index + 2].title"></h2>
              <p class="mt-2 text-gray-400" v-text="datas[index + 2].subtitle">
              </p>
              <nuxt-link
                :to="'/blog/detail/' + datas[index + 2].businessId"
                class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
              >
                <span>Show Now</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
          <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
    <Figure />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";
import Figure from "./Figure.vue";

export default defineComponent({
  components: { Figure },
  name: "Article",

  props: {
    datas: Array,
  },
});
</script>