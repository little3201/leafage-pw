export { default as AboutMe } from '../..\\components\\sections\\AboutMe.vue'
export { default as ContactForm } from '../..\\components\\sections\\ContactForm.vue'
export { default as Features } from '../..\\components\\sections\\Features.vue'
export { default as Hero } from '../..\\components\\sections\\Hero.vue'
export { default as NewsLeter } from '../..\\components\\sections\\NewsLeter.vue'
export { default as Profiles } from '../..\\components\\sections\\Profiles.vue'
export { default as Social } from '../..\\components\\sections\\Social.vue'
export { default as Starts } from '../..\\components\\sections\\Starts.vue'

export const LazyAboutMe = import('../..\\components\\sections\\AboutMe.vue' /* webpackChunkName: "components_sections/AboutMe'}" */).then(c => c.default || c)
export const LazyContactForm = import('../..\\components\\sections\\ContactForm.vue' /* webpackChunkName: "components_sections/ContactForm'}" */).then(c => c.default || c)
export const LazyFeatures = import('../..\\components\\sections\\Features.vue' /* webpackChunkName: "components_sections/Features'}" */).then(c => c.default || c)
export const LazyHero = import('../..\\components\\sections\\Hero.vue' /* webpackChunkName: "components_sections/Hero'}" */).then(c => c.default || c)
export const LazyNewsLeter = import('../..\\components\\sections\\NewsLeter.vue' /* webpackChunkName: "components_sections/NewsLeter'}" */).then(c => c.default || c)
export const LazyProfiles = import('../..\\components\\sections\\Profiles.vue' /* webpackChunkName: "components_sections/Profiles'}" */).then(c => c.default || c)
export const LazySocial = import('../..\\components\\sections\\Social.vue' /* webpackChunkName: "components_sections/Social'}" */).then(c => c.default || c)
export const LazyStarts = import('../..\\components\\sections\\Starts.vue' /* webpackChunkName: "components_sections/Starts'}" */).then(c => c.default || c)
