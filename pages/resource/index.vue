<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - Resource</Title>
            </Head>
        </Html>
        <Tab @chageParams="chageParams" :datas="categories" />
        <div
            class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
        >
            <NuxtLink
                v-for="data in resources"
                :to="'/resource/detail/' + data.code"
                class="w-full group"
            >
                <div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border">
                    <img
                        :src="data.cover"
                        :alt="data.title"
                        class="w-full h-full object-center group-hover:opacity-75"
                        height="100%"
                        width="100%"
                    />
                </div>
                <p
                    class="my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline"
                >{{ data.title }}</p>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
                    <div>
                        <div class="inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-eye mr-1"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            {{ data.viewed }}
                        </div>
                        <div class="inline-flex items-center mx-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-download-cloud mr-1"
                            >
                                <polyline points="8 17 12 21 16 17" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
                            </svg>
                            {{ data.downloads }}
                        </div>
                    </div>
                </div>
            </NuxtLink>
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
const [{ data: categories }, { data: resources, refresh }] = await Promise.all([
    useFetch(`/api/assets/categories`),
    useFetch(`/api/assets/resources?page=0&size=12&sort=likes`)
])

let page = ref(0)
let category = ref(categories[0]);

/**
 * 加载更多
 */
const viewMore = async () => {
    page.value = page.value + 1;
    const datas = await $fetch(`/api/assets/resources?page=${page.value}&size=12&category=${category.value}`)
    resources.push(datas)
}

/**
 * 更新排序
 */
const chageParams = async (item: string) => {
    page.value = 0;
    if (category.value == item) {
        refresh()
    } else {
        category.value = item;
        resources.splice(0, -1)
        const datas = await $fetch(`/api/assets/resources?page=${page.value}&size=12&category=${category.value}`)
        resources.push(datas)
    }
}
</script>