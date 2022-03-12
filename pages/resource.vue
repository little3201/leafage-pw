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
            <NuxtLink v-for="data in datas" :to="'/posts/detail/' + data.code" class="w-full group">
                <div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border">
                    <img
                        :src="data.cover"
                        :alt="data.title"
                        class="w-full h-full object-center filter grayscale group-hover:opacity-75"
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
const pagation = reactive(
    {
        page: 0,
        size: 0,
        total: 0
    }
)

const category = ref("");

const chageParams = async (num: number, code: string) => {
    pagation.page = num ? num : 0;
    category.value = code;
    refresh()
};

const { data: categories } = await useAsyncData('resources', () => $fetch(`/api/category`))

const { data: datas, refresh } = await useFetch(`/api/resource?page=${pagation.page}&size=${pagation.size}`)
</script>