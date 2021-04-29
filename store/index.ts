import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    code: '',
    title: 'Leafage',
    keywords: "leafage, 博客, 技术, 技术笔记, 技术资料, 经验记录, 解决方案, nuxt.js, vue.js, typescript, tailwindcss, java, javascript",
    description: 'leafage，一个使用 Nuxt.js、 Tailwindcss 的博客网站，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的知识站点',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    code: state => state.code,
    title: state => state.title,
    keywords: state => state.keywords,
    description: state => state.description,
}

export const mutations: MutationTree<RootState> = {
    CHANGE_CODE: (state, code: string) => (state.code = code),
    CHANGE_TITLE: (state, title: string) => (state.title = title),
    CHANGE_KEYWORDS: (state, keywords: string) => (state.keywords = keywords),
    CHANGE_DESCTIPTION: (state, description: string) => (state.description = description),
}