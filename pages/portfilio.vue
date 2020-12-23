<template>
  <div>
    <Header />
    <section class="container mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <img :src="datas[0].url" :alt="datas[0].name" />
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request"

export default defineComponent({
  name: "Portfilio",

  head() {
    const title = "Portfilio - Abeille | 布吉岛";
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
    const datas = await $axios.$get(SERVER_URL.portfilio.concat('?page=0&size=3'));
    return { datas };
  },
});
</script>