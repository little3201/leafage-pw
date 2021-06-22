<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <ul class="flex text-xs border border-black">
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': category == '' }"
      >
        <button
          aria-label="posts_all"
          type="button"
          @click="(category = ''), $fetch(), (page = 0)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
        >
          All
        </button>
      </li>
      <li
        class="w-32 hover:bg-black hover:text-white"
        :class="{ 'bg-black text-white': category == cg.alias }"
        v-for="(cg, index) in categories"
        :key="index"
      >
        <button
          :aria-label="'posts_' + cg.alias"
          type="button"
          @click="(category = cg.code), $fetch(), (page = 0)"
          class="w-full h-10 font-bold uppercase focus:outline-none"
          v-text="cg.alias"
        ></button>
      </li>
    </ul>
    <PostsList :datas="datas" />
    <Pagation :page="page" :total="total" @retrieve="retrieve" />
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
  useRoute,
  computed,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Posts",

  head: {},

  setup() {
    const route = useRoute();
    // 获取路由参数
    const category = computed(() => {
      route.value.query.category;
    });
    // 匹配类目code
    const code = computed(() => {
      let data: any = categories.value.filter(
        (item: any) => category.value == item.alias
      );
      return data.code ? data.code : "";
    });

    const categories = ref([]);
    const datas = ref([]);

    // 分页参数
    const page = ref(0);
    const total = ref(0);

    const { $axios } = useContext();

    useFetch(async () => {
      [categories.value, datas.value, total.value] = await Promise.all([
        $axios.$get(SERVER_URL.category),
        $axios.$get(
          SERVER_URL.posts.concat(
            "?page=" + page.value,
            "&size=12&category=" + code.value
          )
        ),
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

    const retrieve = (num: number) => {
      page.value = num;
    };

    return {
      category,
      categories,
      datas,

      page,
      total,

      retrieve,
    };
  },
});
</script>