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
                        >{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-thumbs-up mr-1"
                            >
                                <path
                                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                                />
                            </svg>
                            {{ data.likes }}
                        </div>
                    </div>

                    <div class="inline-flex items-center space-x-2 mb-8 dark:text-gray-300">
                        <span
                            v-for="(tag, index) in data.tags"
                            :key="index"
                            class="text-xs text-gray-900 bg-gray-200 rounded-md px-2 py-1"
                        >{{ "#" + tag }}</span>
                    </div>

                    <div
                        ref="renderedHtmlRef"
                        class="prose prose-sm lg:prose-lg xl:prose-xl dark:text-gray-300 dark:prose-blue max-w-none"
                        v-html="renderedHtml(data.content)"
                    ></div>

                    <section class="flex items-center justify-center my-8">
                        <span class="text-xl text-gray-400">如果觉得文章有帮助，就点个赞鼓励一下吧！</span>
                        <button
                            type="button"
                            @click="likes(data.code)"
                            class="rounded-full p-2 border text-gray-400 hover:text-gray-600 hover:border-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-thumbs-up cursor-pointer"
                            >
                                <path
                                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                                />
                            </svg>
                        </button>
                    </section>

                    <div class="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 my-8 p-8 rounded">
                        <ul
                            class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-xs font-bold"
                        >
                            <li v-if="previous[0]">
                                <NuxtLink
                                    :title="previous[0].title"
                                    :to="'/posts/detail/' + previous[0].code"
                                    class="flex items-center transform hover:-translate-x-2 transition duration-500"
                                >
                                    <svg
                                        v-show="previous[0]"
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
                                    {{ previous[0].title }}
                                </NuxtLink>
                            </li>
                            <li class="flex items-center justify-end" v-if="next[1]">
                                <NuxtLink
                                    :title="next[1].title"
                                    :to="'/posts/detail/' + next[1].code"
                                    class="flex items-center transform hover:translate-x-2 transition duration-500"
                                >
                                    {{ next[1].title }}
                                    <svg
                                        v-show="next[1]"
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
                <form class="my-6">
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                            <input
                                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                type="text"
                            />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label
                                class="text-sm font-medium text-gray-600 dark:text-gray-200"
                            >E-mail</label>
                            <input
                                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                type="email"
                            />
                        </div>
                    </div>

                    <div class="w-full my-4">
                        <label class="text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                        <textarea
                            class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        ></textarea>
                    </div>

                    <div class="flex justify-end">
                        <button
                            @click="onsubmit"
                            class="px-4 py-2 transition-colors duration-200 transform border border-gray-300 dark:bg-gray-600 dark:text-gray-300 bg-gray-100 rounded-md hover:bg-gray-300 focus:outline-none"
                        >Send Message</button>
                    </div>
                </form>
                <LazyComment v-for="data in comments" :data="data" />
            </div>
        </div>

        <LazyPreview :isShow="view.isShow" @closeAction="previewOperation">
            <img :src="view.url" alt="preview" class="w-full h-full" width="640" height="427" />
        </LazyPreview>
    </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();
const { $marked } = useNuxtApp()

const renderedHtmlRef = ref()

let view = reactive({
    isShow: false,
    url: ''
})

const { data } = await useAsyncData('detail', () => $fetch(`https://www.leafage.top/api/posts/details/${params.code}`))

const [{ data: previous }, { data: next }, { data: comments }] = await Promise.all([
    useFetch(`https://www.leafage.top/api/posts/${params.code}/previous`),
    useFetch(`https://www.leafage.top/api/posts/${params.code}/next`),
    useFetch(`https://www.leafage.top/api/comment/${params.code}`)
])

onMounted(() => {
    addImgClickEvent()
})
/**
 * marked 解析
 * @param content 原内容
 */
const renderedHtml = (content: string) => {
    if (content && content.length > 0) {
        return $marked.parse(content).replace(/href="/gi, 'target="_blank" href="')
    }
    return ""
}
/**
 * 给img添加双击事件
 */
const addImgClickEvent = () => {
    if (renderedHtmlRef) {
        let imgs = renderedHtmlRef.value.querySelectorAll("img");
        if (imgs.length > 0) {
            setTimeout(() => {
                for (let i = 0, len = imgs.length; i < len; i++) {
                    imgs[i].onclick = () => {
                        const src = imgs[i].getAttribute("src");
                        previewOperation(true, src);
                    };
                }
            }, 600);
        }
    }
}
/**
 * 预览操作
 */
const previewOperation = (show: boolean, url: string) => {
    if (show) {
        view.url = url
    }
    view.isShow = show
}
/**
 * 点赞
 */
const likes = () => { }
</script>