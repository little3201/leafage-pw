import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    title: 'Leafage',
    description: '一个开源的个人站点，致力于促进软件开发及相关领域知识与创新的传播。包含原创博客、生活分享、资源推荐、技术总结、影视浏览等资源信息,提供原创、优质、完整内容的专业开发社区',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    title: state => state.title,
    description: state => state.description,
}

export const mutations: MutationTree<RootState> = {
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