<template>
  <div class="container mx-auto px-6">
    <div class="block md:flex md:space-x-2 px-6 lg:p-0">
      <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <!-- post cards -->
        <div class="w-full lg:w-2/3">
          <div
            v-for="index in (datas.length - 5)"
            :key="index"
            class="w-full lg:flex mb-8"
          >
            <div
              class="h-40 lg:w-64 flex-none bg-cover text-center overflow-hidden opacity-75 rounded-md"
              :style="{
                'background-image': 'url(' + datas[index + 4].imageUrl + ')',
              }"
              title="deit is very important"
            ></div>
            <div
              class="bg-white rounded px-4 flex flex-col justify-between leading-normal"
            >
              <div>
                <nuxt-link
                  :to="'/blog/detail/' + datas[index + 4].businessId"
                  class="mt-3 md:mt-0 text-gray-700 font-semibold text-xl mb-2 hover:underline focus:outline-none"
                  v-text="datas[index  + 4].title"
                >
                </nuxt-link>
                <p
                  class="text-gray-700 text-base"
                  v-text="datas[index + 4].subtitle"
                ></p>
              </div>
              <div class="flex mt-1">
                <div>
                  <p class="font-semibold text-gray-700 text-sm capitalize">
                  </p>
                  <p
                    class="text-gray-600 text-xs"
                    v-text="
                      Math.floor(
                        (new Date().getTime() -
                          new Date(datas[index + 4].modifyTime).getTime()) /
                          1000 /
                          60 /
                          60 /
                          24
                      ) > 30
                        ? Math.floor(
                            (new Date().getTime() -
                              new Date(datas[index + 4].modifyTime).getTime()) /
                              1000 /
                              60 /
                              60 /
                              24 /
                              30
                          ) + '个月前'
                        : Math.floor(
                            (new Date().getTime() -
                              new Date(datas[index + 4].modifyTime).getTime()) /
                              1000 /
                              60 /
                              60 /
                              24
                          ) + '天前'
                    "
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- right sidebar -->
        <div class="w-full lg:w-1/3 px-3">
          <!-- topics -->
          <div class="mb-4">
            <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
              Popular Topics
            </h5>
            <ul>
              <li
                class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <a
                  href="#"
                  class="flex items-center text-gray-600 cursor-pointer"
                >
                  <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                  Nutrition
                  <span class="text-gray-500 ml-auto">23 articles</span>
                  <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </a>
              </li>
              <li
                class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <a
                  href="#"
                  class="flex items-center text-gray-600 cursor-pointer"
                >
                  <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                  Food & Diet
                  <span class="text-gray-500 ml-auto">18 articles</span>
                  <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </a>
              </li>
              <li
                class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <a
                  href="#"
                  class="flex items-center text-gray-600 cursor-pointer"
                >
                  <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                  Workouts
                  <span class="text-gray-500 ml-auto">34 articles</span>
                  <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </a>
              </li>
              <li
                class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              >
                <a
                  href="#"
                  class="flex items-center text-gray-600 cursor-pointer"
                >
                  <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                  Immunity
                  <span class="text-gray-500 ml-auto">9 articles</span>
                  <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- divider -->
          <div class="border border-dotted"></div>

          <!-- subscribe -->
          <div class="p-1 mt-4 mb-4">
            <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">
              Subscribe
            </h5>
            <p class="text-gray-600">
              Subscribe to our newsletter. We deliver the best health related
              articles to your inbox
            </p>
            <input
              placeholder="your email address"
              class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
            />
            <button
              class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide"
            >
              Subscribe
            </button>
          </div>

          <!-- divider -->
          <div class="border border-dotted"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Blog",

  props: {
    datas: Array,
  },
});
</script>