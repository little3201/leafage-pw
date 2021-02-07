<template>
  <div class="lg:flex lg:justify-end w-full">
    <div class="lg:ml-12">
      <div class="py-8 border border-solid border-gray-400 relative">
        <h3
          class="absolute top-0 -mt-3 px-2 ml-6 bg-white uppercase text-sm font-semibold"
        >
          Trending
        </h3>
        <div
          class="flex px-4 md:px-8 py-2"
          v-for="data in datas"
          :key="data.code"
        >
          <img class="w-32" :src="data.cover" :alt="data.title" />
          <div class="ml-4">
            <h3
              class="text-sm font-bold transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link
                :to="'/posts/detail/' + data.code"
                v-text="data.title"
              ></nuxt-link>
            </h3>
            <span
              class="text-xs text-gray-500 font-bold uppercase"
              v-text="new Date(data.modifyTime).toLocaleDateString()"
            ></span>
          </div>
        </div>
      </div>
      <div class="my-12 border border-solid border-gray-400 relative">
        <h3
          class="absolute top-0 -mt-3 px-2 ml-6 bg-white uppercase text-sm font-semibold"
        >
          Categories
        </h3>
        <ul
          class="grid grid-cols-1 divide-y divide-gray-400 p-8 text-xs text-gray-600 font-semibold uppercase list-disc"
          style="line-style: inside"
        >
          <li
            class="py-3 mx-4"
            v-for="category in categories"
            :key="category.code"
          >
            <nuxt-link
              :to="{ path: '/posts', params: { code: category.code } }"
              v-text="category.alias"
            ></nuxt-link>
            <span class="mr-2 float-right" v-text="category.count"></span>
          </li>
        </ul>
      </div>
      <div class="border-2 border-solid border-black p-8 my-12">
        <div class="flex">
          <h3 class="font-extrabold">Get Fresh News</h3>
        </div>
        <form class="mt-4 flex items-center">
          <input
            class="w-full text-sm text-black placeholder-gray-600 border border-gray-400 py-2 pl-4"
            type="email"
            placeholder="Enter your email adress"
          />

          <a
            href="mailto:little3201@163.com?subject=Leafage%20Website%20News"
            class="bg-black text-white p-2 -ml-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </form>
      </div>
      <div class="my-12 border border-solid border-gray-400 relative">
        <h3
          class="absolute top-0 -mt-3 px-2 ml-6 bg-white uppercase text-sm font-semibold"
        >
          Fridnd Chain
        </h3>
        <ul
          class="grid grid-cols-1 divide-y divide-gray-400 p-8 text-xs text-gray-600 font-semibold list-decimal"
          style="line-style: inside"
        >
          <li class="py-3 mx-4">
            <a href="https://howtodoinjava.com/" target="_blank"
              >HowToDoInJava</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              href="https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN"
              target="_blank"
              >Nginx Config</a
            >
          </li>
          <li class="py-3 mx-4">
            <a href="https://console.abeille.top" target="_blank">Leafage-MS</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-center my-12">
        <a href="#" title=""
          ><img src="/images/resources/ad-img.jpg" alt="leafage"
        /></a>
      </div>
      <div>
        <div class="relative">
          <img
            src="/images/resources/page-img.jpg"
            alt="leafage"
            class="w-full"
          />
          <div class="absolute top-0 uppercase font-bold p-6">
            <h3 class="text-white">Leafage</h3>
            <span class="text-xs text-gray-500">布吉岛</span>
          </div>
          <ul
            class="absolute bottom-0 p-6 flex justify-between w-full text-white"
          ></ul>
        </div>
        <div class="bg-gray-100 p-6">
          <div class="bg-white p-4 shadow-xl">
            <h5 class="text-xs text-gray-500">
              You and 16 other friends like this
            </h5>
            <ul class="flex justify-between mt-2">
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img1.jpg" alt="leafage-pw"
                /></a>
              </li>
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img2.jpg" alt="leafage-pw"
                /></a>
              </li>
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img3.jpg" alt="leafage-pw"
                /></a>
              </li>
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img4.jpg" alt="leafage-pw"
                /></a>
              </li>
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img5.jpg" alt="leafage-pw"
                /></a>
              </li>
              <li>
                <a href="#" title=""
                  ><img src="/images/resources/fb-img6.jpg" alt="leafage-pw"
                /></a>
              </li>
            </ul>
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
  name: "SideBar",

  async fetch() {
    let [datas, categories] = await Promise.all([
      await this.$axios
        .get(SERVER_URL.posts.concat("?page=0&size=5&order=viewed"))
        .then((res) => res.data),

      await this.$axios
        .get(SERVER_URL.category.concat("?page=0&size=5"))
        .then((res) => res.data),
    ]);
    this.datas = datas;
    this.categories = categories;
  },

  data() {
    return {
      datas: [],
      categories: [],
    };
  },
});
</script>