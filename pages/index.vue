<template>
    <div id="home">
        <div class="grid lg:grid-rows-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Gallery
                v-for="(data, index) in recentDatas"
                :key="index"
                :data="data"
                :aspect="(index < 4 && index > 1) ? true : false"
            />
        </div>
        <div class="flex justify-between space-x-8 my-8">
            <div class="w-full">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 xl:grid-cols-3 my-8">
                    <Item v-for="data in datas" :key="data.code" :data="data" />
                </div>
                <LazyPagation :page="page" :size="size" :total="total" @chagePage="chageParams" />
            </div>
            <LazyAside />
        </div>
    </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "Home",
    scrollToTop: true,

    async asyncData({ $axios }) {
        let [recentDatas, datas, total] = await Promise.all([
            $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 6 } }),
            $axios.$get(SERVER_URL.posts, {
                params: { page: 0, size: 12, order: "likes" },
            }),
            $axios.$get(SERVER_URL.posts.concat("/count"))
        ]);
        return { recentDatas, datas, total };
    },

    data() {
        return {
            datas: [],
            tabs: [
                {
                    code: "likes",
                    alias: "Trending"
                },
                {
                    code: "viewed",
                    alias: "Most View"
                },
                {
                    code: "comment",
                    alias: "Popular"
                }
            ],
            page: 0,
            size: 12,
            total: 0,
            sort: "likes"
        };
    },

    methods: {
        chageParams(num, code) {
            this.page = num ? num : 0;
            if (code) {
                this.sort = code
            }
            this.retrieve()
        },
        async retrieve() {
            await Promise.all([
                this.$axios.get(SERVER_URL.posts, {
                    params: { page: this.page, size: this.size, sort: this.sort },
                }).then(res => this.datas = res.data),
                this.$axios.get(SERVER_URL.posts.concat("/count")).then(res => this.total = res.data)
            ]);
        }
    }

}
</script>
