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
                v-for="(data, index) in galleryPosts"
                :data="data"
                :aspect="(index < 4 && index > 1) ? true : false"
            />
        </div>

        <div class="flex justify-between space-x-8 dark:text-gray-300">
            <div class="w-full">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3 my-8">
                    <Item v-for="post in posts" :data="post" />
                </div>
                <div class="text-center my-6 text-gray-400">
                    <button
                        type="button"
                        @click="viewMore"
                        class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none"
                    >
                        View More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-chevrons-down mx-auto"
                        >
                            <polyline points="7 6 12 11 17 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <LayoutAside class="hidden lg:block" />
        </div>
    </div>
</template>

<script lang="ts" setup>
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

let sort = ref("likes")
let page = ref(0)

const [{ data: galleryPosts }, { data: posts, refresh }] = await Promise.all([
    useFetch(`/api/assets/posts?page=0&size=6`),
    useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
])

/**
 * 加载更多
 */
const viewMore = async () => {
    page.value = page.value + 1;
    const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`)
    posts.push(datas)
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
        posts.splice(0, -1)
        const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${sort.value}`)
        posts.push(datas)
    }
}
</script>