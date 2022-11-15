<template>
    <div
        class="flex justify-between items-center border border-neutral-900 dark:border-neutral-300 overflow-x-auto"
    >
        <button
            v-for="data in datas"
            :key="data.code"
            :title="data.name"
            :aria-label="data.name"
            type="button"
            @click="current(data.code)"
            class="w-full p-3 text-xs font-bold dark:text-neutral-300 uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-neutral-900 hover:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
            :class="{ 'bg-neutral-900 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-900': data.code == checked }"
        >{{ data.name }}</button>
    </div>
</template>

<script lang="ts" setup>
import { Category } from '@/lib/request.type';
const props = defineProps({
    datas: {
        type: Array<Category>,
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