<template>
  <div class="my-4 md:my-10">
    <div v-if="datas && datas.length > 0" class="grid grid-flow-row grid-cols-2 gap-4 md:gap-8">
      <div class="w-full" v-for="data in datas" :key="data.code">
        <div class="overflow-hidden">
          <figure class="aspect-w-16 aspect-h-9 transform hover:scale-110 transition duration-500">
            <nuxt-picture
              :src="
                data.cover +
                '?imageMogr2/thumbnail/640x256/format/webp/blur/1x0/quality/75'
              "
              width="640"
              height="256"
            />
          </figure>
        </div>
        <div class="my-4">
          <nuxt-link
            :title="data.category"
            :to="{ path: '/posts', query: { category: data.category } }"
            class="break-words text-xs space-x-6 text-gray-600 uppercase font-bold hover:underline hover:text-black"
            v-text="data.category"
          ></nuxt-link>
          <h3
            class="md:text-xl font-bold my-3 transform hover:translate-x-2 transition duration-500"
          >
            <nuxt-link :title="data.code" :to="'/posts/detail/' + data.code" v-text="data.title"></nuxt-link>
          </h3>
          <ul class="flex text-xs space-x-2 md:space-x-6 text-gray-600 uppercase">
            <li v-text="new Date(data.modifyTime).toLocaleDateString()"></li>
            <li class="inline-flex items-center">
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
            <li class="inline-flex items-center">
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
            <li class="inline-flex items-center">
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
                class="feather feather-message-square mr-1"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {{ data.comment }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="animate-pulse grid grid-flow-row grid-cols-2 gap-4 md:gap-8">
      <div v-for="i in 6" :key="i">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "ListItem",

  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
});
</script>