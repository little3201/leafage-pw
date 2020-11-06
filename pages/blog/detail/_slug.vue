<template>
  <article>
    <div
      id="slug"
      class="bg-opacity-50 bg-black flex items-center justify-center"
      :style="{
        'background-image': 'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)',
        'height':'24em',
      }"
    >
      <div class="text-center md:max-w-6xl xl:max-w-screen-xl">
        <a
          href="#"
          class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >Nutrition</a
        >
        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
          Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
          massa et auctor.
        </h2>
        <div class="flex mt-3">
          <img
            src="https://randomuser.me/api/portraits/men/97.jpg"
            class="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p class="font-semibold text-gray-200 text-sm">Mike Sullivan</p>
            <p class="font-semibold text-gray-400 text-xs">14 Aug</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-12 text-gray-700 max-w-screen-xl mx-auto text-lg leading-relaxed"
    >
      <p class="pb-6" v-text="data.content" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from '~/assets/request'

export default defineComponent({
  name: 'Slug',

  async asyncData ({ app: { $axios, params } }) {
    const data = await $axios.$get(SERVER_URL.article.concat('/').concat(params.value.slug))
    return { data }
  },

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
  }
})
</script>