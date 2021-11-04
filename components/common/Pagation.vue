<template>
    <div class="flex space-x-6 justify-center items-center my-8">
        <button
            title="descrease"
            type="button"
            aria-label="descrease"
            @click="$emit('retrieve', curPage > 0 ? curPage-- : 0)"
            class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border border-black inline-flex items-center justify-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left"
            >
                <polyline points="15 18 9 12 15 6" />
            </svg>
        </button>
        <button
            v-for="index in pages"
            type="button"
            aria-label="give"
            @click="(curPage = index - 1), $emit('retrieve', index - 1)"
            class="w-8 h-8 rounded-full focus:outline-none border border-black hover:bg-black hover:text-white"
            :class="{
                'bg-black text-white ': curPage == index - 1,
            }"
        >{{ index }}</button>
        <button
            title="increment"
            type="button"
            aria-label="increment"
            @click="$emit('retrieve', curPage < pages - 1 ? curPage++ : pages)"
            class="disabled:opacity-25 focus:outline-none w-8 h-8 rounded-full hover:border border-black inline-flex items-center justify-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
            >
                <polyline points="9 18 15 12 9 6" />
            </svg>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const props = defineProps({
    total: {
        type: Number,
        default: 0,
    },
    page: {
        type: Number,
        default: 0,
    },
    size: {
        type: Number,
        default: 10,
    }
})

const curPage = ref(props.page);

const pages = computed(() => {
    if (props.total < 1) {
        return 1;
    } else if (props.total % props.size > 0) {
        return ~~(props.total / props.size) + 1;
    } else {
        return ~~(props.total / props.size);
    }
});
</script>