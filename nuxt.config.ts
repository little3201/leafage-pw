import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    components: {
        global: true,
        dirs: ['~/components']
    },
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            // add Postcss options
            postcssOptions: require('./postcss.config.js')
        }
    }
})
