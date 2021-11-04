<template>
    <LayoutAbout>
        <div class="relative">
            <div
                class="border-r border-dotted border-gray-500 absolute h-full top-3"
                style="left: 0.3725rem"
            ></div>
            <div class="mb-2">
                <div class="flex items-center mb-1">
                    <span class="bg-gray-500 rounded-full h-3 w-3"></span>
                    <span class="flex-1 ml-4 font-medium">2021-09-18</span>
                </div>
                <ol class="ml-12">
                    <li>resource 样式问题修改；</li>
                    <li>列表添加评论图标即评论数的显示；</li>
                    <li>详情添加tags的展示；</li>
                </ol>
            </div>
            <div class="mb-2">
                <div class="flex items-center mb-1">
                    <span class="bg-gray-500 rounded-full h-3 w-3"></span>
                    <span class="flex-1 ml-4 font-medium">2021-09-11</span>
                </div>
                <ol class="ml-12">
                    <li>更新 mobile-menu 为抽屉；</li>
                </ol>
            </div>
            <div class="mb-2">
                <div class="flex items-center mb-1">
                    <span class="bg-gray-500 rounded-full h-3 w-3"></span>
                    <span class="flex-1 ml-4 font-medium">2021-08-21</span>
                </div>
                <ol class="ml-12">
                    <li>添加@tailwindcss/aspect-ratio插件；</li>
                    <li>页面样式优化，更好是配大小页面；</li>
                </ol>
            </div>
            <div class="mb-2">
                <div class="flex items-center mb-1">
                    <span class="bg-gray-500 rounded-full h-3 w-3"></span>
                    <span class="flex-1 ml-4 font-medium">2021-08-19</span>
                </div>
                <ol class="ml-12">
                    <li>更新依赖；</li>
                    <li>使用@nuxt/image优化图片加载；</li>
                </ol>
            </div>
            <div class="mb-2">
                <div class="flex items-center mb-1">
                    <span class="bg-gray-500 rounded-full h-3 w-3"></span>
                    <span class="flex-1 ml-4 font-medium">2021-07-20</span>
                </div>
                <ol class="ml-12">
                    <li>配置resource页；</li>
                    <li>移除详情页的recentDatas组件；</li>
                    <li>子组件emit问题修改；</li>
                </ol>
            </div>
        </div>
    </LayoutAbout>
</template>

<script lang="ts">
export default {
    layout: "default",
};
</script>