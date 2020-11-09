<template>
<div class="container md:px-4 mx-auto">
    <div class="mt-10 md:mt-20 md:mx-auto">
      <!-- featured section -->
      <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        <!-- main post -->
        <div
          class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block"
        >
          <img
            :alt="datas[0].title"
            :src="datas[0].imageUrl"
            class="rounded-md object-cover w-full"
          />
          <span class="text-orange-600 text-sm hidden md:block mt-4">
            Technology
          </span>
          <h1 class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            {{ datas[0].title }}
          </h1>
          <p class="text-gray-600 mb-4 text-xl">
            {{ datas[0].subtitle }}
          </p>
          <nuxt-link
            :to="'/blog/detail/' + datas[0].businessId"
            class="inline-block px-6 py-3 mt-2 rounded-md bg-orange-600 text-gray-100 transition ease-in-out duration-150 hover:bg-orange-500"
          >
            Read more
          </nuxt-link>
        </div>

        <!-- sub-main posts -->
        <div class="w-full md:w-4/7">
          <div v-for="subindex in ((datas.length - 1) > 4 ? 4 : (datas.length - 1))" :key="subindex" class="rounded w-full flex flex-col md:flex-row mb-6 p-4 lg:p-0">
            <img
              :alt="datas[subindex].title"
              :src="datas[subindex].imageUrl"
              class="block md:hidden lg:block rounded lg:w-64 md:h-32 object-cover"
            />
            <div class="bg-white rounded md:px-4 pt-4 md:pt-0">
              <span class="text-orange-600 text-sm hidden md:block">
                Technology
              </span>
              <nuxt-link :to="'/blog/detail/' + datas[subindex].businessId" class="md:mt-0 text-gray-800 font-semibold text-xl mb-2 hover:text-orange-500 transition ease-in-out duration-150">
                {{ datas[subindex].title }}
              </nuxt-link>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                {{ datas[subindex].subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end featured section -->

      <!-- recent posts -->
      <div class="flex mt-12 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Latest articles</h2>
        <a
          class="bg-gray-200 hover:bg-orange-200 text-gray-800 px-6 py-1 rounded cursor-pointer"
        >
          View all
        </a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6">
        <div v-for="recentIndex in ((datas.length - 5) > 3 ? 3 : (datas.length - 5))" :key="recentIndex" class="rounded w-full lg:w-1/2 p-4 lg:p-0">
          <img
            :alt="datas[recentIndex + 4].title"
            :src="datas[recentIndex + 4].imageUrl"
            class="rounded md:h-56 w-full"
          />
          <div class="p-4 pl-0">
            <nuxt-link
              :to="'/blog/detail/' + datas[recentIndex + 4].businessId"
              class="font-bold text-2xl text-gray-800 hover:text-orange-500 transition ease-in-out duration-150">
              {{ datas[recentIndex + 4].title }}
            </nuxt-link>
            <p class="text-gray-700 mt-2">
              {{ datas[recentIndex + 4].subtitle }}
            </p>
          </div>
        </div>
      </div>
      <!-- end recent posts -->

      <!-- popular posts -->
      <div class="flex mt-12 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Popular articles</h2>
        <a
          class="bg-gray-200 hover:bg-orange-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >
          View all
        </a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6 mb-12">
        <div v-for="popularIndex in ((datas.length - 8) > 3 ? 3 : (datas.length - 8))" :key="popularIndex" class="rounded w-full lg:w-1/2 p-4 lg:p-0">
          <img
            :alt="datas[popularIndex + 7].title"
            :src="datas[popularIndex + 7].imageUrl"
            class="rounded h-56 w-full"
          />
          <div class="p-4 pl-0">
            <nuxt-link
              :to="'/blog/detail/' + datas[popularIndex + 4].businessId"
              class="font-bold text-2xl text-gray-800 hover:text-orange-500">
              {{ datas[popularIndex + 7].title }}
            </nuxt-link>
            <p class="text-gray-700 mt-2">
              {{ datas[popularIndex + 7].subtitle }}
            </p>
          </div>
        </div>
      </div>
      <!-- end popular posts -->
    </div>
    <!-- main ends here -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from '~/assets/request'

export default defineComponent({
  name: 'Article',

  props: {
    datas: Array
  }
})
</script>