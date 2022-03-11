<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Posts</Title>
            </Head>
        </Html>

        <Tab @chageParams="chageParams" :datas="categories" />
        <div
            class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
        >
            <Item v-for="data in datas" :data="data" />
        </div>
        <LazyPagation
            class="my-8"
            :page="pagation.page"
            :size="pagation.size"
            :total="pagation.total"
            @retrieve="chageParams"
        />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const pagation = reactive(
    {
        page: 0,
        size: 0,
        total: 0
    }
)

const category = ref(route.params.category || '');

const chageParams = async (num: number, alias: string) => {
    pagation.page = num ? num : 0;
    category.value = alias;
    refresh()
};

const { data: categories } = await useAsyncData('posts', () => $fetch(`https://www.leafage.top/api/category`))

const { data: datas, refresh } = await useFetch(`https://www.leafage.top/api/posts?page=${pagation.page}&size=${pagation.size}`)
</script>