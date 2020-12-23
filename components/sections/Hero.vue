<template>
  <section class="container mx-auto">
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div class="row-span-2 col-span-2 flex justify-center items-center">
        <div class="relative w-full h-full overflow-hidden">
          <div
            class="w-full h-full transform hover:scale-110 transition duration-500"
          >
            <img
              :src="datas[0].cover"
              :alt="datas[0].title"
              class="absolute w-full h-full"
            />
            <div
              class="absolute w-full h-full"
              style="background-color: rgba(42, 42, 42, 0.3)"
            ></div>
          </div>
          <nuxt-link
            to="/"
            title=""
            class="absolute top-0 text-white text-xs font-extrabold uppercase p-10"
            >Lifestyle</nuxt-link
          >
          <!--blog-img end-->
          <div class="absolute bottom-0 text-white p-10 w-full">
            <h3
              class="max-w-sm p-6 mb-6 text-xl font-black leading-8 text-left border border-solid border-gray-600"
            >
              <nuxt-link
                :to="'/blog/detail/' + datas[0].code"
                title=""
                v-text="datas[0].title"
              ></nuxt-link>
            </h3>
            <div class="flex justify-between items-center">
              <ul class="flex text-xs space-x-6 text-gray-400">
                <li class="uppercase">December 22, 2018</li>
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
                  >3258
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
                    >4</a
                  >
                </li>
              </ul>
              <ul class="flex justify-end space-x-6">
                  <li class="p-2 rounded-full border border-gray-600">
                    <a href="#" title=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                      >
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        ></path></svg
                    ></a>
                  </li>
                  <li class="p-2 rounded-full border border-gray-600">
                    <a href="#" title=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-linkedin"
                      >
                        <path
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        ></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle></svg
                    ></a>
                  </li>
                  <li class="p-2 rounded-full border border-gray-600">
                    <a href="#" title=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                  </li>
                  <li class="p-2 rounded-full border border-gray-600">
                    <a href="#" title=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                  </li>
                </ul>
            </div>
            <!--met-soc end-->
          </div>
          <!--blog-info end-->
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
          <div
            class="absolute w-full h-full"
            style="background-color: rgba(42, 42, 42, 0.3)"
          ></div>
        </div>
        <nuxt-link
          to="/"
          title=""
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          >Lifestyle</nuxt-link
        >
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black" style="bottom: 30px">
          <h3 class="post-title">
            <nuxt-link
              :to="'/blog/detail/' + datas[1].code"
              title=""
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
          <div
            class="absolute w-full h-full"
            style="background-color: rgba(42, 42, 42, 0.3)"
          ></div>
        </div>
        <nuxt-link
          to="/"
          title=""
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          >Lifestyle</nuxt-link
        >
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black" style="bottom: 30px">
          <nuxt-link
            :to="'/blog/detail/' + datas[2].code"
            title=""
            v-text="datas[2].title"
          ></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Posts",

  props: {
    datas: Array,
  },
});
</script>