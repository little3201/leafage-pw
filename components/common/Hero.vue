<template>
    <div class="my-8 grid gap-y-6 lg:grid-cols-3 lg:gap-x-8">
        <div class="aspect-w-3 aspect-h-2 lg:aspect-h-4 bg-gray-300 overflow-hidden">
            <NuxtLink to="/posts/detail/123">
                <img
                    src="https://cdn.leafage.top/dna-gc901094a3.jpg"
                    alt="Two each of gray, white, and black shirts laying flat."
                    class="w-full h-full object-center object-cover hover:opacity-75"
                    width="100%"
                    height="100%"
                />
            </NuxtLink>
        </div>
        <div class="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-w-3 aspect-h-2 bg-gray-300 overflow-hidden">
                <NuxtLink to="/posts/detail/123">
                    <img
                        src="https://cdn.leafage.top/field-6558125.jpg"
                        alt="Model wearing plain black basic tee."
                        class="w-full h-full object-center object-cover hover:opacity-75"
                        width="100%"
                        height="100%"
                    />
                </NuxtLink>
            </div>
            <div class="aspect-w-3 aspect-h-2 mt-6 lg:my-0 bg-gray-300 overflow-hidden">
                <NuxtLink to="/posts/detail/123">
                    <img
                        src="https://cdn.leafage.top/building-g78a154db4.jpg"
                        alt="Model wearing plain gray basic tee."
                        class="w-full h-full object-center object-cover hover:opacity-75"
                        width="100%"
                        height="100%"
                    />
                </NuxtLink>
            </div>
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden bg-gray-300 lg:aspect-h-4">
            <NuxtLink to="/posts/detail/123">
                <img
                    src="https://cdn.leafage.top/background-g43c1a8308.jpg"
                    alt="Model wearing plain white basic tee."
                    class="w-full h-full object-center object-cover hover:opacity-75"
                    width="100%"
                    height="100%"
                />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    datas: {
        type: Array,
        default: [],
    },
})
</script>