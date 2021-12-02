<template>
    <div class="dark:bg-gray-900">
        <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <LayoutHeader class="hidden sm:flex border-gray-900 dark:border-gray-300 border-b-2" />
            <LayoutLogo />
        </header>
        <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>