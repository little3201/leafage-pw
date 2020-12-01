<template>
  <div class="container mx-auto my-8 px-6">
    <div class="md:flex mt-8 md:-mx-4">
      <div
        v-for="idx in datas.length > 2 ? 2 : datas.length"
        :key="idx"
        class="h-64 mt-8 rounded-md overflow-hidden bg-cover bg-center md:mx-4 md:w-1/2"
        :style="{ 'background-image': 'url(' + datas[idx - 1].imageUrl + ')' }"
      >
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2
              class="md:text-2xl text-white font-semibold"
              v-text="datas[idx - 1].title"
            >
              Sport Shoes
            </h2>
            <p class="mt-2 text-gray-400 hidden lg:block" v-text="datas[idx].subtitle"></p>
            <nuxt-link
              :to="'/blog/detail/' + datas[idx - 1].businessId"
              class="flex items-center mt-4 px-3 py-2 text-white text-sm uppercase font-medium hover:underline focus:outline-none"
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
        v-for="index in datas.length - 2 > 3 ? 3 : datas.length - 2"
        :key="index"
        class="w-full mb-8 h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/3"
        :style="{
          'background-image': 'url(' + datas[index + 1].imageUrl + ')',
        }"
      >
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2
              class="md:text-2xl text-white font-semibold"
              v-text="datas[index + 1].title"
            ></h2>
            <p
              class="mt-2 text-gray-400 hidden lg:block"
              v-text="datas[index + 1].subtitle"
            ></p>
            <nuxt-link
              :to="'/blog/detail/' + datas[index + 1].businessId"
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
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Posts",

  props: {
    datas: Array,
  },
});
</script>