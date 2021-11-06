<template>
    <div class="flex space-x-8 border-t border-gray-900 dark:border-gray-300">
        <div class="my-6">
            <article>
                <h2
                    class="text-xl md:text-2xl lg:text-3xl font-bold dark:text-gray-300"
                    v-text="data.title"
                ></h2>
                <div
                    class="md:flex text-sm font-bold space-x-6 text-gray-800 dark:text-gray-300 uppercase my-4"
                >
                    <NuxtLink
                        :title="data.category"
                        :to="{ path: '/posts', query: { category: data.category } }"
                        v-text="data.category"
                        class="hover:underline hover:text-gray-900 dark:hover:text-gray-300"
                    ></NuxtLink>
                    <span
                        class="tracking-wider"
                        v-text="new Date(data.modifyTime || '2021-11-11').toDateString()"
                    ></span>
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
                            class="feather feather-message-square mr-1"
                        >
                            <path
                                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            />
                        </svg>
                        {{ data.comment }}
                    </div>
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
                            class="feather feather-heart mr-1"
                        >
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            />
                        </svg>
                        {{ data.likes }}
                    </div>
                </div>
                <div class="inline-flex items-center dark:text-gray-300">
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
                        class="feather feather-tag mr-2"
                    >
                        <path
                            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
                        />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span v-for="(tag, index) in data.tags" :key="index" class="text-sm">
                        {{ tag }}
                        <span class="mr-2" v-if="index < data.tags.length - 1">,</span>
                    </span>
                </div>
                <figure v-show="data.cover">
                    <img
                        :src="data.cover"
                        :alt="data.title"
                        class="w-full h-full my-8"
                        width="100%"
                        height="100%"
                    />
                </figure>
                <div
                    class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:text-gray-300 dark:prose-blue max-w-none"
                    v-html="rendered"
                ></div>
                <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 my-8 p-8 rounded">
                    <ul
                        class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-xs font-bold"
                    >
                        <li>
                            <NuxtLink
                                :title="previous.code"
                                :to="'/posts/detail/' + previous.code"
                                class="flex items-center transform hover:-translate-x-2 transition duration-500"
                            >
                                <svg
                                    v-show="previous"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-chevron-left"
                                >
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                                {{ previous.title }}
                            </NuxtLink>
                        </li>
                        <li class="flex items-center justify-end">
                            <NuxtLink
                                :title="next.code"
                                :to="'/posts/detail/' + next.code"
                                class="flex items-center transform hover:translate-x-2 transition duration-500"
                            >
                                {{ next.title }}
                                <svg
                                    v-show="next"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-chevron-right"
                                >
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </article>
            <div>
                <CommonComment v-for="data in comments" :data="data" />
            </div>
        </div>
        <LayoutAside class="hidden lg:block my-8" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const { params } = useRoute();

const rendered = computed(() => "");

//点赞
const like = async (code: string) => {

};

const [{ data: previous }, { data: next }, { data: comments }] = await Promise.all([
    useFetch('/api/posts/previous'),
    useFetch('/api/posts/next'),
    useFetch('/api/comment')
])

const { data } = await useAsyncData('fetch', () => $fetch(`/api/posts/${params.code}`))

</script>