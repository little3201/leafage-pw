<template>
  <section class="container mx-auto">
    <div class="uppercase font-extrabold">
      <h3>Recommended</h3>
    </div>
    <div
      class="grid grid-flow-row grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-4 my-6"
    >
      <div class="flex" v-for="(data, index) in datas" :key="index">
        <div class="overflow-hidden">
          <div class="transform hover:scale-110 transition duration-500">
            <img
              :src="data.cover"
              :alt="data.title"
              class="w-64 h-32 object-cover"
            />
          </div>
        </div>
        <!--blog-img end-->
        <div class="px-6 w-full">
          <a href="#" title="" class="text-xs space-x-6 text-gray-600 uppercase"
            >Fashion</a
          >
          <h3
            class="my-3 font-extrabold transform hover:translate-x-2 transition duration-500"
          >
            <nuxt-link :to="'/blog/detail/' + data.code" v-text="data.title">
            </nuxt-link>
          </h3>
          <ul class="flex text-xs space-x-6 text-gray-600">
            <li>Dec 25, 2018</li>
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
              >2478
            </li>
            <li>
              <nuxt-link to="/" title="" class="flex items-center"
                ><svg
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
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  ></path></svg
                >3</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Recommend",

  async fetch() {
    this.datas = await this.$axios
      .get(SERVER_URL.posts.concat("?page=0&size=6"))
      .then((res) => res.data);
  },

  data() {
    return {
      datas: [],
    };
  },
});
</script>