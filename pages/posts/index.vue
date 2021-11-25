<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Posts</Title>
            </Head>
        </Html>
        <div
            class="flex justify-between items-center border border-gray-900 dark:border-gray-300 dark:text-gray-300 overflow-x-auto"
        >
            <button
                title="all"
                aria-label="all"
                type="button"
                @click="chageParams(0, ''), refresh()"
                class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                :class="{ 'bg-gray-900 text-gray-300 dark:bg-gray-300 dark:text-gray-900': category == '' }"
            >All</button>
            <button
                v-for="cate in categories"
                :title="cate.alias"
                :aria-label="cate.alias"
                type="button"
                @click="chageParams(0, cate.alias), refresh()"
                class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                :class="{ 'bg-gray-900 text-gray-300 dark:bg-gray-300 dark:text-gray-900': category == cate.alias }"
            >{{ cate.alias }}</button>
        </div>
        <div
            class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
        >
            <Item v-for="data in datas" :data="data" />
        </div>
        <Pagation class="my-8" :page="page" :size="size" :total="total" @retrieve="chageParams" />
    </div>
</template>

<script lang="ts">
export default {
    layout: "default"
};
</script>

<script lang="ts" setup>
const route = useRoute();

const page = ref(0);
const size = ref(10);
const total = ref(0);

const category = ref(route.params.category || '');

const chageParams = async (num: number, alias: string) => {
    page.value = num ? num : 0;
    category.value = alias;
};

const { data: categories } = await useAsyncData('post-retrieve', () => $fetch('/api/category'))

const { data: datas, refresh } = await useFetch('/api/posts')
</script>