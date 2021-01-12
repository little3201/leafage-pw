<template>
  <section class="mb-12">
    <ul class="flex justify-center items-center">
      <li class="mx-4">
        <button class="disabled:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </li>
      <li class="mx-4" v-for="page in pages" :key="page">
        <button
          class="w-8 h-8 focus:bg-black focus:text-white rounded-full border border-black hover:bg-black hover:text-white"
        >
          {{ page }}
        </button>
      </li>
      <li class="mx-4">
        <button class="disabled:opacity-25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </li>
    </ul>
  </section>
</template>