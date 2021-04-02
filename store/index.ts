import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    code: '',
    title: 'Leafage',
    description: 'leafage，一个使用 Nuxt.js、 Tailwindcss 的博客网站，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息，提供原创、优质、完整内容的知识站点',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    code: state => state.code,
    title: state => state.title,
    description: state => state.description,
}

export const mutations: MutationTree<RootState> = {
    CHANGE_CODE: (state, code: string) => (state.code = code),
    CHANGE_TITLE: (state, title: string) => (state.title = title),
    CHANGE_DESCTIPTION: (state, description: string) => (state.description = description),
}

export const actions: ActionTree<RootState, RootState> = {
    //   async fetchThings({ commit }) {
    //     const things = await this.$axios.$get('/things')
    //     console.log(things)
    //     commit('CHANGE_TITLE', 'New name')
    //   },
}