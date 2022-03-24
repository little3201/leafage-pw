import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            // add Postcss options
            postcssOptions: require('./postcss.config.js')
        }
    },
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1',
                    changeOrigin: true
                }
            }
        }
    }
})
