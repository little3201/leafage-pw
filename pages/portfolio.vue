<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      <figure v-for="(data, index) in datas" :key="index" class="w-full relative">
        <nuxt-picture
          v-if="imgType.includes(data.type)"
          :src="data.url[0]"
          :alt="data.title"
          width="640"
          height="256"
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
        <div class="absolute top-4 left-4">
          <h3 class="text-white" v-text="data.title"></h3>
        </div>
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
  useMeta,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "Portfolio",

  scrollToTop: true,
  head: {},
  setup() {
    const imgType = ref(["png", "jpeg", "jpg", "svg", "webp"]);
    const vedioType = ref([
      "mov",
      "avi",
      "flv",
      "m4v",
      "rm",
      "rmvb",
      "wmv",
      "mp4",
    ]);
    const datas = ref<Array<Number>>();
    const { $axios } = useContext();

    useFetch(async () => {
      datas.value = await $axios.$get(
        SERVER_URL.portfolio.concat("?page=0&size=12")
      );
    });

    useMeta(() => ({
      title: "Portfolio - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage的作品集，包含影视资源等信息，提供原创、优质、完整内容",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "leafage, 生活分享, 资源推荐, 技术总结, 影视浏览",
        },
      ],
    }));

    return { imgType, vedioType, datas };
  },
});
</script>

<style scoped>
.column_div {
  column-count: 5;
  column-gap: 15px;
}
@media (max-width: 1200px) {
  .column_div {
    column-count: 4;
  }
}
@media (max-width: 769px) {
  .column_div {
    column-count: 3;
  }
}
@media (max-width: 376px) {
  .column_div {
    column-count: 2;
  }
}
</style>