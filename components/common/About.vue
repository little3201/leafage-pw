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

        <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
            <div class="border-t border-black"></div>
            <div
                class="grid grid-cols-1 md:grid-cols-4 md:gap-4 md:divide-x md:divide-gray-300 my-4 md:my-8"
            >
                <div
                    class="flex justify-around md:block md:col-span-1 md:divide-y md:divide-gray-300 text-center my-4 md:py-8 border border-black md:border-none"
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
                <div class="col-span-3">
                    <article class="prose lg:prose-lg mx-auto">
                        <slot />
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.NuxtLink-exact-active {
    @apply text-white bg-black;
}
</style>