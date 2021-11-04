<template>
    <div class="flex justify-between items-center py-3 md:py-5">
        <nav class="inline-flex items-center space-x-6 tracking-wide text-xs text-black uppercase">
            <NuxtLink title="home" to="/" class="font-bold">Home</NuxtLink>
            <NuxtLink title="posts" to="/posts" class="font-bold">Posts</NuxtLink>
            <NuxtLink title="resource" to="/resource" class="font-bold">Resource</NuxtLink>
            <NuxtLink title="about" to="/about/" class="font-bold">About</NuxtLink>
        </nav>
        <div class="inline-flex items-center">
            <a
                title="contact me"
                class="text-gray-600 flex items-center uppercase text-xs font-bold tracking-wide"
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
                    stroke-width="1.5"
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
                class="ml-6 mr-0 focus:outline-none"
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
                    stroke-width="1.5"
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
</script>