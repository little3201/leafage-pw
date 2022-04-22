<template>
    <div class="relative my-4">
        <div class="border-r border-dotted border-gray-500 absolute h-full top-4" style="left: 5.5px;"></div>
        <div v-for="(record, index) in datas" :key="index">
            <div class="flex items-center">
                <span class="rounded-full h-3 w-3 z-0"
                    :class="{ 'bg-green-500': record.type === 'features', 'bg-yellow-500': record.type === 'bugfix' }"></span>
                <span class="ml-4 font-semibold text-base">{{ record.date }}</span>
            </div>
            <div class="ml-10">
                <ol>
                    <li v-for="(content, idx) in record.items" :key="idx">{{ content }}</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { data: datas } = await useAsyncData('record', () => $fetch(`/api/assets/record`))
</script>