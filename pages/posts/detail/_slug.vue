<template>
  <div
    class="flex justify-between space-x-8 border-t border-black dark:border-white dark:text-white"
  >
    <div class="my-6">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold" v-text="data.title"></h2>
      <div class="md:flex text-sm my-4">
        <span :title="data.category">{{ data.category }}</span>
        <span class="tracking-wider mx-6">{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
        <div class="my-4 md:my-0 md:flex space-x-6">
          <div class="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-eye mr-1"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {{ data.viewed }}
          </div>
          <div class="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-message-square mr-1"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {{ data.comment }}
          </div>
          <div class="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
              />
            </svg>
            {{ data.likes }}
          </div>
        </div>
      </div>
      <div class="inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-tag mr-2"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        <span v-for="(tag, index) in data.tags" :key="index" class="text-sm">
          {{ tag }}
          <span class="mr-2" v-if="index < data.tags.length - 1">,</span>
        </span>
      </div>
      <figure v-show="data.cover" class="my-4">
        <img
          :src="data.cover"
          :alt="data.title"
          class="w-full h-full my-4"
          width="640"
          height="392"
        />
      </figure>
      <article
        class="prose prose-sm sm:prose lg:prose-lg max-w-none dark:text-gray-300 dark:prose-blue"
        v-html="rendered"
      ></article>
      <div class="bg-gray-100 dark:bg-gray-600 my-8 p-6">
        <ul
          class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-sm font-bold"
        >
          <li>
            <NuxtLink
              :title="previous.code"
              :to="'/posts/detail/' + previous.code"
              class="flex items-center transform hover:-translate-x-2 transition duration-500"
            >
              <svg
                v-show="previous"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {{ previous.title }}
            </NuxtLink>
          </li>
          <li class="flex items-center justify-end">
            <NuxtLink
              :title="next.code"
              :to="'/posts/detail/' + next.code"
              class="flex items-center transform hover:translate-x-2 transition duration-500"
            >
              {{ next.title }}
              <svg
                v-show="next"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <Comment v-for="comment in comments" :key="comment.code" :data="comment" />
    </div>
    <LazyAside class="my-8" />
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";
import markdown from "~/plugins/markdown";

export default {
  name: "Slug",

  scrollToTop: true,

  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.subtitle,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.data.tags,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.leafage.top/posts/detail/" + this.data.code,
        },
      ],
    }
  },

  async asyncData({ $axios, params }) {
    let [data, previous, next, comments] = await Promise.all([
      // detail
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/details")),
      // previous
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/previous")),
      // next
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/next")),
      // comments
      $axios.$get(SERVER_URL.comment.concat("/", params.slug)),
    ])

    let rendered = markdown.render(data.content);

    return { data, previous, next, comments, rendered }
  }
}
</script>
