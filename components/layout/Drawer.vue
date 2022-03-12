<template>
    <div
        v-show="isShow"
        class="fixed inset-0 overflow-hidden z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            ></div>
            <div class="pointer-events-none fixed inset-y-0 right-0 flex w-full">
                <div class="pointer-events-auto w-screen">
                    <div class="flex h-screen flex-col overflow-y-scroll bg-white dark:bg-gray-900">
                        <button
                            type="button"
                            @click="closeOperation"
                            class="rounded-md text-gray-300 hover:text-white focus:outline-none p-4"
                        >
                            <span class="sr-only">Close</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-x"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div>
                            <Logo />
                            <nav
                                @click="isShow = false"
                                class="grid grid-rows-4 gap-8 text-base uppercase font-semibold text-center mt-4"
                            >
                                <NuxtLink title="home" to="/">Home</NuxtLink>
                                <NuxtLink title="posts" to="/posts">Posts</NuxtLink>
                                <NuxtLink title="resource" to="/resource">Resource</NuxtLink>
                                <NuxtLink title="about" to="/about">About</NuxtLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Logo from './Logo.vue'

defineProps({
    isShow: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(["closeAction"]);

const closeOperation = () => {
    emit("closeAction", false);
};
</script>