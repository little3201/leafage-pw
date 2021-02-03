<template>
  <section class="container mx-auto">
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <TopThree />
        <div class="mb-12">
          <ul
            class="flex justify-between items-center text-center border border-black"
            id="myTab"
            role="tablist"
          >
            <li class="bg-black text-white w-1/3">
              <button
                @click="retrieve('likes')"
                class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
              >
                Trending
              </button>
            </li>
            <li class="w-1/3 hover:bg-black hover:text-white">
              <button
                @click="retrieve('viewed')"
                class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
              >
                Most View
              </button>
            </li>
            <li class="w-1/3 hover:bg-black hover:text-white">
              <button
                @click="retrieve('comment')"
                class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
              >
                Popular
              </button>
            </li>
          </ul>
          <ListItem />
        </div>
        <Pagation />
      </div>
      <SiderBar />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Content",

  async fetch() {
    await this.retrieve("viewed");
  },

  data() {
    return {
      datas: [],
    };
  },

  methods: {
    retrieve(order: string) {
      this.$axios
        .get(SERVER_URL.posts.concat("?page=0&size=5&order=", order))
        .then((res) => {
          this.datas = res.data;
        });
    },
  },
});
</script>