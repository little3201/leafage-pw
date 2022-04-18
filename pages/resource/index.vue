<template>
    <div>
        <Tab @chageParams="chageParams" :datas="categoryData.content" />
        <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8">
            <NuxtLink v-for="data in resource.content" :key="data.code" :to="'/resource/detail/' + data.code"
                class="group">
                <div class="w-full aspect-w-4 aspect-h-5 bg-gray-300 overflow-hidden border">
                    <img :src="data.cover" :alt="data.title"
                        class="w-full h-full object-center grayscale group-hover:opacity-75" height="350" width="278" />
                </div>
                <p class="my-2 text-base font-medium text-gray-800 dark:text-gray-300 group-hover:underline">《{{
                    data.title
                }}》</p>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
                    <div>
                        <div class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-eye mr-1">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            {{ data.viewed }}
                        </div>
                        <div class="inline-flex items-center mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-download-cloud mr-1">
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
        <div v-if="!resource.last" class="text-center my-6 text-gray-400">
            <button type="button" @click="viewMore"
                class="font-semibold hover:text-gray-600 px-2 py-1 rounded focus:outline-none">
                View More
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevrons-down mx-auto">
                    <polyline points="7 6 12 11 17 6" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "Resource",
    head() {
        return {
            title: "Resource - Leafage",
        }
    },

    data() {
        return {
            resource: {},
            page: 0,
            category: undefined
        }
    },

    async asyncData({ $axios }) {
        let [resource, categoryData] = await Promise.all([
            $axios.$get(SERVER_URL.resource, { params: { page: 0, size: 12 } }),
            $axios.$get(SERVER_URL.category, { params: { page: 0, size: 99 } })]
        )
        return { resource, categoryData }
    },

    methods: {
        chageParams(code) {
            if (code) {
                this.category = code
            }
            this.resource.content = []
            this.retrieve();
        },

        async retrieve() {
            await this.$axios.get(SERVER_URL.resource, {
                params: { page: this.page, size: 12, category: this.category }
            }).then(res => {
                if (res.data.content) {
                    for (let i in res.data.content) {
                        this.resource.content.push(res.data.content[i])
                    }
                    this.resource.last = res.data.last
                }
            })
        },

        viewMore() {
            this.page = this.page + 1;

            this.retrieve();
        }
    }
}
</script>