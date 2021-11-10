<template>
  <NuxtLink :title="data.title" :to="'/posts/detail/' + data.code" class="w-full group">
    <div class="overflow-hidden">
      <figure class="aspect-w-8 aspect-h-5 transform group-hover:scale-110 transition duration-500">
        <NuxtPicture
          :src="
            data.cover +
            '?imageMogr2/thumbnail/416x276/format/webp/interlace/1/blur/1x0/quality/100'
          "
          width="416"
          height="276"
        />
      </figure>
    </div>
    <div class="mt-4">
      <span class="text-gray-600 dark:text-gray-400 font-bold">{{ data.category }}</span>
      <h3
        class="md:text-xl font-bold my-3 transform group-hover:translate-x-2 transition duration-500 dark:text-white"
      >{{ data.title }}</h3>
      <div class="flex text-xs md:text-sm space-x-2 md:space-x-6 text-gray-600 dark:text-gray-400 uppercase">
        <span class="hidden md:block">{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </div>
        <div class="inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Item",

  props: {
    data: {
      type: Object,
      default: {},
    },
  },
});
</script>