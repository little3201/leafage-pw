<template>
  <section>
    <div class="flex divide-y-2 divide-gray-400 divide-dotted">
      <h3 class="uppercase font-extrabold -mt-3">Top Posts</h3>
      <span class="flex-1 w-full ml-4"></span>
    </div>
    <div class="my-6">
      <div
        class="
          grid grid-flow-col grid-rows-3
          lg:grid-rows-2
          grid-cols-1
          lg:grid-cols-3
          gap-4
          lg:gap-x-6
        "
      >
        <div v-if="datas[0]" class="lg:row-span-2 lg:col-span-2">
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img
                :src="datas[0].cover"
                :alt="datas[0].title"
                class="w-full h-48 lg:h-full object-cover"
              />
            </div>
          </div>
          <div class="mt-6">
            <ul
              class="flex text-xs space-x-6 uppercase font-bold text-gray-500"
            >
              <li>
                <nuxt-link
                  :title="datas[0].category"
                  :to="{
                    path: '/posts',
                    query: { category: datas[0].category },
                  }"
                  class="text-gray-600"
                  v-text="datas[0].category"
                ></nuxt-link>
              </li>
              <li
                v-text="new Date(datas[0].modifyTime).toLocaleDateString()"
              ></li>
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
                >{{ datas[0].viewed }}
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
                  ></path></svg
                >{{ datas[0].likes }}
              </li>
            </ul>
            <h3
              class="
                md:text-xl
                font-extrabold
                my-4
                transform
                hover:translate-x-2
                transition
                duration-500
              "
            >
              <nuxt-link
                :title="datas[0].code"
                :to="'/posts/detail/' + datas[0].code"
                v-text="datas[0].title"
              ></nuxt-link>
            </h3>
            <p
              class="hidden md:block text-gray-500 font-light"
              v-text="datas[0].subtitle"
            ></p>
          </div>
        </div>
        <div v-else class="animate-pulse md:row-span-2 md:col-span-2 h-auto">
          <div class="w-full h-full">
            <div class="w-full h-full bg-gray-800 bg-opacity-25">
              <span class="w-full"></span>
            </div>
          </div>
        </div>
        <div v-if="datas[1]">
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img
                :src="
                  datas[1].cover +
                  '?imageMogr2/thumbnail/640x192/format/webp/blur/1x0/quality/75'
                "
                :alt="datas[1].title"
                class="w-full h-48 lg:h-40"
              />
            </div>
          </div>
          <div>
            <ul class="flex my-2 text-xs space-x-6 uppercase text-gray-500">
              <li
                v-text="new Date(datas[1].modifyTime).toLocaleDateString()"
              ></li>
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
                >{{ datas[1].viewed }}
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
                  ></path></svg
                >{{ datas[1].likes }}
              </li>
            </ul>
            <h3
              class="
                font-extrabold
                transform
                hover:translate-x-2
                transition
                duration-500
              "
            >
              <nuxt-link
                :title="datas[1].code"
                :to="'/posts/detail/' + datas[1].code"
                v-text="datas[1].title"
              ></nuxt-link>
            </h3>
            <p
              class="hidden sm:block lg:hidden text-gray-500 font-light"
              v-text="datas[1].subtitle"
            ></p>
          </div>
        </div>
        <div v-else class="animate-pulse">
          <div class="w-full h-48">
            <div class="w-full h-full bg-gray-800 bg-opacity-25">
              <span class="w-full"></span>
            </div>
          </div>
        </div>
        <div v-if="datas[2]">
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img
                :src="
                  datas[2].cover +
                  '?imageMogr2/thumbnail/640x192/format/webp/blur/1x0/quality/75'
                "
                :alt="datas[2].title"
                class="w-full h-48 lg:h-40"
              />
            </div>
          </div>
          <div>
            <ul class="flex my-2 text-xs space-x-6 uppercase text-gray-500">
              <li
                v-text="new Date(datas[2].modifyTime).toLocaleDateString()"
              ></li>
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
                >{{ datas[2].viewed }}
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
                  ></path></svg
                >{{ datas[2].likes }}
              </li>
            </ul>
            <h3
              class="
                font-extrabold
                transform
                hover:translate-x-2
                transition
                duration-500
              "
            >
              <nuxt-link
                :title="datas[2].code"
                :to="'/posts/detail/' + datas[2].code"
                v-text="datas[2].title"
              ></nuxt-link>
            </h3>
            <p
              class="hidden sm:block lg:hidden text-gray-500 font-light"
              v-text="datas[2].subtitle"
            ></p>
          </div>
        </div>
        <div v-else class="animate-pulse">
          <div class="w-full h-40">
            <div class="w-full h-full bg-gray-800 bg-opacity-25">
              <span class="w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "TopPosts",

  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
});
</script>