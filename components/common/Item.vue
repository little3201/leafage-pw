<template>
    <NuxtLink to="/posts/detail/1234" class="w-full">
        <div class="w-full aspect-w-3 aspect-h-2 bg-gray-200 overflow-hidden">
            <img
                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                alt="images"
                class="object-center object-cover group-hover:opacity-75"
                height="100%"
                width="100%"
            />
        </div>
        <h3
            class="mt-4 text-gray-700 font-bold transform hover:translate-x-2 transition duration-500"
        >Earthen Bottle</h3>
        <span class="mt-1 text-gray-900">viewed</span>
        <span class="mt-1 text-gray-900 ml-2">likes</span>
        <span class="mt-1 text-gray-900 ml-2">comment</span>
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        default: {},
    },
})
</script>