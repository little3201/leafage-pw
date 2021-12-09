<template>
    <div>
        <Html :lang="'en'">
            <Head>
                <Title>Leafage - {{ data.title }}</Title>
                <Meta name="description" :content="data.title" />
                <Meta name="keywords" :content="data.tags.toString()" />
            </Head>
        </Html>
        <div class="flex space-x-8 border-t border-gray-900 dark:border-gray-300">
            <div class="my-6 w-full">
                <article>
                    <h2
                        class="text-xl md:text-2xl lg:text-3xl font-bold dark:text-gray-300"
                    >{{ data.title }}</h2>
                    <div class="md:flex text-sm space-x-6 text-gray-800 dark:text-gray-300 my-4">
                        <NuxtLink
                            :title="data.category"
                            :to="{ name: 'posts', params: { category: data.category } }"
                            class="hover:underline hover:text-gray-900 dark:hover:text-gray-300"
                        >{{ data.category }}</NuxtLink>
                        <span
                            class="tracking-wider"
                        >{{ new Date(data.modifyTime || '2021-11-11').toLocaleDateString() }}</span>
                        <div class="inline-flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
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
                                stroke-width="1.5"
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
                                stroke-width="1.5"
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
                        class="prose prose-sm sm:prose lg:prose-lg dark:text-gray-300 dark:prose-blue max-w-none"
                        v-html="rendered"
                    ></div>

                    <div class="inline-flex items-center space-x-2 mt-4 dark:text-gray-300">
                        <span
                            v-for="(tag, index) in data.tags"
                            :key="index"
                            class="text-xs text-gray-900 bg-gray-200 rounded-md px-2 py-1"
                        >{{ "#" + tag }}</span>
                    </div>

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
                    <div class="my-6">
                        <div class="items-center -mx-2 md:flex">
                            <div class="w-full mx-2">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                >Name</label>

                                <input
                                    class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900"
                                    type="text"
                                />
                            </div>

                            <div class="w-full mx-2 mt-4 md:mt-0">
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                                >E-mail</label>

                                <input
                                    class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                            >Message</label>

                            <textarea
                                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900"
                            ></textarea>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button
                                class="px-4 py-2 text-white transition-colors duration-200 transform border-gray-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >Send Message</button>
                        </div>
                    </div>
                    <Comment v-for="data in comments" :data="data" />
                </div>
            </div>
            <LayoutAside class="hidden lg:block my-8" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    layout: "default"
};
</script>

<script lang="ts" setup>
const { params } = useRoute();

const data = ref({
    code: params.code,
    title: '这是文件title',
    tags: ['nuxt', 'leafage'],
    content: '### 这里是内容',
    category: 'Technology',
    viewed: 239,
    comment: 23,
    likes: 2323,
    modifyTime: new Date()
})
const rendered = computed(() => '### 这里是内容');

const [{ data: previous }, { data: next }, { data: comments }] = await Promise.all([
    useFetch('/api/posts/previous'),
    useFetch('/api/posts/next'),
    useFetch('/api/comment')
])
// const { data } = await useAsyncData('fetch', () => $fetch(`/api/posts/${params.code}`))
</script>