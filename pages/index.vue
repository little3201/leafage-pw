<template>
  <div>
    <Header2 />
    <Main />
    <Featured />
    <Posts />
    <Recommend />
    <Footer />
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
      "在这个世界的某一个小角落，有一个人想分享自己的生活、学习中一些值得点点滴滴，TA叫布吉岛";
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

  // async asyncData({ app: { $axios } }) {
  //   const datas = await $axios.$get(SERVER_URL.posts);
  //   return { datas };
  // },
});
</script>
