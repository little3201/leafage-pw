import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    title: 'abeille | 布吉岛',
    description: '布吉岛，一座永不沉没的网络小岛',
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