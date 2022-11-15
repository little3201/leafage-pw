<template>
    <div class="dark:bg-neutral-900">
        <header class="container mx-auto px-5">
            <LayoutHeader class="flex border-neutral-900 dark:border-neutral-300 border-b-2" />
            <LayoutLogo />
        </header>

        <main class="container mx-auto px-5">
            <div class="lg:flex items-center justify-center text-center lg:text-left border-t border-neutral-900 dark:border-neutral-300">
                <img alt="error" class="my-4" src="/svg/error.svg" width="640" height="520" />
                <div class="dark:text-neutral-100 text-center">
                    <h2 class="text-6xl font-medium my-4">{{ error.statusCode }}</h2>
                    <p class="text-xl lg:text-3xl font-medium">Oops. {{ error.statusMessage }}</p>
                    <p class="text-lg mt-4 mb-8">You may have mistyped the address or the page may have moved.</p>
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