<template>
    <div class="max-w-4xl">
        <ul class="flex justify-between items-center text-center border border-black">
            <li
                class="w-1/3 hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'likes' }"
            >
                <button
                    title="Most Liked"
                    aria-label="Most Liked"
                    type="button"
                    @click="retrieve(0), (order = 'likes')"
                    class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
                >Most Liked</button>
            </li>
            <li
                class="w-1/3 hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'viewed' }"
            >
                <button
                    title="Most Viewed"
                    aria-label="Most Viewed"
                    type="button"
                    @click="retrieve(0), (order = 'viewed')"
                    class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
                >Most Viewed</button>
            </li>
            <li
                class="w-1/3 hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'comment' }"
            >
                <button
                    type="button"
                    title="Most Comments"
                    aria-label="Most Comments"
                    @click="retrieve(0), (order = 'comment')"
                    class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
                >Most Comments</button>
            </li>
        </ul>
        <CommonList :datas="datas" class="my-8" />
        <CommonPagation :page="page" :size="size" :total="total" @retrieve="retrieve" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    datas: {
        type: Array,
        default: [],
    },
    total: {
        type: Number,
        default: 0,
    }
})

const page = ref(0);
const size = ref(10);
const order = ref("likes");

const retrieve = async (num: number) => {
    page.value = num ? num : 0;
    // const { data } = await useFetch('/api/posts')
};
</script>