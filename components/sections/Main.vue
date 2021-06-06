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
              Trending
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
              Most View
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
              Popular
            </button>
          </li>
        </ul>
        <ListItem :datas="datas" />
        <Pagation :total="total" @retrieve="retrieve" />
      </div>
      <SideBar />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

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

  data() {
    return {
      datas: this.listDatas,
      page: 0,
      order: "likes",
    };
  },

  methods: {
    retrieve(page: number) {
      this.page = page ? page : 0;
      this.$axios
        .get(
          SERVER_URL.posts.concat(
            "?page=" + this.page,
            "&size=10&order=",
            this.order
          )
        )
        .then((res) => {
          this.datas = res.data;
        });
    },
  },
});
</script>