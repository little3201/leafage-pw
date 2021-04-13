<template>
  <section class="bg-gray-100">
    <div class="container mx-auto">
      <div class="py-20">
        <div class="md:flex">
          <div class="w-full md:w-2/5 md:ml-20 md:mt-12">
            <img
              src="https://cdn.leafage.top/man-6122484.jpg"
              alt="leafage about"
              class="rounded-full"
            />
            <!--about-img end-->
          </div>
          <div class="w-full md:w-3/5">
            <article class="leading-relaxed prose-sm md:prose min-w-full">
              <h2>About Me</h2>
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
              <div class="md:ml-20 my-20">
                <h2>About the website</h2>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "About",

  head() {
    const title = "About - Leafage";
    const description =
      "Leafage 是一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的专业开发社区";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
        },
      ],
    };
  },
});
</script>