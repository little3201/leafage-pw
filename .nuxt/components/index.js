export { default as AboutMe } from '../../components/AboutMe.vue'
export { default as Social } from '../../components/Social.vue'
export { default as Starts } from '../../components/Starts.vue'
export { default as ContactFrom } from '../../components/sections/ContactFrom.vue'
export { default as ContactUs } from '../../components/sections/ContactUs.vue'
export { default as NewsLeter } from '../../components/sections/NewsLeter.vue'
export { default as Profiles } from '../../components/sections/Profiles.vue'

export const LazyAboutMe = import('../../components/AboutMe.vue' /* webpackChunkName: "components/AboutMe'}" */).then(c => c.default || c)
export const LazySocial = import('../../components/Social.vue' /* webpackChunkName: "components/Social'}" */).then(c => c.default || c)
export const LazyStarts = import('../../components/Starts.vue' /* webpackChunkName: "components/Starts'}" */).then(c => c.default || c)
export const LazyContactFrom = import('../../components/sections/ContactFrom.vue' /* webpackChunkName: "components/sections/ContactFrom'}" */).then(c => c.default || c)
export const LazyContactUs = import('../../components/sections/ContactUs.vue' /* webpackChunkName: "components/sections/ContactUs'}" */).then(c => c.default || c)
export const LazyNewsLeter = import('../../components/sections/NewsLeter.vue' /* webpackChunkName: "components/sections/NewsLeter'}" */).then(c => c.default || c)
export const LazyProfiles = import('../../components/sections/Profiles.vue' /* webpackChunkName: "components/sections/Profiles'}" */).then(c => c.default || c)
