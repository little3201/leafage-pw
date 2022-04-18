<template>
    <div>
        <Tab @chageParams="chageParams" :datas="categoryData.content" />
        <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-8">
            <Item v-for="data in posts.content" :key="data.code" :data="data" />
        </div>
        <div v-if="!posts.last" class="text-center my-6 text-gray-400">
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
    name: "Posts",

    head() {
        return {
            title: "Posts - Leafage",
        }
    },

    async asyncData({ $axios }) {
        let [posts, categoryData] = await Promise.all([
            $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 16, order: "likes" } }),
            $axios.$get(SERVER_URL.category, { params: { page: 0, size: 99 } })
        ])

        return { posts, categoryData }
    },

    data() {
        return {
            posts: {},
            page: 0,
            category: undefined
        }
    },

    methods: {
        chageParams(code) {
            if (code) {
                this.category = code
            }
            this.retrieve();
        },

        async retrieve() {
            await this.$axios.get(SERVER_URL.posts, {
                params: { page: this.page, size: 12, category: this.category },
            }).then(res => {
                if (res.data.content) {
                    for (let i in res.data.content) {
                        this.posts.content.push(res.data.content[i])
                    }
                    this.posts.last = res.data.last
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