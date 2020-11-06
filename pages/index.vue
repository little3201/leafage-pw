<template>
  <div>
    <Hero />
    <Lesson />
    <Travels />
    <Reading />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Home",

  head() {
    const title = "Abeille-布吉岛，一座永不沉没的网络小岛";
    const description =
      "一套完整的免费、开源的集博客、作品集、可视化等一体的前、后端服务产品。基于 Vue.js 精心制作的页面、Nuxt.js 加持的SEO优化，同时提供后端运营和基于JAVA开发的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！";
    return {
      title,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "abeille, 布吉岛, 博客, 文章, 照片墙, abeille.top, vue.js, vuetify, nuxt.js",
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
  }
});
</script>
