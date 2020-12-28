<template>
  <div class="my-10">
    <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8">
      <div class="w-full" v-for="(data, index) in datas" :key="index">
        <div class="overflow-hidden">
          <div class="transform hover:scale-110 transition duration-500">
            <img :src="data.cover" :alt="data.title" class="w-full" />
          </div>
        </div>
        <!--blog-img end-->
        <div class="my-4">
          <a
            href="#"
            title=""
            class="text-xs space-x-6 text-gray-600 uppercase font-bold"
            >Photograph</a
          >
          <h3 class="text-xl font-extrabold my-3 transform hover:translate-x-2 transition duration-500">
            <nuxt-link
              :to="'/blog/detail/' + data.code"
              title=""
              v-text="data.title"
            >
            </nuxt-link>
          </h3>
          <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
            <li>December 31, 2018</li>
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
              >3258
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
                >4</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Common",

  props: {
    datas: Array,
  },

  setup() {},
});
</script>