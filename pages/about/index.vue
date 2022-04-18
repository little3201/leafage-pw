<template>
    <div>
        <p>
            项目中的接口可以直接替换为自己的服务接口，后端服务：
            <a href="https://github.com/little3201/leafage-basic" target="_blank"
                rel=noopener>leafage-basic</a>，希望大家使用本项目的同时也能一起学习，分享。另外有一个
            <a href="https://console.leafage.top" target="_blank" rel=noopener>后台管理</a> 系统。
        </p>
        <p class="text-base">
            项目开发秉持整洁、高质量、规范的代码，尽可能的减少代码来实现功能；项目所有样式设置均直接使用 tailwindcss 直接在标签上进性设置，
            但尽可能在布局上（页边距、颜色、边框、字体等）采用一致的设置；
        </p>
        <span class="font-semibold text-lg">本站使用到的一些技术、工具主要有：</span>
        <ol>
            <li>nuxt —— 开发框架；</li>
            <li>tailwindcss(plugins: typography、aspect-ratio) —— 样式、排版优化、图片比例；</li>
            <li>marked.js(plugins: marked-extended-tables) —— markdown解析、表格支持；</li>
            <li>hightlight.js —— 代码高亮（使用ir-black）；</li>
            <li>vue-gtag-next —— google tag manager；</li>
        </ol>
        <p class="font-semibold">
            近期更新请查看
            <NuxtLink title="更新日志" to="/about/record">更新日志</NuxtLink>。
        </p>
    </div>
</template>