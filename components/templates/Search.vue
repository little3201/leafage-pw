<template>
  <div class="fixed bg-black opacity-75 top-0 right-0 w-full h-full z-10">
    <form class="conatiner mx-auto" @submit.prevent="onSubmit">
      <div class="flex justify-center items-center mt-48 w-full">
        <input
          type="text"
          v-model="search"
          placeholder="Enter Your Keywords"
          class="py-2 px-4 w-1/3 focus:outline-none rounded-full"
        />
        <button type="submit" class="-ml-10 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6d6d6d"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
    <a
      href="javascript:;"
      @click="closeSearch"
      class="absolute mt-2 mr-2 top-0 right-0"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line></svg
    ></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Header",

  data() {
    return {
      search: "",
    };
  },

  methods: {
    closeSearch() {
      this.$emit("searchOption", false);
    },
    onSubmit() {},
  },
});
</script>