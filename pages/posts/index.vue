<template>
    <div>
        <div class="flex justify-between items-center border border-black">
            <button
                title="Most Liked"
                aria-label="Most Liked"
                type="button"
                @click="retrieve(0), (order = 'likes')"
                class="w-1/3 py-3 text-xs font-bold uppercase rounded-none focus:outline-none hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'likes' }"
            >Most Liked</button>
            <button
                title="Most Viewed"
                aria-label="Most Viewed"
                type="button"
                @click="retrieve(0), (order = 'viewed')"
                class="w-1/3 py-3 text-xs font-bold uppercase rounded-none focus:outline-none hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'viewed' }"
            >Most Viewed</button>
            <button
                type="button"
                title="Most Comments"
                aria-label="Most Comments"
                @click="retrieve(0), (order = 'comment')"
                class="w-1/3 py-3 text-xs font-bold uppercase rounded-none focus:outline-none hover:bg-black hover:text-white"
                :class="{ 'bg-black text-white': order == 'comment' }"
            >Most Comments</button>
        </div>
        <div
            class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
        >
            <CommonItem v-for="data in 8" :data="data" />
        </div>
        <CommonPagation class="my-8" :page="page" :size="size" :total="total" @retrieve="retrieve" />
    </div>
</template>

<script lang="ts">
export default {
    layout: "default"
};
</script>

<script lang="ts" setup>
const page = ref(0);
const size = ref(10);
const total = ref(0);

const order = ref("likes");
const datas = ref([])

const retrieve = async (num: number) => {
    page.value = num ? num : 0;
};

// const { data: recentPosts } = await useAsyncData('count', () => $fetch('/api/posts'))
</script>