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

        <section class="border-t border-black">
            <div class="flex">
                <div
                    class="block divide-y divide-gray-300 text-center mr-4 md:py-8 w-full max-w-xs"
                >
                    <NuxtLink
                        class="w-full block p-3 hover:bg-black hover:text-white"
                        to="/about"
                    >关于本站</NuxtLink>
                    <NuxtLink
                        class="w-full block p-3 hover:bg-black hover:text-white"
                        to="/about/profile"
                    >关于本人</NuxtLink>
                    <NuxtLink
                        class="w-full block p-3 hover:bg-black hover:text-white"
                        to="/about/record"
                    >更新日志</NuxtLink>
                </div>
                <div class="my-4 p-4 mx-auto">
                    <article class="prose lg:prose-lg mx-auto">
                        <slot />
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-white bg-black;
}
</style>