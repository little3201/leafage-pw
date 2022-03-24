<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Posts</Title>
            </Head>
        </Html>

        <Tab @chageParams="chageParams" :datas="categories" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
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
</template>

<script lang="ts" setup>
const route = useRoute();

const [{ data: categories }, { data: posts, refresh }] = await Promise.all([
    useFetch(`/api/assets/category`),
    useFetch(`/api/assets/posts?page=0&size=12&sort=likes`)
])

let page = ref(0)
let category = ref(route.params.category || categories[0]);

/**
 * 加载更多
 */
const viewMore = async () => {
    page.value = page.value + 1;
    const datas = await $fetch(`/api/assets/posts?page=${page.value}&size=12&sort=${category.value}`)
    posts.push(datas)
}

/**
 * 更新排序
 */
const chageParams = async (item: string) => {
    page.value = 0;
    category.value = item;
    refresh()
};
</script>