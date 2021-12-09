<template>
    <div class="relative" :class="{ 'lg:col-span-2': aspect }">
        <RouterLink :to="'/posts/detail/' + data.code" class="group">
            <figure class="h-full" :class="{ 'aspect-w-16 aspect-h-9': aspect }">
                <img
                    :src="data.cover"
                    class="w-full h-full group-hover:opacity-75"
                    alt="wall design"
                />
            </figure>
            <p
                class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"
            >{{ new Date(data.modifyTime).toLocaleDateString() }}</p>
            <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2
                    class="text-xl font-semibold 5 text-white group-hover:underline"
                >{{ data.title }}</h2>
            </div>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        default: {},
    },
    aspect: {
        type: Boolean,
        default: false
    }
})
</script>