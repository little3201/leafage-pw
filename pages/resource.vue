<template>
  <div>
    <Head :lang="'en'">
      <Title>Leafage - Resource</Title>
    </Head>
    <div
      class="flex justify-between items-center border border-black dark:border-white dark:text-white overflow-x-auto"
    >
      <button
        title="all"
        aria-label="all"
        type="button"
        @click="chageParams(0, '')"
        class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        :class="{ 'bg-black text-white dark:bg-white dark:text-black': category == '' }"
      >All</button>
      <button
        v-for="cate in categories"
        :title="cate.alias"
        :aria-label="cate.alias"
        type="button"
        @click="chageParams(0, cate.alias)"
        class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        :class="{ 'bg-black text-white dark:bg-white dark:text-black': category == cate.alias }"
      >{{ cate.alias }}</button>
    </div>
    <div
      class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
    >
      <NuxtLink
        v-for="data in datas"
        :key="data.code"
        :to="'/posts/detail/' + data.code"
        class="w-full group"
      >
        <div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border">
          <img
            :src="data.url[0]"
            alt="images"
            class="w-full h-full object-center filter grayscale group-hover:opacity-75"
            height="100%"
            width="100%"
          />
        </div>
        <p
          class="my-3 text-lg font-bold text-gray-800 dark:text-gray-300 group-hover:underline"
        >{{ data.title }}</p>
        <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
          <div>
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
            <div class="inline-flex items-center mx-4">
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
                class="feather feather-download-cloud mr-1"
              >
                <polyline points="8 17 12 21 16 17" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
              </svg>
              {{ data.downloads }}
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Pagation class="my-8" :page="page" :size="size" :total="total" @retrieve="chageParams" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
  useMeta,
  useRoute
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Resource",
  head: {},

  setup() {
    const datas = ref([]);

    const categories = ref([]);

    const route = useRoute();
    const category = ref(route.value.params.category || '');

    const page = ref(0);
    const size = ref(10);
    const total = ref(0);

    const { $axios } = useContext();

    const chageParams = async (num: number, code: string) => {
      page.value = num ? num : 0;
      category.value = code;
    }

    useFetch(async () => {
      [categories.value, datas.value, total.value] = await Promise.all([
        $axios.$get(SERVER_URL.category),
        await $axios.$get(SERVER_URL.resource, { params: { page: 0, size: 12 }, }),
        $axios.$get(SERVER_URL.posts.concat("/count")),
      ]);
    });

    useMeta(() => ({
      title: "Resource - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js, markdown, highlight",
        },
      ],
    }));

    return { datas, categories, category, page, size, total, chageParams };
  },
});
</script>