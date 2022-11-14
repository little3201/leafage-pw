<template>
    <div
        class="flex justify-between items-center mx-4 md:mx-0 py-3 md:py-5 text-neutral-900 dark:text-neutral-300"
    >
        <button
            @click="isShow = !isShow"
            type="button"
            aria-label="openMenu"
            class="focus:outline-none md:hidden"
        >
            <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
        <Drawer :isShow="isShow" @closeAction="drawerOperation" />

        <nav
            class="hidden md:inline-flex items-center space-x-6 tracking-wide font-semibold text-xs uppercase"
        >
            <NuxtLink title="home" to="/">Home</NuxtLink>
            <NuxtLink title="posts" to="/posts">Posts</NuxtLink>
            <NuxtLink title="resource" to="/resource">Resource</NuxtLink>
            <NuxtLink title="about" to="/about">About</NuxtLink>
        </nav>
        <div class="inline-flex items-center">
            <button
                title="Toggle Theme"
                @click="theme"
                class="hidden md:block relative focus:outline-none transition-colors duration-500 ease-in border-transparent"
            >
                <svg
                    v-if="isDark"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-moon"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-sun"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            </button>

            <a
                title="contact me"
                class="hidden md:flex items-center uppercase text-xs font-bold tracking-wide mx-6"
                href="mailto:little3201@163.com"
                rel="noopener"
                aria-label="contact me"
            >
                <svg
                    style="display: unset"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail mr-2"
                >
                    <path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
            </a>
            <button
                type="button"
                title="search"
                class="focus:outline-none"
                aria-label="searchOpen"
                @click="isSearch = !isSearch"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";

import Drawer from './Drawer.vue'

const isSearch = ref(false)
const isDark = ref(false)
const isShow = ref(false)

const theme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
    } else {
        localStorage.removeItem('theme')
        document.documentElement.classList.remove('dark')
    }
}

onBeforeMount(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
/**
 * 操作
 */
const drawerOperation = (show: boolean) => {
    isShow.value = show
}
</script>