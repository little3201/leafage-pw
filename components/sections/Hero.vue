<template>
  <section>
    <div
      class="grid grid-flow-col grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4"
    >
      <div class="md:row-span-2 md:col-span-2 flex justify-center items-center">
        <div class="relative w-full h-full overflow-hidden">
          <div
            class="w-full h-full transform hover:scale-110 transition duration-500"
          >
            <img
              :src="datas[0].cover"
              :alt="datas[0].title"
              class="absolute w-full h-full"
            />
            <div class="absolute w-full h-full bg-gray-800 bg-opacity-25"></div>
          </div>
          <nuxt-link
            to="/posts"
            class="absolute top-0 text-white text-xs font-extrabold uppercase p-10"
            v-text="datas[0].category"
          ></nuxt-link>
          <div class="absolute bottom-0 text-white p-4 md:p-10 w-auto">
            <h2
              class="p-6 mb-12 md:text-xl font-black leading-8 text-left border border-solid border-gray-300 transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link
                :to="'/posts/detail/' + datas[0].code"
                v-text="datas[0].title"
              ></nuxt-link>
            </h2>
          </div>
          <div class="absolute bottom-0 text-white p-4 md:p-10 w-full">
            <div class="hidden md:flex justify-between items-center">
              <ul class="flex text-xs space-x-6 text-gray-400">
                <li
                  class="uppercase"
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
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle></svg
                  >{{ datas[0].viewed }}
                </li>
                <li
                  class="flex items-center cursor-pointer"
                  @click="like(datas[0].code)"
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
                    class="feather feather-heart mr-1 transform hover:scale-125 transition duration-500"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    ></path></svg
                  >{{ datas[0].likes }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="relative text-white w-full h-64 overflow-hidden">
        <div
          class="w-full h-full transform hover:scale-110 transition duration-500"
        >
          <img
            :src="datas[1].cover"
            :alt="datas[1].title"
            class="absolute w-full h-full"
          />
          <div class="absolute w-full h-full bg-gray-800 bg-opacity-25"></div>
        </div>
        <nuxt-link
          to="/posts"
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          v-text="datas[1].category"
        ></nuxt-link>
        <!--blog-img end-->
        <div
          class="absolute px-8 text-left font-black bott"
          style="bottom: 30px"
        >
          <h3 class="transform hover:translate-x-2 transition duration-500">
            <nuxt-link
              :to="'/posts/detail/' + datas[1].code"
              v-text="datas[1].title"
            >
            </nuxt-link>
          </h3>
        </div>
      </div>
      <div class="relative text-white w-full h-64 overflow-hidden">
        <div
          class="w-full h-full transform hover:scale-110 transition duration-500"
        >
          <img
            :src="datas[2].cover"
            :alt="datas[2].title"
            class="absolute w-full h-full"
          />
          <div class="absolute w-full h-full bg-gray-800 bg-opacity-25"></div>
        </div>
        <nuxt-link
          to="/"
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          v-text="datas[2].category"
        ></nuxt-link>
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black" style="bottom: 30px">
          <h3 class="transform hover:translate-x-2 transition duration-500">
            <nuxt-link
              :to="'/posts/detail/' + datas[2].code"
              v-text="datas[2].title"
            ></nuxt-link>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Hero",

  props: {
    datas: {
      type: Array,
      default: []
    },
  },
  
  methods: {
    like(code: string) {
      this.$axios
        .patch(SERVER_URL.posts.concat("/", code, "/like"))
        .then((res) => {
          this.datas.forEach((data: any) => {
            if (code === data.code) {
              data.likes = res.data.likes;
            }
          });
        });
    },
  },
});
</script>