<template>
  <div>
    <header>
      <nav class="fixed inset-x-0 top-0 z-10 text-white">
        <div
          class="md:max-w-6xl xl:max-w-screen-xl md:mx-auto md:flex md:items-center md:justify-between"
        >
          <div class="p-4">
            <div
              class="flex justify-between items-center font-extrabold tracking-widest text-xl"
            >
              <a href="#" class="duration-500 hover:text-indigo-500">ABEILLE</a>
              <!-- Burger Nav Button on Mobile -->
              <div
                id="nav-open"
                class="inline-block cursor-pointer md:hidden"
                @click="opened = !opened"
              >
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
                  class="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>

          <!-- Nav Items Working on Tablet & Bigger Sceen -->
          <div class="p-4 hidden md:flex flex-row justify-between font-bold">
            <a
              id="hide-after-click"
              href="#about"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
              >Portfilio</a
            >
            <a
              href="#whyus"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
              >Record</a
            >
            <a
              id="hide-after-click"
              href="#about"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
              >About</a
            >
            <a
              href="#showcase"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
              >More</a
            >
          </div>
        </div>
      </nav>

      <!-- Opened Nav in Mobile, you can use javascript/jQuery -->
      <div
        v-show="opened"
        class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
      >
        <div class="p-2 divide-y divide-gray-600 flex flex-col">
          <a href="#about" class="p-2 font-semibold hover:text-indigo-700"
            >About</a
          >
          <a href="#whyus" class="p-2 font-semibold hover:text-indigo-700"
            >Why Us ?</a
          >
          <a href="#showcase" class="p-2 font-semibold hover:text-indigo-700"
            >Our Products</a
          >
        </div>
      </div>
    </header>
    <Nuxt />
    <!-- component -->
    <footer class="mt-16">
      <div class="border-t md:px-4 md:pt-10 md:pb-5">
        <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                onclick="toggleFooterSection(event)"
                class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Aenean gravida orci in sem varius
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
              href="#"
            >
              Aenean gravida orci in sem varius
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Cras id ipsum</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                onclick="toggleFooterSection(event)"
                class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Donec a lorem
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
              href="#"
            >
              Donec a lorem
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Sed a diam</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Nullam luctus felis</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Sed euismod</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                onclick="toggleFooterSection(event)"
                class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Integer interdum
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
              href="#"
            >
              Integer interdum
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Dignissim gravida</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Eu mollis elit</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Hendrerit purus id</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Ut luctus dui tincidunt</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque at ligula</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <div class="md:hidden">
              <button
                onclick="toggleFooterSection(event)"
                class="uppercase text-xs font-bold tracking-wider text-pink-700 focus:outline-none border-t border-white py-4 w-full text-left"
                type="button"
              >
                Quisque
              </button>
            </div>
            <a
              class="uppercase text-xs font-bold tracking-wider text-pink-700 hidden md:block"
              href="#"
            >
              Quisque
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Finibus nulla eget</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Duis efficitur</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Cras at lacus</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto border-none px-4">
        <section
          class="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
        >
          <div>
            <p class="leading-8 tracking-wide">
              &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 · Created by
              <a
                class="border-b text-blue-500"
                href="#"
                target="_blank"
                >@布吉岛</a
              > · Inspired by 
              <a
                href="https://tailwindcomponents.com"
                target="_blank"
                class="border-b text-blue-500"
                >tailwindcomponents</a
              >
            </p>
          </div>
          <div>
            <p class="leading-8 tracking-wide">Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const opened = false;
    return {
      opened,
    };
  },
});
</script>