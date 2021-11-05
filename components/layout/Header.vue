<template>
    <div class="flex justify-between items-center py-3 md:py-5 text-black dark:text-gray-100">
        <nav class="inline-flex items-center space-x-6 tracking-wide text-xs uppercase">
            <NuxtLink title="home" to="/" class="font-bold">Home</NuxtLink>
            <NuxtLink title="posts" to="/posts" class="font-bold">Posts</NuxtLink>
            <NuxtLink title="resource" to="/resource" class="font-bold">Resource</NuxtLink>
            <NuxtLink title="about" to="/about/" class="font-bold">About</NuxtLink>
        </nav>
        <div class="inline-flex items-center">
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
            <button
                title="Toggle Theme"
                @click="theme"
                class="w-10 mx-1 rounded-full bg-gray-300 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none ring-1 ring-gray-400 dark:ring-gray-300 border-transparent"
            >
                <div
                    id="toggle"
                    class="rounded-full w-4 h-4 bg-gray-700 dark:bg-gray-200 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"
                ></div>
            </button>
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
                class="feather feather-moon"
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <a
                title="contact me"
                class="flex items-center uppercase text-xs font-bold tracking-wide mx-6"
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
import { ref } from "vue";

const isSearch = ref(false)

const theme = () => {
    document.documentElement.classList.toggle('dark')
}
</script>