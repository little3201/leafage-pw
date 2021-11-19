<template>
    <div>
        <CommonHero />
        <div class="flex justify-between space-x-8 dark:text-gray-300">
            <div class="w-full">
                <div
                    class="flex justify-between items-center border border-gray-900 dark:border-gray-300 overflow-x-auto"
                >
                    <button
                        title="Most Liked"
                        aria-label="Most Liked"
                        type="button"
                        @click="chageParams(0, 'likes'), refresh()"
                        class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
                        :class="{ 'bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900': order == 'likes' }"
                    >Most Liked</button>
                    <button
                        title="Most Viewed"
                        aria-label="Most Viewed"
                        type="button"
                        @click="chageParams(0, 'viewed'), refresh()"
                        class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
                        :class="{ 'bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900': order == 'viewed' }"
                    >Most Viewed</button>
                    <button
                        type="button"
                        title="Most Comments"
                        aria-label="Most Comments"
                        @click="chageParams(0, 'comment'), refresh()"
                        class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
                        :class="{ 'bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900': order == 'comment' }"
                    >Most Comments</button>
                </div>
                <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 xl:grid-cols-3 my-8">
                    <CommonItem v-for="data in datas" :data="data" />
                </div>
                <CommonPagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
            </div>
            <LayoutAside class="hidden lg:block" />
        </div>
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

const chageParams = async (num: number, category: string) => {
    page.value = num ? num : 0;
    order.value = category;
};

const { data: datas, refresh } = await useAsyncData('index-retrieve', () => $fetch('/api/posts'))
</script>