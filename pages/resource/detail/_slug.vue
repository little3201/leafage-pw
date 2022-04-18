<template>
    <div class="border-t border-gray-900 dark:border-gray-300 my-6">
        <article class="my-6">
            <h2 class="my-4 text-3xl font-semibold text-center dark:text-gray-300">{{ data.title }}</h2>
            <div class="dark:text-gray-300">
                <figure class="w-72 h-96 mx-auto border">
                    <img :src="data.cover" :alt="data.title" class="w-72 h-96" height="350" width="278" />
                </figure>
                <div class="text-sm text-gray-600 dark:text-gray-400 my-2 md:flex justify-center">
                    <span class="my-2">{{ new Date(data.modifyTime).toLocaleString() }}</span>
                    <div class="flex space-x-4 my-2 md:my-0 md:mx-4">
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-eye mr-1">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            {{ data.viewed }}
                        </span>
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-download-cloud mr-1">
                                <polyline points="8 17 12 21 16 17" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
                            </svg>
                            {{ data.downloads }}
                        </span>
                    </div>
                </div>
                <p>{{ data.description }}</p>
            </div>
        </article>

        <section class="flex items-center justify-center my-6">
            <button type="button" @click="download(data.code)"
                class="rounded-md px-4 py-2 border border-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-100 dark:border-gray-200">Download</button>
        </section>
    </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "ReourceSlug",
    scrollToTop: true,
    head() {
        return {
            title: this.data.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.data.description,
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: this.data.title,
                },
            ],
            link: [
                {
                    rel: "canonical",
                    href: "https://www.leafage.top/resource/detail/" + this.data.code,
                },
            ],
        };
    },

    async asyncData({ $axios, params }) {
        let data = await $axios.$get(SERVER_URL.resource.concat("/", params.slug))

        return { data };
    },

    methods: {
        /**
         * 下载
         */
        download(code) {
            alert("developing...")
        }
    }
}
</script>
