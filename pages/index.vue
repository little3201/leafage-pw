<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Home</Title>
                <Meta
                    name="description"
                    content="Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。"
                />
                <Meta
                    name="keywords"
                    content="leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js"
                />
            </Head>
        </Html>
        <div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-6 mb-8">
            <Gallery
                v-for="(data, index) in datas.splice(0, 6)"
                :data="data"
                :aspect="(index < 4 && index > 1) ? true : false"
            />
        </div>

        <div class="flex justify-between space-x-8 dark:text-gray-300">
            <div class="w-full">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 my-8">
                    <Item v-for="data in datas" :data="data" />
                </div>
                <LazyPagation
                    :page="pagation.page"
                    :size="pagation.size"
                    :total="pagation.total"
                    @retrieve="chageParams"
                />
            </div>
            <LazyLayoutAside class="hidden lg:block" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const pagation = reactive(
    {
        page: 0,
        size: 0,
        total: 0
    }
)

const order = ref("");
const tabs = ref([
    {
        code: "likes",
        alias: "Trending"
    },
    {
        code: "viewed",
        alias: "Most View"
    },
    {
        code: "comment",
        alias: "Popular"
    }
])

const chageParams = async (num: number, category: string) => {
    pagation.page = num ? num : 0;
    order.value = category;
    refresh()
};

const { data: datas, refresh } = await useAsyncData('home', () => $fetch(`/api/posts?page=${pagation.page}&size=${pagation.size}`))
</script>