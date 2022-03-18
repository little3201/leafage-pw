<template>
    <div class="dark:bg-gray-900">
        <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8">
            <LayoutHeader class="flex border-gray-900 dark:border-gray-300 border-b-2" />
            <LayoutLogo />
        </header>
        <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8" style="min-height: calc(100vh - 23rem);">
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>