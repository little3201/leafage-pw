<template>
    <div class="md:flex items-center justify-center text-center lg:text-left border-t border-black">
        <img alt="error" class="w-full md:w-3/5 xl:w-full mx-auto my-4" src="/error.svg" />
        <div v-if="error.statusCode === 404">
            <div class="text-6xl font-medium">{{ error.statusCode }}</div>
            <div class="text-xl lg:text-3xl font-medium">Oops. This page has gone missing.</div>
            <div
                class="text-lg mt-4 mb-8"
            >You may have mistyped the address or the page may have moved.</div>
        </div>
        <div v-else>
            <div class="text-6xl font-medium">{{ error.statusCode }}</div>
            <div class="text-xl lg:text-3xl font-medium">Oops. Look likes somethins error.</div>
            <div class="text-lg mt-4 mb-8">Refreh your requested page.</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    error: {
        type: Object,
        default: {},
    },
})
</script>