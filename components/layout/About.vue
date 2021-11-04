<template>
    <div>
        <Head :lang="'en'">
            <Title>Leafage - About</Title>
            <Meta name="description" content="Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。" />
            <Meta
                name="keywords"
                content="leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js, markdown, highlight"
            />
        </Head>

        <div class="lg:border-t border-black lg:flex">
            <div
                class="lg:divide-y lg:divide-gray-300 text-center lg:mr-4 lg:w-60 lg:py-8 flex border border-black lg:border-none lg:block flex-none overflow-x-auto"
            >
                <NuxtLink
                    title="关于网站"
                    class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white"
                    to="/about"
                >关于网站</NuxtLink>
                <NuxtLink
                    title="关于作者"
                    class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white"
                    to="/about/profile"
                >关于作者</NuxtLink>
                <NuxtLink
                    title="更新日志"
                    class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white"
                    to="/about/record"
                >更新日志</NuxtLink>
            </div>
            <div class="my-4 p-4 mx-auto w-full lg:border-l">
                <article class="prose lg:prose-lg mx-auto">
                    <slot />
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-white bg-black;
}
</style>