<template>
    <LayoutAbout>
        <p>
            项目中的接口可以直接替换为自己的服务接口，后端服务：
            <a
                href="https://github.com/little3201/leafage-basic"
                target="_blank"
            >leafage-basic</a>，希望大家使用本项目的同时也能一起学习，分享。另外有一个
            <a
                href="https://console.leafage.top"
                target="_blank"
            >后台管理</a>系统。
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
            <NuxtLink to="/about/record">更新日志</NuxtLink>。
        </p>
        <p>后面也会继续更新和完善，另外可能也会做一些其他的东西出来，比如小程序呀，或者app，一点点做吧。Fighing！！！</p>
    </LayoutAbout>
</template>

<script lang="ts">
export default {
    layout: "default",
};
</script>