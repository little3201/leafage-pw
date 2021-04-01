<template>
  <section class="container mx-auto max-w-7xl">
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <TopPosts :datas="topDatas" />
        <ul
          class="flex justify-between items-center text-center border border-black"
        >
          <li
            class="w-1/3 hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': order == 'likes' }"
          >
            <button
              type="button"
              @click="retrieve(0, 'likes')"
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
              type="button"
              @click="retrieve(0, 'viewed')"
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
              @click="retrieve(0, 'comment')"
              class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
            >
              Popular
            </button>
          </li>
        </ul>
        <ListItem :datas="datas" />
        <Pagation @retrieve="retrieve" />
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
  },

  data() {
    return {
      datas: this.listDatas,
      page: 0,
      order: "likes",
    };
  },

  methods: {
    retrieve(page: number, order: string) {
      this.page = page ? page : 0;
      this.order = order ? order : "likes";
      this.listPosts();
    },
    listPosts() {
      this.$axios
        .get(
          SERVER_URL.posts.concat(
            "?page=" + this.page,
            "&size=10&order=",
            this.order
          )
        )
        .then((res) => (this.datas = res.data));
    },
  },
});
</script>