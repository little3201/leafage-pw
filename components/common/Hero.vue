<template>
    <div
        class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
    >
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="Two each of gray, white, and black shirts laying flat."
                class="w-full h-full object-center object-cover"
            />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                    alt="Model wearing plain black basic tee."
                    class="w-full h-full object-center object-cover"
                />
            </div>
            <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                    alt="Model wearing plain gray basic tee."
                    class="w-full h-full object-center object-cover"
                />
            </div>
        </div>
        <div
            class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
            <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                alt="Model wearing plain white basic tee."
                class="w-full h-full object-center object-cover"
            />
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