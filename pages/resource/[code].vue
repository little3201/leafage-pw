<template>
    <div class="border-t border-neutral-900 dark:border-neutral-300 my-6">
        <article class="my-6">
            <h2 class="my-4 text-3xl font-semibold text-center dark:text-neutral-300">{{ resource.title }}</h2>
            <div class="dark:text-neutral-300">
                <figure class="w-72 h-96 mx-auto border my-8">
                    <img :src="resource.cover" :alt="resource.title" class="w-72 h-96" height="350" width="278" />
                </figure>
                <div class="text-sm text-neutral-600 dark:text-neutral-400 my-2 md:flex justify-center">
                    <span class="my-2">{{ new Date(resource.modifyTime).toLocaleString() }}</span>
                    <div class="flex space-x-4 my-2 md:my-0 md:mx-4">
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-eye mr-1">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            {{ resource.viewed }}
                        </span>
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-download-cloud mr-1">
                                <polyline points="8 17 12 21 16 17" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
                            </svg>
                            {{ resource.downloads }}
                        </span>
                    </div>
                </div>
                <article class="prose max-w-none mx-auto lg:prose-lg dark:text-neutral-300" v-html="renderedHtml"></article>
            </div>
        </article>

        <section class="flex items-center justify-center my-6">
            <button type="button" @click="download()"
                class="rounded-md px-4 py-2 border border-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600 hover:bg-neutral-100">Download</button>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { getCookie } from '@/utils/ck'
import { Resource } from '@/lib/request.type';

const { $markdownToHtml } = useNuxtApp()
const { params } = useRoute();

const renderedHtml = ref()

const { data: resource } = await useFetch<Resource>(`/api/resources/${params.code}`)

onMounted(() => {
    markdownToHtml(resource.value?.description)
})

/**
 * marked 解析
 * @param content 原内容
 */
const markdownToHtml = async (content: string) => {
    if (content && content.length > 0) {
        renderedHtml.value = await $markdownToHtml(content)
    }
}
/**
 * 下载
 */
const download = async () => {
    await $fetch(`/api/posts/${params.code}/like`, {
        method: 'GET',
        headers: {
            'X-CSRF-TOKEN': getCookie('XSRF-TOKEN')
        },
        credentials: 'include'
    })
}
/**
 * 模拟鼠标点击，下载文件
 * @param blob 字节流
 * @param fileName 输出文件名
 */
const downloadFile = (blob: Blob, fileName: string) => {
    const anchor: HTMLAnchorElement = document.createElement('a')
    anchor.href = URL.createObjectURL(blob)
    anchor.download = fileName || ''
    let event: MouseEvent
    if (window.MouseEvent) {
        event = new MouseEvent('click')
    } else {
        event = document.createEvent('MouseEvents')
    }
    anchor.dispatchEvent(event)
}
</script>