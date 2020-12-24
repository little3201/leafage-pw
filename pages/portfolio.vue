<template>
  <div>
    <Header />
    <section class="container mx-auto mb-12">
      <div class="grid grid-flow-row grid-cols-3 gap-4">
        <div class="">
          <img v-for="index in times" :key="index"  :src="data.url" :alt="datas.title" class="w-full mb-4" />
        </div>
        <div>
          <img v-for="(data, index) in datas" :key="index"  :src="data.url" :alt="datas.title" class="w-full mb-4" />
        </div>
        <div>
          <img v-for="(data, index) in datas" :key="index"  :src="data.url" :alt="datas.title" class="w-full mb-4" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request"

export default defineComponent({
  name: "Portfolio",

  head() {
    const title = "Portfolio - Abeille | 布吉岛";
    const description = "作品集分享";
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

  async asyncData({ app: { $axios } }) {
    const datas = await $axios.$get(SERVER_URL.portfolio.concat('?page=0&size=10'));
    return { datas };
  },
});
</script>