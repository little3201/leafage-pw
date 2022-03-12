<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - About</Title>
            </Head>
        </Html>

        <div class="lg:flex lg:border-t border-gray-900 dark:divide-gray-400 dark:border-gray-300">
            <div
                class="lg:divide-y lg:divide-gray-300 lg:dark:divide-gray-400 text-center lg:mr-4 lg:w-48 lg:py-6 flex border border-gray-900 dark:border-gray-300 lg:border-none lg:block flex-none overflow-x-auto dark:text-gray-300"
            >
                <NuxtLink
                    title="关于网站"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                    to="/about"
                >关于网站</NuxtLink>
                <NuxtLink
                    title="关于作者"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                    to="/about/profile"
                >关于作者</NuxtLink>
                <NuxtLink
                    title="更新日志"
                    class="w-full whitespace-nowrap lg:block px-3 py-2 hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                    to="/about/record"
                >更新日志</NuxtLink>
            </div>
            <div class="my-4 mx-auto w-full lg:border-l">
                <article class="prose prose-base dark:text-gray-300 prose-blue mx-auto">
                    <NuxtChild />
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-gray-300 bg-gray-900 dark:text-gray-900 dark:bg-gray-300;
}
</style>