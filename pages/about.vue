<template>
  <section class="bg-gray-100">
    <div class="container mx-auto">
      <div class="py-20">
        <div class="md:flex">
          <div class="w-full md:w-2/5">
            <div class="about-img">
              <img src="/images/resources/about-img.png" alt="leafage-pw about" />
            </div>
            <!--about-img end-->
          </div>
          <div class="w-full md:w-3/5">
            <div class="leading-relaxed">
              <h2 class="text-4xl font-extrabold my-4">About Me</h2>
              <p>
                嗨，感谢使用本网站，很少写自我介绍，每每提笔，却不知从何说起。
              </p>
              <p class="my-2">
                一个93年出生的普普通通的陕西人，兴趣众多，爱好广泛，一个Java程序员，也能搞搞前端页面，
                学过一段时间的python和go，但是还没有实战的项目，慢慢会做一些工具出来分享...
              </p>
              <p>
                我呢，目前居住在西安，这个各种小吃美食的“人间天堂”，哈哈，这么说好像有点夸大了，
                但是真的很多好吃的，还有很多可以玩的好地方。
              </p>
              <div class="md:ml-24 my-20">
                <h3 class="text-xl font-extrabold my-4">About the website</h3>
                <p>
                  说起来是从18年开始有了这个想法———做一个自己的网站，风格清新，内容新颖，干货满满。我是一个后端开发，想要一个界面美观、
                  布局合理的网站可是不容易，于是开始动手，网站先后改版、重构了四五次了，最终呈现现在这个结果，还算满意。
                </p>
                <p class="my-2">
                  在这个漫长的折腾的过程中，用过element-ui、ant-design-vue、iview(viewui)、vuetify等组件库，试过整屏翻页，
                  模仿过轻芒杂志，也试过vuetify的免费模版，但是这些组件库都很重，最终选择了tailwindcss，seo优化选择了nuxtjs来做。
                </p>
                <p>
                  与此对应的还有<a class="text-gray-600" href="https://console.abeille.top" target="_blank">后台管理</a>开发，
                  也全面改用tailwindcss来做，顺势而为选择了vue3进行重构，更多功能还在持续优化和完善中，敬请期待。
                </p>
                <ul class="social-links">
                  <li>
                    <a href="#" title=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-pinterest-p"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""
                      ><i class="fab fa-facebook-messenger"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
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
    const title = "About - Leafage | 布吉岛";
    const description = "关于布吉岛，关于我，布吉岛是一个Java程序员，对网站有疑问或意见的可以联系我进行优化修改";
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
});
</script>