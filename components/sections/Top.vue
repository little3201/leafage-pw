<template>
  <div class="mb-12">
    <div class="uppercase font-extrabold">
      <h3>Top Posts</h3>
    </div>
    <!--sec-title end-->
    <div class="my-6">
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-10">
        <div class="row-span-2 col-span-2">
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img :src="datas[0].cover" :alt="datas[0].title" class="w-full" />
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
              <li>December 18, 2018</li>
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
                >4123
              </li>
              <li>
                <a href="#" title="" class="flex items-center"
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
                  >7</a
                >
              </li>
            </ul>
            <h3
              class="text-xl font-extrabold my-4 transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link :to="'/blog/detail/' + datas[0].code" v-text="datas[0].title"
                ></nuxt-link
              >
            </h3>
            <p class="text-gray-500 font-light" v-text="datas[0].subtitle">
            </p>
          </div>
          <!--blog-info end-->
          <!--blog-item end-->
        </div>
        <div>
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img :src="datas[1].cover" :alt="datas[1].title" class="w-full" />
            </div>
          </div>
          <!--blog-img end-->
          <div>
            <h3
              class="font-extrabold my-2 transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link :to="'/blog/detail/' + datas[1].code" v-text="datas[1].title"
                ></nuxt-link
              >
            </h3>
            <ul class="flex text-xs space-x-6 uppercase text-gray-500">
              <li>Dec 24, 2018</li>
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
                >417
              </li>
              <li>
                <a href="#" title="" class="flex items-center"
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
                  >1</a
                >
              </li>
            </ul>
          </div>
          <!--blog-info end-->
        </div>
        <!--blog-item end-->
        <div>
          <div class="overflow-hidden">
            <div class="transform hover:scale-110 transition duration-500">
              <img :src="datas[2].cover" :alt="datas[2].title" class="w-full" />
            </div>
          </div>
          <!--blog-img end-->
          <div>
            <h3
              class="font-extrabold my-2 transform hover:translate-x-2 transition duration-500"
            >
              <nuxt-link :to="'/blog/detail/' + datas[0].code" v-text="datas[2].title"
                ></nuxt-link
              >
            </h3>
            <ul class="flex text-xs space-x-6 uppercase text-gray-500">
              <li>Dec 21, 2018</li>
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
                >247
              </li>
              <li>
                <a href="#" title="" class="flex items-center"
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
                  >2</a
                >
              </li>
            </ul>
          </div>
          <!--blog-info end-->
        </div>
        <!--blog-item end-->
      </div>
    </div>
    <!--blog-items end-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Top",

  props: {
    datas: Array,
  },

  setup() {},
});
</script>