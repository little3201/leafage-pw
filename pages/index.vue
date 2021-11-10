<template>
  <div id="home">
    <Hero :datas="recentDatas" />
    <div class="flex justify-between space-x-8 my-8">
      <div class="w-full">
        <div
          class="flex justify-between items-center text-center border border-black dark:border-white dark:text-white overflow-x-auto"
        >
          <button
            title="Most Liked"
            aria-label="Most Liked"
            type="button"
            @click="chageParams(0, 'likes')"
            class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            :class="{ 'bg-black text-white dark:bg-white dark:text-black': order == 'likes' }"
          >Most Liked</button>
          <button
            title="Most Viewed"
            aria-label="Most Viewed"
            type="button"
            @click="chageParams(0, 'viewed')"
            class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            :class="{ 'bg-black text-white dark:bg-white dark:text-black': order == 'viewed' }"
          >Most Viewed</button>
          <button
            type="button"
            title="Most Comments"
            aria-label="Most Comments"
            @click="chageParams(0, 'comment')"
            class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:border-white dark:hover:text-black"
            :class="{ 'bg-black text-white dark:bg-white dark:text-black': order == 'comment' }"
          >Most Comments</button>
        </div>
        <div class="grid grid-cols-2 gap-4 md:gap-8 my-8">
          <Item v-for="data in datas" :key="data.code" :data="data" />
        </div>
        <Pagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
      </div>
      <LazyAside class="hidden lg:block" />
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
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Home",

  head: {},
  scrollToTop: true,

  setup() {
    const recentDatas = ref([]);
    const datas = ref([]);

    const page = ref(0);
    const size = ref(10);
    const total = ref(0);

    const order = ref("likes");

    const { $axios } = useContext();

    const chageParams = async (num: number, category: string) => {
      page.value = num ? num : 0;
      order.value = category
      datas.value = await $axios.$get(
        SERVER_URL.posts, { params: { page: page.value, size: size.value, order: category } }
      );
    };

    useFetch(async () => {
      [recentDatas.value, datas.value, total.value] =
        await Promise.all([
          $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 3 } }),
          $axios.$get(SERVER_URL.posts, {
            params: { page: 0, size: 10, order: "likes" },
          }),
          $axios.$get(SERVER_URL.posts.concat("/count")),
        ]);
    });

    useMeta(() => ({
      title: "Leafage",
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

    return {
      recentDatas,
      datas,
      order,
      page,
      size,
      total,
      chageParams,
    };
  },
});
</script>
