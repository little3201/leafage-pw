<template>
  <section class="mb-12">
    <ul class="flex justify-center items-center">
      <li class="mx-4">
        <button
          type="button"
          aria-label="descrease"
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
        <button
          type="button"
          aria-label="give"
          @click="give(index - 1)"
          class="
            w-8
            h-8
            rounded-full
            focus:outline-none
            border border-black
            hover:bg-black
            hover:text-white
          "
          :class="{
            'bg-black text-white ': page == index - 1,
          }"
        >
          {{ index }}
        </button>
      </li>
      <li class="mx-4">
        <button
          type="button"
          aria-label="increment"
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

export default defineComponent({
  name: "Pagation",

  props: {
    total: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      page: 0,
    };
  },

  computed: {
    pages(): number {
      return this.caluatePages();
    },
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
      this.page = page;
      this.$emit("retrieve", page);
    },
    // 计算总页数
    caluatePages() {
      if (this.total < 1) {
        return 1;
      } else if (this.total % 10 > 0) {
        return ~~(this.total / 10) + 1;
      } else {
        return ~~(this.total / 10);
      }
    },
  },
});
</script>