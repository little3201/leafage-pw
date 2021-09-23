<template>
    <div>
        <p>一个使用 Nuxt.js、 Tailwindcss 的博客网站，项目创建之初是为了做一个个人博客，因为看过 wordpress，gihub pages 等一些开源的博客工具创建网站有很多的不便，而且模板没有特别喜欢的，那作为一个程序猿，自己做一个岂不是一举多得嘛。</p>
        <p>说起来是从 2018 年开始有了这个想法———做一个自己的网站，风格清新，内容新颖，干货满满。我是一个后端开发，想要一个界面美观、布局合理的网站可是不容易，于是开始动手，网站先后改版、重构了四五次了，最终呈现现在这个结果，还算满意。</p>
        <blockquote>
            <p>项目历经好几次改版，虽然过程很折腾，但是也明白和体会了很多，对于一些技术点理接更深了，在这个漫长的折腾的过程中，用过element-ui、ant-design-vue、iview(viewui)、vuetify等组件库，试过整屏翻页，模仿过轻芒杂志，也试过vuetify的免费模版，但是这些组件库都很重，最终选择了tailwindcss，seo优化选择了nuxtjs来做。</p>
        </blockquote>
        <p>
            项目中的接口可以直接替换为自己的服务接口，后端服务：
            <a
                href="https://github.com/little3201/leafage-basic"
                target="_blank"
            >leafage-basic</a>，希望大家使用本项目的同时也能一起学习，分享。另外有一个
            <a href="https://console.leafage.top" target="_blank">后台管理</a>系统。
        </p>
        <ol>
            <span class="font-semibold text-lg">本站使用到的一些技术、工具主要有：</span>
            <li>@nuxt/sitemap —— 自生成sitemap</li>
            <li>@nuxt/image —— 图片加载优化</li>
            <li>@tailwindcss/typography —— 排版优化</li>
            <li>@tailwindcss/aspect-ratio —— 图片排版优化</li>
            <li>markdown-it/hightlight.js —— markdown解析，代码高亮</li>
        </ol>
        <p class="font-semibold">
            近期更新请查看
            <nuxt-link to="/about/record">更新日志</nuxt-link>。
        </p>
        <p>后面也会继续更新和完善，另外可能也会做一些其他的东西出来，比如小程序呀，或者app，一点点做吧。Fighing！！！</p>
    </div>
</template>