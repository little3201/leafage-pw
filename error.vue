<template>
    <div class="dark:bg-gray-900">
        <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <LayoutHeader class="hidden sm:flex border-gray-900 dark:border-gray-300 border-b-2" />
            <LayoutLogo />
        </header>
        <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div
                class="lg:flex items-center justify-center text-center lg:text-left border-t border-black"
            >
                <img alt="error" class="w-full my-4" src="/error.svg" width="840" height="720" />
                <div>
                    <h2 class="text-6xl font-medium my-4">{{ error.statusCode }}</h2>
                    <p class="text-xl lg:text-3xl font-medium">Oops. {{ error.statusMessage }}</p>
                    <p
                        class="text-lg mt-4 mb-8"
                    >You may have mistyped the address or the page may have moved.</p>
                </div>
            </div>
        </main>
        <LayoutFooter />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    error: Object
})
</script>