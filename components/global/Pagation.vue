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
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Pagation",

  props: {
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const pages = computed(() => {
      if (props.total < 1) {
        return 1;
      } else if (props.total % 10 > 0) {
        return ~~(props.total / 10) + 1;
      } else {
        return ~~(props.total / 10);
      }
    });

    const increment = () => {
      if (props.page < pages.value - 1) {
        give(props.page);
      }
    };
    // 递减
    const decrease = () => {
      if (props.page > 0) {
        give(props.page);
      }
    };
    const give = (num: number) => {
      emit("retrieve", num);
    };

    return {
      increment, decrease
    }
  },

});
</script>