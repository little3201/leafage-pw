<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div
      class="grid md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-4"
    >
      <div class="md:col-span-2 lg:row-span-2 lg:col-span-2">
        <div v-if="datas[0]" class="relative overflow-hidden">
          <figure
            class="aspect-w-16 aspect-h-9 md:aspect-none transform hover:scale-110 transition duration-500"
          >
            <nuxt-picture :src="datas[0].cover" :alt="datas[0].title" width="2048" height="1080" />
            <div class="absolute w-full h-full bg-gray-800 bg-opacity-25"></div>
          </figure>
          <nuxt-link
            :title="datas[0].category"
            :to="{ path: '/posts', query: { category: datas[0].category } }"
            class="absolute top-0 text-white text-xs font-bold uppercase p-4 md:p-10 hover:underline"
            v-text="datas[0].category"
          ></nuxt-link>
          <div class="absolute bottom-4 md:bottom-8 text-white p-4 md:p-10 w-auto">
            <h2
              class="p-4 md:p-6 md:text-xl font-black leading-8 text-left border border-solid border-gray-300 transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link
                :title="datas[0].code"
                :to="'/posts/detail/' + datas[0].code"
                v-text="datas[0].title"
              ></nuxt-link>
            </h2>
          </div>
          <div class="absolute bottom-0 text-white p-4 md:p-10 w-full">
            <div class="hidden md:flex justify-between items-center">
              <ul class="flex text-xs space-x-6 text-gray-400">
                <li class="uppercase" v-text="new Date(datas[0].modifyTime).toLocaleDateString()"></li>
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
                  {{ datas[0].viewed }}
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
                  {{ datas[0].likes }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else class="animate-pulse w-full h-full">
          <div class="w-full h-full">
            <div class="w-full h-full bg-gray-800 bg-opacity-25">
              <span class="w-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="datas[1]" class="relative text-white overflow-hidden">
        <figure class="aspect-w-16 aspect-h-9 transform hover:scale-110 transition duration-500">
          <nuxt-picture
            :src="
              datas[1].cover +
              '?imageMogr2/thumbnail/640x256/format/webp/blur/1x0/quality/75'
            "
            :alt="datas[1].title"
            width="640"
            height="256"
            sizes="sm:192px"
          />
        </figure>
        <nuxt-link
          :title="datas[1].category"
          :to="{ path: '/posts', query: { category: datas[1].category } }"
          class="absolute top-0 text-white text-xs font-bold uppercase p-8 hover:underline"
          v-text="datas[1].category"
        ></nuxt-link>
        <div class="absolute px-8 text-left font-black bottom-8">
          <h3 class="transform hover:translate-x-2 transition duration-500">
            <nuxt-link
              :title="datas[1].code"
              :to="'/posts/detail/' + datas[1].code"
              v-text="datas[1].title"
            ></nuxt-link>
          </h3>
        </div>
      </div>
      <div v-else class="animate-pulse">
        <div class="w-full h-64">
          <div class="w-full h-full bg-gray-800 bg-opacity-25">
            <span class="w-full"></span>
          </div>
        </div>
      </div>
      <div v-if="datas[2]" class="relative text-white overflow-hidden">
        <figure class="aspect-w-16 aspect-h-9 transform hover:scale-110 transition duration-500">
          <nuxt-picture
            :src="
              datas[2].cover +
              '?imageMogr2/thumbnail/640x256/format/webp/blur/1x0/quality/75'
            "
            :alt="datas[2].title"
            width="640"
            height="256"
            sizes="sm:192px"
          />
        </figure>
        <nuxt-link
          :title="datas[2].category"
          :to="{ path: '/posts', query: { category: datas[2].category } }"
          class="absolute top-0 text-white text-xs font-bold uppercase p-8 hover:underline"
          v-text="datas[2].category"
        ></nuxt-link>
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black bottom-8">
          <h3 class="transform hover:translate-x-2 transition duration-500">
            <nuxt-link
              :title="datas[2].code"
              :to="'/posts/detail/' + datas[2].code"
              v-text="datas[2].title"
            ></nuxt-link>
          </h3>
        </div>
      </div>
      <div v-else class="animate-pulse">
        <div class="w-full h-64">
          <div class="w-full h-full bg-gray-800 bg-opacity-25">
            <span class="w-full"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Hero",

  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
});
</script>