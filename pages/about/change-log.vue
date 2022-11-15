<template>
    <div class="relative my-4">
        <div class="border-r border-dotted border-neutral-500 dark:border-neutral-100 absolute h-full top-4" style="left: 5.5px;"></div>
        <div>
            <div class="flex items-center"><span class="rounded-full h-3 w-3 z-10 bg-green-500"></span><span
                    class="ml-4 font-semibold text-base">2022-03-12</span></div>
            <div class="ml-10">
                <ol>
                    <li>整体布局重构，替换点赞图标;</li>
                    <li>评论组件重构，添加回复、及查看回复功能;</li>
                    <li>排版优化，字体大小重设，更好的体验;</li>
                    <li>添加移动端的抽屉菜单;</li>
                </ol>
            </div>
        </div>
        <div>
            <div class="flex items-center"><span class="rounded-full h-3 w-3 z-10 bg-yellow-500"></span><span
                    class="ml-4 font-semibold text-base">2021-12-02</span></div>
            <div class="ml-10">
                <ol>
                    <li>首页布局重构，添加评论功能;</li>
                    <li>抽取重复部分的代码作为组件使用;</li>
                </ol>
            </div>
        </div>
        <div>
            <div class="flex items-center"><span class="rounded-full h-3 w-3 z-0 bg-green-500"></span><span
                    class="ml-4 font-semibold text-base">2021-10-13</span></div>
            <div class="ml-10">
                <ol>
                    <li>升级到 nuxt3，并重构所有页面;</li>
                </ol>
            </div>
        </div>
    </div>
</template>