<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>About - Leafage</Title>
            </Head>
        </Html>

        <div class="lg:flex lg:border-t border-neutral-900 dark:divide-neutral-400 dark:border-neutral-300">
            <div
                class="lg:divide-y lg:divide-neutral-300 lg:dark:divide-neutral-400 text-center lg:mr-4 lg:w-48 lg:py-6 flex border border-neutral-900 dark:border-neutral-300 lg:border-none lg:block flex-none overflow-x-auto dark:text-neutral-300"
            >
                <NuxtLink
                    title="关于网站"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-neutral-900 hover:text-neutral-300 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
                    to="/about"
                >关于网站</NuxtLink>
                <NuxtLink
                    title="关于作者"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-neutral-900 hover:text-neutral-300 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
                    to="/about/author"
                >关于作者</NuxtLink>
                <NuxtLink
                    title="更新日志"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-neutral-900 hover:text-neutral-300 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
                    to="/about/change-log"
                >更新日志</NuxtLink>
            </div>
            <div class="my-4 mx-auto w-full lg:border-l">
                <article class="prose prose-blue lg:prose-lg dark:text-neutral-300 mx-auto">
                    <NuxtPage />
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-neutral-300 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-300;
}
</style>