<template>
    <div id="home">
        <div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-6 mb-8">
            <Gallery v-for="(data, index) in galleryPosts.content" :key="index" :data="data"
                :aspect="(index < 4 && index > 1) ? true : false" />
        </div>
        <div class="flex justify-between space-x-8 dark:text-gray-300">
            <div class="w-full">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-3 my-8">
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
            <LazyAside class="hidden lg:block" />
        </div>
    </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "Home",
    scrollToTop: true,

    async asyncData({ $axios }) {
        let [galleryPosts, posts] = await Promise.all([
            $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 6 } }),
            $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 12, order: "likes" } })
        ]);
        return { galleryPosts, posts };
    },

    data() {
        return {
            posts: {},
            tabs: [
                {
                    code: "likes",
                    name: "Trending"
                },
                {
                    code: "viewed",
                    name: "Most View"
                },
                {
                    code: "comment",
                    name: "Popular"
                }
            ],
            page: 0,
            sort: "likes"
        };
    },

    methods: {
        chageParams(code) {
            if (code) {
                this.sort = code
            }
            this.posts.content = []
            this.retrieve()
        },
        async retrieve() {
            await this.$axios.get(SERVER_URL.posts, {
                params: { page: this.page, size: 12, sort: this.sort },
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
