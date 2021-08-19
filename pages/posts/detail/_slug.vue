<template>
  <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3 mt-12">
      <div class="lg:col-span-2">
        <article v-if="data">
          <div class="flex text-sm font-bold space-x-6 text-gray-600 uppercase mb-4 -mt-3">
            <nuxt-link
              :title="data.category"
              :to="{ path: '/posts', query: { category: data.category } }"
              v-text="data.category"
              class="hover:underline hover:text-black"
            ></nuxt-link>
            <span class="tracking-wider" v-text="new Date(data.modifyTime).toLocaleDateString()"></span>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
            <div class="flex items-center cursor-pointer" @click="like(data.code)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart mr-1 transform hover:scale-150 hover:fill-current transition duration-300"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
              {{ data.likes }}
            </div>
          </div>
          <h2 class="my-3 text-xl md:text-3xl font-extrabold" v-text="data.title"></h2>
          <figure v-show="data.cover" class="w-full h-full my-8">
            <nuxt-picture :src="data.cover" :alt="data.title" width="920" height="612" />
          </figure>
          <div class="prose min-w-full" v-html="rendered"></div>
          <div class="bg-gray-200 my-8 p-8">
            <ul
              class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-xs font-bold"
            >
              <li>
                <nuxt-link
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
                </nuxt-link>
              </li>
              <li class="flex items-center justify-end">
                <nuxt-link
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
                </nuxt-link>
              </li>
            </ul>
          </div>
        </article>
        <Comment :datas="comments" :code="data.code" />
      </div>
      <LazySideBar />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
  computed,
  onMounted,
} from "@nuxtjs/composition-api";

import { SERVER_URL } from "~/api/request";
import markdown from "~/plugins/markdown";

export default defineComponent({
  name: "Slug",

  scrollToTop: true,

  head: {},

  setup() {
    const data = ref();
    const previous = ref();
    const next = ref();
    const comments = ref([]);

    const rendered = computed(() => markdown.render(data.value.content));

    const { $axios, params } = useContext();

    useFetch(async () => {
      [data.value, previous.value, next.value, comments.value] =
        await Promise.all([
          // detail
          $axios.$get(
            SERVER_URL.posts.concat("/", params.value.slug, "/details")
          ),
          // previous
          $axios.$get(
            SERVER_URL.posts.concat("/", params.value.slug, "/previous")
          ),
          // next
          $axios.$get(SERVER_URL.posts.concat("/", params.value.slug, "/next")),
          // comments
          $axios.$get(SERVER_URL.comment.concat("/", params.value.slug)),
        ]);
    });

    //点赞
    const like = async (code: string) => {
      const likes = await $axios.$patch(
        SERVER_URL.posts.concat("/", code, "/like")
      );
      data.value.likes = likes;
    };

    onMounted(() => $axios.$get("/check"));

    useMeta(() => ({
      title: data.value ? data.value.title : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: data.value ? data.value.subtitle : "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: data.value ? data.value.tags : "",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.leafage.top/posts/detail/" + params.value.slug,
        },
      ],
    }));

    return { data, previous, next, rendered, comments, like };
  },
});
</script>
