export default defineNuxtConfig({
    css: [
        '@/assets/css/tailwind.css',
    ],
    typescript: {
        shim: false
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
