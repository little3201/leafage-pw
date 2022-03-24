<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Posts</Title>
            </Head>
        </Html>

        <Tab @chageParams="chageParams" :datas="categories" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-8">
            <Item v-for="post in datas" :data="post" />
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

let page = ref(0)

const category = ref(route.params.category || '');

const chageParams = async (item: string) => {
    page.value = 0;
    category.value = item;
    refresh()
};

const { data: categories } = await useAsyncData('category', () => $fetch(`/api/assets/category`))

const { data: posts, refresh } = await useFetch(`/api/assets/posts?page=${page.value}&size=12`)

let datas = ref(posts)

watch(posts, (newPosts) => {
    datas.value.push(...newPosts)
})

const viewMore = () => {
    page.value++;
    refresh()
}
</script>