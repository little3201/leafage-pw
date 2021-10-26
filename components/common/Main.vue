<template>
    <section class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <CommonHero />
        <div class="grid lg:grid-cols-3">
            <div class="lg:col-span-2">
                <ul class="flex justify-between items-center text-center border border-black">
                    <li
                        class="w-1/3 hover:bg-black hover:text-white"
                        :class="{ 'bg-black text-white': order == 'likes' }"
                    >
                        <button
                            aria-label="trending"
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
                            aria-label="most_view"
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
                            aria-label="popular"
                            @click="retrieve(0), (order = 'comment')"
                            class="w-full h-10 text-xs font-bold uppercase focus:outline-none"
                        >Most Comments</button>
                    </li>
                </ul>
                <CommonList :datas="datas" />
                <CommonPagation :page="page" :size="size" :total="total" @retrieve="retrieve" />
            </div>
            <LayoutAside />
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    topDatas: {
        type: Array,
        default: [],
    },
    listDatas: {
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

const datas = computed(() => props.listDatas);

const retrieve = async (num: number) => {
    page.value = num ? num : 0;
    // props.listDatas = await $axios.$get(
    //     SERVER_URL.posts, { params: { page: page.value, size: size.value, order: order.value } }
    // );
    const { data } = await useFetch('/api/posts')
};
</script>