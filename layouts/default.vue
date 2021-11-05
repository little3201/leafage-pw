<template>
    <div class="dark:bg-black">
        <Head :lang="'en'">
            <Title>Leafage - Home</Title>
            <Meta name="description" content="Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。" />
            <Meta
                name="keywords"
                content="leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js"
            />
        </Head>
        <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <LayoutHeader class="hidden sm:flex border-black dark:border-gray-100 border-b-2" />
            <LayoutLogo />
        </header>
        <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>