<template>
  <article>
    <div
      id="slug"
      class="bg-opacity-50 bg-center bg-no-repeat bg-cover flex items-center justify-center md:h-64"
      :style="{
        'background-image': 'url(' + data.imageUrl + '?imageMogr2/auto-orient/thumbnail/!x50p/interlace/1/blur/1x0/quality/100)'
      }"
    >
      <div
        class="w-full flex items-center justify-center md:h-64"
        style="background: rgba(0, 0, 0, 0.5);"
      >
        <div class="text-center container mx-auto">
          <a
            href="#"
            class="px-4 py-1 bg-orange-500 text-black inline-flex items-center justify-center my-4"
            >Technology</a
          >
          <h2 class="md:text-4xl font-semibold text-gray-100 leading-tight" v-text="data.title"/>
          <div class="flex items-center justify-center mt-3">
            <img
              src="@/static/logo.svg"
              class="h-10 w-10 rounded-full mr-2"
              alt="布吉岛"
            />
            <div class="my-4 font-semibold">
              <p class="text-gray-200 text-left" v-text="data.author.nickname ? data.author.nickname : ''" />
              <p class="text-gray-400 text-xs" v-text="data.modifyTime" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-12 text-gray-700 max-w-screen-lg mx-auto leading-relaxed"
    >
      <p class="pb-6 px-4" v-html="data.content" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from '~/assets/request'

export default defineComponent({
  name: 'Slug',

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

  async asyncData ({ app: { $axios }, route }) {
    const data = await $axios.$get(SERVER_URL.article.concat('/').concat(route.params.slug))
    return { data }
  }
})
</script>