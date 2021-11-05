<template>
    <div class="flex space-x-8 border-t border-black dark:border-gray-100">
        <div class="my-6">
            <article v-if="data">
                <div
                    class="md:flex text-sm font-bold space-x-6 text-gray-800 dark:text-gray-300 uppercase"
                >
                    <NuxtLink
                        :title="data.category"
                        :to="{ path: '/posts', query: { category: data.category } }"
                        v-text="data.category || 'Technology'"
                        class="hover:underline hover:text-black dark:hover:text-gray-300"
                    ></NuxtLink>
                    <span
                        class="tracking-wider"
                        v-text="new Date(data.modifyTime || '2021-11-11').toDateString()"
                    ></span>
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
                        {{ data.viewed }}
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
                            class="feather feather-message-square mr-1"
                        >
                            <path
                                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            />
                        </svg>
                        {{ data.comment }}
                    </div>
                    <div class="inline-flex items-center cursor-pointer" @click="like(data.code)">
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
                            class="feather feather-heart mr-1 transform hover:scale-150 hover:fill-current transition duration-300"
                        >
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            />
                        </svg>
                        {{ data.likes }}
                    </div>
                </div>
                <h2
                    class="my-3 text-xl md:text-2xl lg:text-3xl font-bold dark:text-gray-100"
                    v-text="data.title || 'SecurityRandom的getInstanceStrong() 阻塞问题'"
                ></h2>
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
                    class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:text-gray-100 prose-blue max-w-none"
                    v-html="rendered || '这里是内容'"
                ></div>
                <div class="bg-gray-100 dark:bg-gray-600 my-8 p-8">
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
            <CommonComment />
        </div>
        <LayoutAside class="hidden lg:block my-8" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const data = ref({});
const previous = ref({});
const next = ref({});
const comments = ref([]);
const rendered = computed(() => "");

//点赞
const like = async (code: string) => {

};

</script>