<template>
    <div>
        <div class="flex justify-between space-x-8 dark:text-gray-300">
            <div>
                <div class="aspect-w-3 aspect-h-2 lg:aspect-h-4 bg-gray-300 overflow-hidden">
                    <NuxtLink to="/posts/detail/123">
                        <img
                            src="https://cdn.leafage.top/dna-gc901094a3.jpg"
                            alt="Two each of gray, white, and black shirts laying flat."
                            class="w-full h-full object-center object-cover hover:opacity-75"
                            width="100%"
                            height="100%"
                        />
                    </NuxtLink>
                </div>
                <div class="lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 bg-gray-300 overflow-hidden">
                        <NuxtLink to="/posts/detail/123">
                            <img
                                src="https://cdn.leafage.top/field-6558125.jpg"
                                alt="Model wearing plain black basic tee."
                                class="w-full h-full object-center object-cover hover:opacity-75"
                                width="100%"
                                height="100%"
                            />
                        </NuxtLink>
                    </div>
                    <div class="aspect-w-3 aspect-h-2 mt-6 lg:my-0 bg-gray-300 overflow-hidden">
                        <NuxtLink to="/posts/detail/123">
                            <img
                                src="https://cdn.leafage.top/building-g78a154db4.jpg"
                                alt="Model wearing plain gray basic tee."
                                class="w-full h-full object-center object-cover hover:opacity-75"
                                width="100%"
                                height="100%"
                            />
                        </NuxtLink>
                    </div>
                </div>
                <div class="aspect-w-3 aspect-h-2 overflow-hidden bg-gray-300 lg:aspect-h-4">
                    <NuxtLink to="/posts/detail/123">
                        <img
                            src="https://cdn.leafage.top/background-g43c1a8308.jpg"
                            alt="Model wearing plain white basic tee."
                            class="w-full h-full object-center object-cover hover:opacity-75"
                            width="100%"
                            height="100%"
                        />
                    </NuxtLink>
                </div>
            </div>

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
                    <Item v-for="data in datas" :data="data" />
                </div>
                <Pagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
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