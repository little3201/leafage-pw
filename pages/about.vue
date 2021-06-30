<template>
  <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
    <div class="border-t border-black"></div>
    <div class="grid grid-cols-4 gap-4 divide-x divide-gray-300 my-8">
      <div class="col-span-1 px-2 md:px-4 lg:px-8">
        <ul class="divide-y divide-gray-300 text-center py-8">
          <li class="py-4"><a href="#me">关于本人</a></li>
          <li class="py-4"><a href="#website">关于本站</a></li>
          <li class="py-4">
            <a class="font-bold" href="#website">更新日志</a>
          </li>
        </ul>
      </div>
      <div class="col-span-3">
        <article class="prose-sm md:prose mx-auto px-2 md:px-4 lg:px-0">
          <div id="me">
            <h2>关于本人</h2>
            <p>
              嗨，感谢使用本网站，很少写自我介绍，每每提笔，却不知从何说起。
            </p>
            <p>
              一个93年出生的普普通通的陕西人，兴趣众多，爱好广泛，一个Java程序员，也能搞搞前端页面，
              学过一段时间的python和go，但是还没有实战的项目，慢慢会做一些工具出来分享...
            </p>
            <p>
              我呢，目前居住在西安，这个各种小吃美食的“人间天堂”，哈哈，这么说好像有点夸大了，
              但是真的很多好吃的，还有很多可以玩的好地方。
            </p>
          </div>
          <div id="website" class="my-8">
            <h2>关于本站</h2>
            <p>
              说起来是从18年开始有了这个想法———做一个自己的网站，风格清新，内容新颖，干货满满。我是一个后端开发，想要一个界面美观、
              布局合理的网站可是不容易，于是开始动手，网站先后改版、重构了四五次了，最终呈现现在这个结果，还算满意。
            </p>
            <p class="my-2">
              在这个漫长的折腾的过程中，用过element-ui、ant-design-vue、iview(viewui)、vuetify等组件库，试过整屏翻页，
              模仿过轻芒杂志，也试过vuetify的免费模版，但是这些组件库都很重，最终选择了tailwindcss，seo优化选择了nuxtjs来做。
            </p>
            <p>
              与此对应的还有<a
                href="https://console.leafage.top"
                target="_blank"
                rel="noopener"
                >后台管理</a
              >开发，
              也全面改用tailwindcss来做，顺势而为选择了vue3进行重构，更多功能还在持续优化和完善中，敬请期待。
            </p>
          </div>
        </article>
        <ChangeLog />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "About",
  head: {},

  setup() {
    useMeta(() => ({
      title: "About - Leafage",
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
  },
});
</script>