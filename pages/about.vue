<template>
  <section class="bg-gray-100">
    <div class="container mx-auto">
      <div class="py-20">
        <div class="flex">
          <div class="w-2/5">
            <div class="about-img">
              <img src="/images/resources/about-img.png" alt="abeille about" />
            </div>
            <!--about-img end-->
          </div>
          <div class="w-3/5">
            <div class="leading-relaxed">
              <h2 class="text-4xl font-extrabold my-4">About Me</h2>
              <p>
                嗨，感谢使用本网站，很少写自我介绍，每每提笔，却不知从何说起。
              </p>
              <p class="my-2">
                一个93年出生的普普通通的陕西人，从小不爱说话，性格有些孤僻，所幸随着成长、学习，见识了社会的美好，性格有所改善。
                15年从大学毕业，去了所学专业的相关公司，浑浑噩噩待了一年多，碌碌无为...
              </p>
              <p>
                似乎一切都是命运安排，毕业后的一些经历，可谓福兮祸兮，失去了对美好未来的憧憬，也坚定了努力改变的决心。
              </p>
              <div class="ml-24 my-20">
                <h3 class="text-xl font-extrabold my-4">About the website</h3>
                <p>
                  说起来是从18年开始有了这个想法———做一个自己的网站，风格清新，内容新颖，干货满满。我是一个后端开发，想要一个界面美观、
                  布局合理的网站可是不容易，于是开始动手，网站先后改版、重构了四五次了，最终呈现现在这个结果，还算满意。
                </p>
                <p class="my-2">
                  在这个漫长的折腾的过程中，用过element-ui、ant-design-vue、iview(viewui)、vuetify等组件库，试过整屏翻页，模仿过
                  轻芒杂志，也试过vuetify的免费模版，但是这些组件库都很重，最终选择了tailwindcss，seo优化选择了nuxtjs来做。
                </p>
                <p>
                  与此对应的还有<a class="text-gray-600" href="https://console.abeille.top" target="_blank">后台管理</a>开发，也全面改用tailwindcss来做，顺势而为选择了vue3进行重构，更多功能还在持续优化和完善中，敬请期待。
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
            <!--about-cont end-->
          </div>
        </div>
      </div>
      <!--about-sec end-->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "About",

  head() {
    const title = "About - Abeille | 布吉岛";
    const description = "关于布吉岛，关于我";
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

  async asyncData({ app: { $content } }) {
    const data = await $content("about").fetch();
    return { data };
  },
});
</script>