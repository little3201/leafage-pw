<template>
  <div class="fixed bg-black bg-opacity-80 inset-0 w-full h-full z-10">
    <div class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
      <form @submit.prevent="onSubmit">
        <div class="flex justify-center items-center mt-48 w-full">
          <input
            type="text"
            v-model="keyword"
            placeholder="Enter The Keywords"
            class="py-2 md:py-3 px-4 w-full -ml-4 focus:outline-none rounded-md"
            autofocus
          />
          <button type="submit" aria-label="search" class="-ml-10 focus:outline-none">
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
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </form>
      <a
        title="search"
        href="javascript:;"
        @click="$emit('searchOption', false)"
        class="absolute mt-2 mr-2 top-0 right-0"
      >
        <svg
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </a>
      <ul v-if="datas && datas.length > 0" class="divide-y divide-gray-300 mt-2 h-72 overflow-auto">
        <li
          v-for="data in datas"
          :key="data.code"
          @click="closeSearch"
          class="flex items-center bg-gray-50"
        >
          <nuxt-link
            :title="data.title"
            class="py-2 px-4"
            :to="'/posts/detail/' + data.code"
            v-text="data.title"
          ></nuxt-link>
        </li>
      </ul>
      <ul v-else class="mt-2">
        <li class="flex items-center bg-gray-50 h-20 rounded-md">
          <span class="mx-auto">没有找到匹配的结果</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref } from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Header",

  setup() {
    const keyword = ref();
    const datas = ref<Array<Object>>([]);

    const { $axios } = useContext();

    const onSubmit = async () => {
      datas.value = []
      let result = $axios.$get(SERVER_URL.posts.concat("/search?keyword=", keyword.value));
      datas.value.push(result)
    };

    return {
      keyword,
      datas,

      onSubmit,
    };
  },
});
</script>