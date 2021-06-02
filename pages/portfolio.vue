<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20 my-8">
    <div class="border-t border-black my-8"></div>
    <div class="flex flex-wrap ">
      <div
        v-for="(data, index) in datas"
        :key="index"
        class="flex-auto my-2"
      >
        <img
          v-if="imgType.includes(data.type)"
          :src="data.url[0]"
          class="h-64 object-cover"
          :alt="data.title"
        />
        <video
          id="video"
          controls
          preload="metadata"
          class="h-64 outline-none"
          v-else-if="vedioType.includes(data.type)"
        >
          <source :src="data.url[0]" :type="'video/' + data.type" />
        </video>
        <div class="last-box"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Portfolio",

  scrollToTop: true,

  async asyncData({ app: { $axios } }) {
    let datas = await $axios.$get(
      SERVER_URL.portfolio.concat("?page=0&size=12")
    );
    return { datas };
  },

  data() {
    return {
      imgType: ["png", "jpeg", "jpg", "svg", "webp"],
      vedioType: ["mov", "avi", "flv", "m4v", "rm", "rmvb", "wmv", "mp4"],
    };
  },

  head() {
    const title = "Portfolio - Leafage";
    const description =
      "Leafage的作品集，包含影视资源等信息，提供原创、优质、完整内容";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 生活分享, 资源推荐, 技术总结, 影视浏览",
        },
      ],
    };
  },
});
</script>