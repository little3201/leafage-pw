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
          <img
            class="w-32"
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
        <!--wd-posts end-->
      </div>
      <!--widget-trending-posts end-->
      <div class="my-12 border border-solid border-gray-400">
        <ul class="grid grid-cols-3 text-center divide-x py-8">
          <li>
            <a href="#" title="" class="flex justify-center mb-3"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg
            ></a>
            <h4>3,553</h4>
            <span class="text-xs text-gray-500">Followers</span>
          </li>
          <li>
            <a href="#" title="" class="flex justify-center mb-3"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                ></path></svg
            ></a>
            <h4>11,211</h4>
            <span class="text-xs text-gray-500">Followers</span>
          </li>
          <li>
            <a href="#" title="" class="flex justify-center mb-3"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
            ></a>
            <h4>9,328</h4>
            <span class="text-xs text-gray-500">Followers</span>
          </li>
        </ul>
      </div>
      <!--widget-social-links end-->
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
      <div class="flex justify-center">
        <a href="#" title=""
          ><img src="/images/resources/ad-img.jpg" alt="leafage"
        /></a>
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
            <nuxt-link :to="{path: '/posts', params: {code: category.code}}" v-text="category.alias"></nuxt-link>
            <span class="mr-2 float-right" v-text="category.count"></span>
          </li>
        </ul>
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
            <span class="text-xs text-gray-500">321K likes</span>
          </div>
          <ul
            class="absolute bottom-0 p-6 flex justify-between w-full text-white"
          >
          </ul>
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