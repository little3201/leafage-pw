<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="mb-12">
      <div class="uppercase font-extrabold">
        <h3>Top Posts</h3>
      </div>
      <!--sec-title end-->
      <div class="my-6">
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-10">
          <div class="row-span-2 col-span-2">
            <div class="overflow-hidden">
              <div class="transform hover:scale-110 transition duration-500">
                <img
                  :src="datas[0].cover"
                  :alt="datas[0].title"
                  class="w-full"
                />
              </div>
            </div>
            <!--blog-img end-->
            <div class="mt-6">
              <ul
                class="flex text-xs space-x-6 uppercase font-bold text-gray-500"
              >
                <li>
                  <a href="#" title="" class="text-gray-600">Photograph</a>
                </li>
                <li
                  v-text="new Date(datas[0].modifyTime.replace(/\s/, 'T')).toLocaleDateString()"
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
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
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
                class="text-xl font-extrabold my-4 transform hover:translate-x-2 transition duration-500"
              >
                <nuxt-link
                  :to="'/blog/detail/' + datas[0].code"
                  v-text="datas[0].title"
                ></nuxt-link>
              </h3>
              <p
                class="text-gray-500 font-light"
                v-text="datas[0].subtitle"
              ></p>
            </div>
            <!--blog-info end-->
            <!--blog-item end-->
          </div>
          <div>
            <div class="overflow-hidden">
              <div class="transform hover:scale-110 transition duration-500">
                <img
                  :src="datas[1].cover"
                  :alt="datas[1].title"
                  class="w-full"
                />
              </div>
            </div>
            <!--blog-img end-->
            <div>
              <h3
                class="font-extrabold my-2 transform hover:translate-x-2 transition duration-500"
              >
                <nuxt-link
                  :to="'/blog/detail/' + datas[1].code"
                  v-text="datas[1].title"
                ></nuxt-link>
              </h3>
              <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                <li
                  v-text="new Date(datas[1].modifyTime.replace(/\s/, 'T')).toLocaleDateString()"
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
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
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
            </div>
            <!--blog-info end-->
          </div>
          <!--blog-item end-->
          <div>
            <div class="overflow-hidden">
              <div class="transform hover:scale-110 transition duration-500">
                <img
                  :src="datas[2].cover"
                  :alt="datas[2].title"
                  class="w-full"
                />
              </div>
            </div>
            <!--blog-img end-->
            <div>
              <h3
                class="font-extrabold my-2 transform hover:translate-x-2 transition duration-500"
              >
                <nuxt-link
                  :to="'/blog/detail/' + datas[2].code"
                  v-text="datas[2].title"
                ></nuxt-link>
              </h3>
              <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                <li
                  v-text="new Date(datas[2].modifyTime.replace(/\s/, 'T')).toLocaleDateString()"
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
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Top",

  async fetch() {
    this.datas = await this.$axios
      .get(SERVER_URL.posts.concat("?page=0&size=3&order=viewed"))
      .then((res) => res.data);
  },

  data() {
    return {
      datas: [],
    };
  },
});
</script>