export { default as AboutMe } from '../..\\components\\AboutMe.vue'
export { default as Social } from '../..\\components\\Social.vue'
export { default as Starts } from '../..\\components\\Starts.vue'

export const LazyAboutMe = import('../..\\components\\AboutMe.vue' /* webpackChunkName: "components_AboutMe'}" */).then(c => c.default || c)
export const LazySocial = import('../..\\components\\Social.vue' /* webpackChunkName: "components_Social'}" */).then(c => c.default || c)
export const LazyStarts = import('../..\\components\\Starts.vue' /* webpackChunkName: "components_Starts'}" */).then(c => c.default || c)
