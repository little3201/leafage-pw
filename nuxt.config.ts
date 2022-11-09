export default defineNuxtConfig({
    css: [
        '~/assets/css/tailwind.css',
    ],
    typescript: {
        shim: false
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    }
})
