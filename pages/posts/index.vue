<template>
  <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <ul class="flex text-xs border border-black overflow-x-scroll">
      <li
        class="hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': '' == category }"
      >
        <button
          aria-label="posts_all"
          type="button"
          @click="retrieve(0, '')"
          class="w-32 h-10 font-bold uppercase focus:outline-none"
        >All</button>
      </li>
      <li
        class="hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': cg.code == category }"
        v-for="cg in categories"
        :key="cg.code"
      >
        <button
          :aria-label="'posts_' + cg.alias"
          type="button"
          @click="retrieve(0, cg.code)"
          class="w-32 h-10 font-bold uppercase focus:outline-none"
          v-text="cg.alias"
        ></button>
      </li>
    </ul>
    <PostsList :datas="datas" />
    <Pagation :page="page" :size="size" :total="total" @retrieve="retrieve" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
  useRoute
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Posts",

  head: {},

  setup() {
    const { $axios } = useContext();
    const route = useRoute();

    // cotegory code
    const category = ref(route.value.params.category || '');

    const categories = ref([]);
    const datas = ref([]);

    // 分页参数
    const page = ref(0);
    const size = ref(12);
    const total = ref(0);

    useFetch(async () => {
      [categories.value, datas.value, total.value] = await Promise.all([
        $axios.$get(SERVER_URL.category),
        $axios.$get(
          SERVER_URL.posts, { params: { page: page.value, size: size.value, category: category.value } }),
        $axios.$get(SERVER_URL.posts.concat("/count")),
      ]);
    });

    useMeta(() => ({
      title: "Posts - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    }));

    const retrieve = async (num: number, code: string) => {
      page.value = num;
      category.value = code;
      [datas.value, total.value] = await Promise.all([
        $axios.$get(SERVER_URL.posts, { params: { page: page.value, size: size.value, category: category.value } }),
        $axios.$get(SERVER_URL.posts.concat("/count"))])
    };

    return {
      categories,
      datas,
      category,

      page,
      size,
      total,

      retrieve,
    };
  },
});
</script>