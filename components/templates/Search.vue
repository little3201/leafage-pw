<template>
  <div class="fixed bg-black bg-opacity-80 top-0 right-0 w-full h-full z-10">
    <form
      class="conatiner mx-auto px-8 md:px-20 lg:px-40 xl:px-56"
      @submit.prevent="onSubmit"
    >
      <div class="flex justify-center items-center mt-48 w-full">
        <input
          type="text"
          v-model="keyword"
          placeholder="Enter The Keywords"
          class="py-2 px-4 w-full -ml-4 focus:outline-none rounded-full"
        />
        <button
          type="submit"
          aria-label="search"
          class="-ml-10 focus:outline-none"
        >
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
      title="search"
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
    <ul
      class="conatiner mx-auto px-8 md:px-20 lg:px-40 xl:px-56 divide-y divide-gray-300 mt-2 h-72 overflow-auto"
    >
      <li
        v-for="data in datas"
        :key="data.code"
        class="flex items-center bg-gray-50"
      >
        <nuxt-link
          @click.prevent="closeSearch"
          :title="data.title"
          class="py-2 px-4"
          :to="'/posts/detail/' + data.code"
          v-text="data.title"
        >
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Header",

  data() {
    return {
      keyword: "",
      datas: [],
    };
  },

  methods: {
    closeSearch() {
      this.$emit("searchOption", false);
    },
    onSubmit() {
      this.$axios
        .get(SERVER_URL.posts.concat("/search?keyword=", this.keyword))
        .then((res) => {
          this.datas = res.data;
        });
    },
  },
});
</script>