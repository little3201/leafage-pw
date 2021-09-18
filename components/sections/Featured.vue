<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20 my-10">
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-bold">Featured Posts</h3>
      <span class="flex-1 w-full ml-4 mt-3"></span>
    </div>
    <div
      v-if="datas"
      class="grid grid-flow-col grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 md:gap-6 my-6"
    >
      <div v-for="data in datas.slice(3)" :key="data.code">
        <div class="overflow-hidden relative">
          <figure class="aspect-w-16 aspect-h-9 transform hover:scale-110 transition duration-500">
            <nuxt-picture
              :src="
                data.cover +
                '?imageMogr2/thumbnail/640x256/format/webp/blur/1x0/quality/75'
              "
              :alt="data.title"
              width="437"
              height="256"
            />
          </figure>
          <nuxt-link
            :title="data.category"
            :to="{ path: '/posts', query: { category: data.category } }"
            class="absolute top-0 text-white text-xs font-bold uppercase p-6 hover:underline"
            v-text="data.category"
          ></nuxt-link>
        </div>
        <!--blog-img end-->
        <div class="my-4">
          <h3 class="font-bold transform hover:translate-x-2 transition duration-500">
            <nuxt-link class="break-words text-sm lg:text-base" :title="data.code" :to="'/posts/detail/' + data.code" v-text="data.title"></nuxt-link>
          </h3>
          <ul class="flex text-xs space-x-6 text-gray-600 my-4 uppercase">
            <li v-text="new Date(data.modifyTime).toDateString()"></li>
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {{ data.viewed }}
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
                />
              </svg>
              {{ data.likes }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-else
      class="animate-pulse grid grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 md:gap-6 my-6"
    >
      <div v-for="i in 4" :key="i">
        <div class="w-full h-48 bg-gray-800 bg-opacity-25">
          <span class="w-full"></span>
        </div>
        <div class="flex-1 space-y-2 py-2">
          <div class="h-4 bg-gray-800 bg-opacity-25 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-800 bg-opacity-25 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

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