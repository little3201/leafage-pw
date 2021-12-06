<template>
    <div class="relative text-base">
        <div class="border-r border-dotted border-gray-500 absolute h-full top-4 left-1"></div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium">2021-12-06</span>
            </div>
            <ol class="ml-12">
                <li>代码重构，移除 ts 代码（之前写的 ts 并不规范，且 nuxt.js 2.x 支持不好），改为 js 编写；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium">2021-11-10</span>
            </div>
            <ol class="ml-12">
                <li>精简组件，删除冗余的部分代码，优化组件复用；</li>
                <li>更新整体布局，添加黑色模式；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium">2021-09-18</span>
            </div>
            <ol class="ml-12">
                <li>resource 样式问题修改；</li>
                <li>列表添加评论图标即评论数的显示；</li>
                <li>详情添加 tags 的展示；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium">2021-08-21</span>
            </div>
            <ol class="ml-12">
                <li>添加 @tailwindcss/aspect-ratio 插件；</li>
                <li>页面样式优化，更好适配大小屏页面布局；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium">2021-08-19</span>
            </div>
            <ol class="ml-12">
                <li>更新依赖，修复一些细节小问题；</li>
                <li>使用 @nuxt/image 优化图片加载；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium text-base">2021-07-20</span>
            </div>
            <ol class="ml-12">
                <li>配置 resource 页；</li>
                <li>移除详情页的 recentDatas 组件；</li>
                <li>子组件emit问题修改；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium text-base">2021-07-18</span>
            </div>
            <ol class="ml-12">
                <li>添加骨架屏；</li>
                <li>移除 recommend 组件；</li>
                <li>移除 contact 页面，添加 resource 页面；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium text-base">2021-06-24</span>
            </div>
            <ol class="ml-12">
                <li>SideBar、RecentPosts、Recommond 改为 Lazy loading；</li>
                <li>Sonar 检测的bug修改；</li>
                <li>替换本地图片地址，使用cdn加速；</li>
            </ol>
        </div>
        <div>
            <div class="flex items-center">
                <span class="bg-gray-500 rounded-full h-2 w-2"></span>
                <span class="ml-4 font-medium text-base">2021-04-10</span>
            </div>
            <ol class="ml-12">
                <li>高亮样式替换为 ir-black；</li>
                <li>帖子页面排版修改为使用 tailwindcss/typography, 移除 github-markdown-css;</li>
                <li>删除 @nuxt/markdown-it 以及插件，自定义 markdown-it 和 highlight.js 进行代码高亮；</li>
            </ol>
        </div>
    </div>
</template>