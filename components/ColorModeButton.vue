<template>
    <ClientOnly v-if="!colorMode?.forced">
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" v-bind="{
            ...($ui?.button?.secondary as any),
            ...$attrs
        }" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`" @click="isDark = !isDark" />

        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>

<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})

const colorMode = useColorMode()

// Computed

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>