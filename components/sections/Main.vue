<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <TopPosts :datas="topDatas" />
        <ul
          class="
            flex
            justify-between
            items-center
            text-center
            border border-black
          "
        >
          <li
            class="w-1/3 hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': order == 'likes' }"
          >
            <button
              aria-label="trending"
              type="button"
              @click="retrieve(), (order = 'likes')"
              class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
            >
              Most Liked
            </button>
          </li>
          <li
            class="w-1/3 hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': order == 'viewed' }"
          >
            <button
              aria-label="most_view"
              type="button"
              @click="retrieve(), (order = 'viewed')"
              class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
            >
              Most Viewed
            </button>
          </li>
          <li
            class="w-1/3 hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': order == 'comment' }"
          >
            <button
              type="button"
              aria-label="popular"
              @click="retrieve(), (order = 'comment')"
              class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
            >
              Most Comments
            </button>
          </li>
        </ul>
        <ListItem :datas="datas" />
        <Pagation
          :page="page"
          :size="size"
          :total="total"
          @retrieve="retrieve"
        />
      </div>
      <LazySideBar />
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  computed,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Main",

  props: {
    topDatas: {
      type: Array,
      default: [],
    },
    listDatas: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const page = ref(0);
    const size = ref(10);
    const order = ref("likes");
    const { $axios } = useContext();

    const datas = computed(() => props.listDatas);

    const retrieve = async (num: number) => {
      page.value = num ? num : 0;
      props.listDatas = await $axios.$get(
        SERVER_URL.posts.concat(
          "?page=" + page.value,
          "&size=" + size.value,
          "&order=",
          order.value
        )
      );
    };

    return {
      datas,
      page,
      size,
      order,

      retrieve,
    };
  },
});
</script>