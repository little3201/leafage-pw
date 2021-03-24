<template>
  <div class="lg:flex lg:justify-end w-full">
    <div class="lg:ml-12">
      <div class="border border-solid border-gray-400 p-8">
        <h3 class="font-extrabold">欢迎关注公众号（Leafage）</h3>
        <div class="flex items-center mt-4">
          <img
            class="w-32 h-32 border"
            src="/images/resources/leafage-wechat.jpg"
            alt="leafage"
          />
          <div class="mx-4">
            <p class="my-2">微信搜一搜</p>
            <input
              type="text"
              class="placeholder-gray-600 border border-gray-400 p-2 w-full text-sm"
              disabled
              placeholder="Leafage"
            />
          </div>
        </div>
      </div>
      <div class="my-12 py-8 border border-solid border-gray-400 relative">
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
          <img
            class="w-32 h-20 object-cover"
            :src="data.cover"
            :alt="data.title"
          />
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
      <div class="border border-solid border-gray-400 relative">
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
      <div class="my-12 border-2 border-solid border-black p-8">
        <h3 class="font-extrabold">Send Email To Me</h3>
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
      <div class="border border-solid border-gray-400 relative">
        <h3
          class="absolute top-0 -mt-3 px-2 ml-6 bg-white uppercase text-sm font-semibold"
        >
          Friend Chain
        </h3>
        <ul
          class="grid grid-cols-1 divide-y divide-gray-400 p-8 text-xs text-gray-600 font-semibold list-decimal"
          style="line-style: inside"
        >
          <li class="py-3 mx-4">
            <a href="https://howtodoinjava.com/" target="_blank"
              >how to do in java</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              href="https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN"
              target="_blank"
              >nginx config</a
            >
          </li>
          <li class="py-3 mx-4">
            <a href="https://console.abeille.top" target="_blank">leafage-ms</a>
          </li>
          <li class="py-3 mx-4">
            <a href="https://blog.csdn.net/zx110503?spm=1008.2028.3001.5343&type=blog" target="_blank">csdn</a>
          </li>
          <li class="py-3 mx-4">
            <a href="https://my.oschina.net/u/4066932" target="_blank">oschina</a>
          </li>
          <li class="py-3 mx-4">
            <a href="https://segmentfault.com/u/bujidao_5d0c24ce7055e/articles" target="_blank">segmentfault</a>
          </li>
        </ul>
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