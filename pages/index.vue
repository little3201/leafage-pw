<template>
  <div id="home">
    <Popular />
    <Featured />
    <Content />
    <Recommend />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Home",

  head() {
    const title = "Abeille-布吉岛，一座永不沉没的网络小岛";
    const description =
      "布吉岛，一座永不沉没的网络小岛";
    return {
      title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "abeille, 布吉岛, 学习, 生活, 旅行",
        },
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
    return {  };
  },
});
</script>
