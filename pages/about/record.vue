<template>
    <div class="relative my-4">
        <div
            class="border-r border-dotted border-gray-500 absolute h-full top-4"
            style="left: 5.5px;"
        ></div>
        <div v-for="(data, index) in datas" :key="index">
            <div class="flex items-center">
                <span class="rounded-full h-3 w-3 z-0" :class="{'bg-green-500' : data.type === 'features', 'bg-yellow-500': data.type === 'bugfix'}"></span>
                <span class="ml-4 font-semibold text-base">{{ data.date }}</span>
            </div>
            <ol class="ml-12 text-sm">
                <li v-for="(content, idx) in data.items" :key="idx">{{ content }}</li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data: datas } = await useAsyncData('record', () => $fetch(`/api/assets/record`))
</script>