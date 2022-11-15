export default defineNuxtConfig({
    css: [
        '~/assets/css/tailwind.css',
    ],
    typescript: {
        strict: true,
        shim: false
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
