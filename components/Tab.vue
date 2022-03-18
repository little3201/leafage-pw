<template>
    <div
        class="flex justify-between items-center border border-gray-900 dark:border-gray-300 overflow-x-auto"
    >
        <button
            v-for="data in datas"
            :key="data.code"
            :title="data.alias"
            :aria-label="data.alias"
            type="button"
            @click="current(data.code)"
            class="w-full p-3 text-xs font-bold dark:text-gray-300 uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            :class="{ 'bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900': data.code == checked }"
        >{{ data.alias }}</button>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    datas: {
        type: Array,
        default: [],
    }
})

const emit = defineEmits(['chageParams'])

let checked = ref(props.datas[0].code)

const current = (code: string) => {
    checked.value = code
    emit('chageParams', code)
}

</script>