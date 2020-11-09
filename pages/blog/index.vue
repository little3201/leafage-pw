<template>
<!-- This is an example component -->
<section class="flex flex-row flex-wrap container mx-auto">
<!-- Card Component -->
  <div v-for="(data, index) in datas" :key="index" 
    class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/3 lg:w-1/4"
  >
    <div
      class="flex flex-col items-stretch justify-center min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl w-full"
    >
      <div class="md:flex-shrink-0">
        <img
          :src="data.imageUrl"
          :alt="data.title"
          class="object-fill w-full rounded-lg rounded-b-none md:h-48"
        />
      </div>
      <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
        <span class="text-xs font-medium text-orange-600">
          Technology
        </span>
        <div class="flex flex-row items-center">
          <div
            class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            <span>1.5k</span>
          </div>

          <div
            class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
            <span>25</span>
          </div>

          <div
            class="text-xs font-medium text-gray-500 flex flex-row items-center"
          >
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
            <span>7</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
        <nuxt-link :to="'/blog/detail/' + data.businessId" class="font-bold tracking-normal text-gray-800 hover:text-orange-500">
            {{ data.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from '~/assets/request'

export default defineComponent({
  name: 'BLog',

  head () {
    const title = 'Blog - Abeille | 布吉岛'
    const description = 'Blog of Abeille'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  },
  
  async asyncData ({ app: { $axios } }) {
    const datas = await $axios.$get(SERVER_URL.article)
    return { datas }
  }
})
</script>