<template>
  <div class="my-4 md:my-10">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else class="grid grid-flow-row grid-cols-2 gap-4 md:gap-8">
      <div class="w-full" v-for="(data, index) in datas" :key="index">
        <div class="overflow-hidden">
          <div class="transform hover:scale-110 transition duration-500">
            <img :src="data.cover" :alt="data.title" class="w-full" />
          </div>
        </div>
        <div class="my-4">
          <nuxt-link
            to="/"
            class="text-xs space-x-6 text-gray-600 uppercase font-bold"
            v-text="data.category"
          ></nuxt-link>
          <h3
            class="md:text-xl font-extrabold my-3 transform hover:translate-x-2 transition duration-500"
          >
            <nuxt-link
              :to="'/posts/detail/' + data.code"
              title=""
              v-text="data.title"
            >
            </nuxt-link>
          </h3>
          <ul class="flex text-xs space-x-2 md:space-x-6 text-gray-600 uppercase">
            <li v-text="new Date(data.modifyTime).toLocaleDateString()"></li>
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
              >{{ data.viewed }}
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
              >{{ data.likes }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "ListItem",

  async fetch() {
    this.datas = await this.$axios
      .get(SERVER_URL.posts.concat("?page=0&size=4&order=likes"))
      .then((res) => res.data);
  },

  data() {
    return {
      datas: [],
    };
  },
});
</script>