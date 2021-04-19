<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20 my-12">
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-extrabold">Featured Posts</h3>
      <span class="flex-1 w-full ml-4 mt-3"></span>
    </div>
    <!--sec-title end-->
    <div class="my-6">
      <div
        class="grid grid-flow-col grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 md:gap-6"
      >
        <div v-for="(data, index) in datas" :key="index">
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img
                :src="
                  data.cover +
                  '?imageMogr2/thumbnail/640x192/format/webp/blur/1x0/quality/75'
                "
                :alt="data.title"
                class="w-full h-44 object-cover"
              />
            </div>
          </div>
          <!--blog-img end-->
          <div class="my-4">
            <h3
              class="font-extrabold transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link
                :title="data.code"
                :to="'/posts/detail/' + data.code"
                v-text="data.title"
              ></nuxt-link>
            </h3>
            <ul class="flex text-xs space-x-6 text-gray-600 my-4 uppercase">
              <li v-text="new Date(data.modifyTime).toLocaleDateString()"></li>
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
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle></svg
                >{{ data.viewed }}
              </li>
              <li
                class="flex items-center"
              >
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
                >{{ data.likes }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Featured",

  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
});
</script>