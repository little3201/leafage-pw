<template>
    <div>
        <Html :lang="'en'">

        <Head>
            <Title>Home - Leafage</Title>
            <Meta name="description" content="Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。" />
            <Meta name="keywords" content="leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js" />
        </Head>

        </Html>
        <div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-8 mb-8">
            <Gallery v-for="(data, index) in galleryPosts?.slice(0, 6)" :data="data"
                :aspect="(index < 4 && index > 1) ? true : false" />
        </div>

        <div class="grid grid-flow-row grid-cols-4 gap-8 dark:text-neutral-300">
            <div class=" col-span-3">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 my-8">
                    <Item v-for="post in posts" :data="post" />
                </div>
                <div class="text-center my-6 text-neutral-400">
                    <button type="button" @click="viewMore"
                        class="font-semibold hover:text-neutral-600 px-2 py-1 rounded focus:outline-none">
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevrons-down mx-auto">
                            <polyline points="7 6 12 11 17 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <LazyLayoutAside class="hidden lg:block" :categories="categories ? categories : []" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Posts, Category } from '@/lib/request.type';

const tabs = ref([
    {
        code: "likes",
        name: "Trending"
    },
    {
        code: "viewed",
        name: "Most View"
    },
    {
        code: "comment",
        name: "Popular"
    }
])

let sort = ref("likes")
let page = ref(0)

const [{ data: galleryPosts }, { data: posts, refresh }, { data: categories }] = await Promise.all([
    useFetch<Array<Posts>>(`/api/posts?page=0&size=6`),
    useFetch<Array<Posts>>(`/api/posts?page=0&size=12&sort=likes`),
    useFetch<Array<Category>>('/api/categories')
])

/**
 * 加载更多
 */
const viewMore = async () => {
    page.value = page.value + 1;
    const datas = await $fetch(`/api/posts?page=${page.value}&size=12&sort=${sort.value}`)
    if (Array.isArray(posts)) {
        posts.push(datas)
    }
}

/**
 * 更新排序
 */
const chageParams = async (item: string) => {
    page.value = 0
    if (sort.value == item) {
        refresh()
    } else {
        sort.value = item;
        const datas = await $fetch(`/api/posts?page=${page.value}&size=12&sort=${sort.value}`)
        if (Array.isArray(posts)) {
            posts.push(datas)
        }
    }
}
</script>