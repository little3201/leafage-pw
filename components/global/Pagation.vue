<template>
  <section class="mb-12">
    <ul class="flex justify-center items-center">
      <li class="mx-4">
        <button name="chevron_left"
          @click="decrease"
          class="disabled:opacity-25 focus:outline-none"
        >
          <svg
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
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </li>
      <li class="mx-4" v-for="index in pages" :key="index">
        <button :name="'give' + index"
          @click="give(index - 1)"
          class="w-8 h-8 rounded-full focus:outline-none border border-black hover:bg-black hover:text-white"
          :class="{
            'bg-black text-white ': page == (index - 1),
          }"
        >
          {{ index }}
        </button>
      </li>
      <li class="mx-4">
        <button name="chevron_right"
          @click="increment"
          class="disabled:opacity-25 focus:outline-none"
        >
          <svg
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Pagation",

  async fetch() {
    this.pages = await this.$axios
      .get(SERVER_URL.posts.concat("/count?order=viewed"))
      .then((res) => {
        if (res.data % 10 > 0) {
          return ~~(res.data / 10) + 1;
        }
        return ~~(res.data / 10);
      });
  },

  data() {
    return {
      page: 0,
      pages: 0,
    };
  },

  methods: {
    // 递增
    increment() {
      if (this.page < this.pages - 1) {
        this.page++;
        this.give(this.page);
      }
    },
    // 递减
    decrease() {
      if (this.page > 0) {
        this.page--;
        this.give(this.page);
      }
    },
    give(page: number) {
      this.page = page
      this.$emit("retrieve", page);
    },
  },
});
</script>