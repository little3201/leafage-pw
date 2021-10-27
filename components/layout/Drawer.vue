<template>
    <div class="-my-2 md:hidden">
        <button
            type="button"
            aria-label="openMenu"
            @click="isOpen = !isOpen"
            class="m-2 items-center justify-center focus:outline-none"
        >
            <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
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
    </div>
</template>


<script lang="ts" setup>
const isOpen = ref(false)
</script>