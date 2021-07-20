<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-4
        my-8
      "
    >
      <div v-for="data in datas" :key="data.code" class="overflow-hidden border">
        <img
          class="shadow-lg h-64 md:h-80 w-full filter grayscale hover:grayscale-0"
          :src="data.cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Resource",
  head: {},

  setup() {
    const datas = ref([
      {
        code: 1,
        cover:
          "https://tse3-mm.cn.bing.net/th/id/OIP-C.KP2P7ASHdEpX2CS2YmKbnwHaJP?pid=ImgDet&rs=1",
      },
      {
        code: 2,
        cover:
          "https://tse1-mm.cn.bing.net/th/id/R-C.7920e29a890bd5090386623ecbe3d9d3?rik=xbqAQXtkWBSmKQ&riu=http%3a%2f%2fwww.java1234.com%2fuploads%2fallimg%2f180524%2f1-1P524191343c6.jpg&ehk=V%2f5RPj%2bF%2fCzvrUvIP7pbOj5ZZJ4kL9Q5j7RH4D9Lp5g%3d&risl=&pid=ImgRaw",
      },
      {
        code: 3,
        cover:
          "https://cdn.ptpress.cn/pubcloud/bookImg/A20172150/201907036857407C.jpg",
      },
      {
        code: 4,
        cover:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.1_JFX4R2pJE7jGcTxpKJigHaJp?pid=ImgDet&rs=1",
      },
      {
        code: 5,
        cover:
          "https://tse3-mm.cn.bing.net/th/id/OIP-C.EEuAlelhy7QPuxJBWmLzuwHaJp?pid=ImgDet&rs=1",
      },
      {
        code: 6,
        cover: "https://tse1-mm.cn.bing.net/th/id/OIP-C.cRV7JFOmr4XxSDnk_On2xAAAAA?pid=ImgDet&rs=1"
      },
      {
        code: 7,
        cover: "https://static001.infoq.cn/resource/image/47/f6/472a477c1fdcdf7ce050f93b0f4641f6.jpg"
      }
    ]);

    useMeta(() => ({
      title: "Resource - Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage 是一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 生活分享, 资源推荐, 技术总结, 影视浏览, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    }));

    return { datas };
  },
});
</script>