<template>
  <article class="container mx-auto mt-8">
    <div class="mb-4 md:mb-0 w-full mx-auto relative">
      <div class="px-4 lg:px-0">
        <h2
          class="text-4xl font-semibold text-gray-800 leading-tight"
          v-text="data.title"
        ></h2>
        <a
          href="#"
          class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
        >
          Cryptocurrency
        </a>
      </div>

      <img
        :src="data.cover"
        :alt="data.title"
        class="w-full object-cover lg:rounded"
        style="height: 28em"
      />
    </div>

    <div class="flex flex-col lg:flex-row lg:space-x-12">
      <div
        class="px-4 sm:px-6 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4"
      >
        <p class="" v-html="data.content"></p>
      </div>

      <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
        <div class="p-4 border-t border-b md:border md:rounded">
          <div class="flex py-2">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p class="font-semibold text-gray-700 text-sm">布吉岛</p>
              <p class="font-semibold text-gray-600 text-xs">作者</p>
            </div>
          </div>
          <p class="text-gray-700 py-3">
            还没有想好写啥.
          </p>
          <button
            class="px-2 py-1 text-gray-100 bg-blue-500 flex w-full items-center justify-center rounded"
          >
            Follow
            <i class="bx bx-user-plus ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Slug",

  head() {
    const title = "Blog - Abeille | 布吉岛";
    const description = "Blog of Abeille";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        // Twitter Card
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },

  async asyncData({ app: { $axios }, route }) {
    const data = await $axios.$get(
      SERVER_URL.posts.concat("/").concat(route.params.slug)
    );
    return { data };
  },
});
</script>