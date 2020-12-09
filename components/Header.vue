<template>
  <header>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto sm:mx-16 px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              class="text-2xl tracking-widest font-black uppercase text-black leading-7"
            >
              <h2>Heeney</h2>
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          <nav class="hidden md:flex space-x-6 tracking-wide">
            <a href="#" class="text-xs font-extrabold uppercase text-black">
              Home
            </a>
            <a href="#" class="text-xs font-extrabold uppercase text-black">
              Standard Posts
            </a>
            <a href="#" class="text-xs font-extrabold uppercase text-black">
              About
            </a>
            <a href="#" class="text-xs font-extrabold uppercase text-black">
              Contact
            </a>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1">
            <a
              class="text-gray-600 uppercase text-xs font-bold tracking-wide"
              href="#"
              title=""
            >
              <svg
                style="display: unset"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Subscribe
            </a>
            <a class="ml-4" href="#" title="">
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Header",

  setup() {
    // soluations
    const cartOpen = ref(false);
    // more
    const isOpen = ref(false);
    // menu
    const menuOpen = ref(false);

    return {
      cartOpen,
      isOpen,
      menuOpen,
    };
  },
});
</script>
