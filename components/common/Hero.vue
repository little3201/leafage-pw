<template>
    <div class="my-8 grid lg:grid-cols-3 lg:gap-x-8">
        <div class="aspect-w-3 aspect-h-2 lg:aspect-h-4 overflow-hidden lg:block">
            <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                alt="Two each of gray, white, and black shirts laying flat."
                class="w-full h-full object-center object-cover"
            />
        </div>
        <div class="lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-w-3 aspect-h-2 overflow-hidden">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                    alt="Model wearing plain black basic tee."
                    class="w-full h-full object-center object-cover"
                />
            </div>
            <div class="aspect-w-3 aspect-h-2 overflow-hidden">
                <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                    alt="Model wearing plain gray basic tee."
                    class="w-full h-full object-center object-cover"
                />
            </div>
        </div>
        <div class="aspect-w-3 aspect-h-2 sm:overflow-hidden lg:aspect-h-4">
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