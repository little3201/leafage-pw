import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    buildModules: [
        '@unocss/nuxt',
    ],
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        typography: true,
        components: false
    }
})
