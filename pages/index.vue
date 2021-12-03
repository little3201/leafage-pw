<template>
    <div id="home">
        <div class="grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-6 mb-8">
            <Card
                v-for="(data, index) in recentDatas"
                :key="index"
                :data="data"
                :aspect="(index < 4 && index > 1) ? true : false"
            />
        </div>
        <div class="flex justify-between space-x-8 my-8">
            <div class="w-full">
                <Tab @chageParams="chageParams" :datas="tabs" />
                <div class="grid grid-cols-2 gap-4 md:gap-8 my-8">
                    <Item v-for="data in datas" :key="data.code" :data="data" />
                </div>
                <Pagation :page="page" :size="size" :total="total" @retrieve="chageParams" />
            </div>
            <LazyAside class="hidden lg:block" />
        </div>
    </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
    name: "Home",

    head() {
        return {
            title: "Leafage - Posts",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Leafage 是一个开源的博客网站，记录，总结自己平时在学习、工作中遇到的问题的解决方法，或者一些其他的内容记录。",
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content:
                        "leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js, markdown, highlight",
                },
            ]
        }
    },
    scrollToTop: true,

    data() {
        return {
            recentDatas: [],
            datas: [],
            category: '',
            tabs: [
                {
                    code: "likes",
                    alias: "Most Likes"
                },
                {
                    code: "viewed",
                    alias: "Most Viewed"
                },
                {
                    code: "comment",
                    alias: "Most Comments"
                }
            ],
            page: 0,
            size: 10,
            total: 0
        }
    },

    methods: {
        async chageParams(num, code) {
            this.page = num ? num : 0;
            this.category = code
            await Promise.all([
                this.$axios.get(SERVER_URL.posts, {
                    params: { page: 0, size: 10, order: "likes" },
                }).then(res => this.datas = res.data),
                this.$axios.get(SERVER_URL.posts.concat("/count"))]).then(res => this.total = res.data);
        }
    },

    asyncData({ $axios }) {
        let recentDatas = $axios.$get(SERVER_URL.posts, { params: { page: 0, size: 6 } })
        return { recentDatas }
    }
}
</script>
