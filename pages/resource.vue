<template>
    <div>
        <div
            class="flex justify-between items-center border border-black dark:border-gray-100 dark:text-gray-100 overflow-x-auto"
        >
            <button
                title="Most Liked"
                aria-label="Most Liked"
                type="button"
                @click="retrieve(0), (order = 'likes')"
                class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                :class="{ 'bg-black text-white dark:bg-gray-100 dark:text-black': order == 'likes' }"
            >Most Liked</button>
            <button
                title="Most Viewed"
                aria-label="Most Viewed"
                type="button"
                @click="retrieve(0), (order = 'viewed')"
                class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                :class="{ 'bg-black text-white dark:bg-gray-100 dark:text-black': order == 'viewed' }"
            >Most Viewed</button>
            <button
                type="button"
                title="Most Comments"
                aria-label="Most Comments"
                @click="retrieve(0), (order = 'comment')"
                class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-black hover:text-white dark:hover:bg-gray-100 dark:hover:text-black"
                :class="{ 'bg-black text-white dark:bg-gray-100 dark:text-black': order == 'comment' }"
            >Most Comments</button>
        </div>
        <div
            class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8"
        >
            <NuxtLink v-for="data in 12" to="/posts/detail/1234" class="w-full group">
                <div class="w-full aspect-w-4 aspect-h-5 bg-gray-200 overflow-hidden border">
                    <img
                        src="https://cdn.leafage.top/spring-action.jfif"
                        alt="images"
                        class="w-full h-full object-center object-cover group-hover:opacity-75"
                        height="100%"
                        width="100%"
                    />
                </div>
                <h3 class="mt-4 text-sm text-gray-700 dark:text-gray-400">Earthen Bottle</h3>
                <p
                    class="my-3 text-lg font-medium text-gray-800 group-hover:text-black dark:text-gray-300 group-hover:underline dark:group-hover:text-gray-100"
                >《Spring 实战》第4版</p>
                <div class="flex justify-between text-xs text-gray-700 dark:text-gray-400">
                    <span>{{ new Date().toDateString() }}</span>
                    <div>
                        <div class="inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
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
                            23
                        </div>
                        <div class="inline-flex items-center mx-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square mr-1"
                            >
                                <path
                                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                />
                            </svg>
                            34
                        </div>
                        <div class="inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-heart mr-1"
                            >
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                />
                            </svg>
                            109
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <CommonPagation class="my-8" :page="page" :size="size" :total="total" @retrieve="retrieve" />
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
const datas = ref([])

const retrieve = async (num: number) => {
    page.value = num ? num : 0;
};

// const { data: recentPosts } = await useAsyncData('count', () => $fetch('/api/posts'))
</script>