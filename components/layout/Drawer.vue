<template>
  <div
    v-show="isShow"
    class="fixed inset-0 overflow-hidden z-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div class="pointer-events-none fixed inset-y-0 right-0 flex w-full">
        <div class="pointer-events-auto w-screen">
          <div class="flex h-screen flex-col overflow-y-scroll bg-white dark:bg-gray-900">
            <div class="flex justify-between items-center p-4">
              <button
                type="button"
                @click="closeOperation"
                class="rounded-md dark:text-white focus:outline-none"
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
              <button
                title="Toggle Theme"
                @click="theme"
                class="relative focus:outline-none transition-colors duration-500 ease-in border-transparent"
              >
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                  width="24"
                  height="24"
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
            </div>

            <div>
              <Logo />
              <nav
                @click="isShow = false"
                class="grid grid-rows-4 gap-4 text-base uppercase font-semibold text-center mt-8"
              >
                <NuxtLink title="home" class="py-2" to="/">Home</NuxtLink>
                <NuxtLink title="posts" class="py-2" to="/posts">Posts</NuxtLink>
                <NuxtLink title="resource" class="py-2" to="/resource">Resource</NuxtLink>
                <NuxtLink title="about" class="py-2" to="/about">About</NuxtLink>
              </nav>
              <a
                title="contact me"
                class="flex items-center justify-center text-base uppercase font-semibold mt-4 py-2"
                href="mailto:little3201@163.com"
                rel="noopener"
                aria-label="contact me"
              >Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer",

  props: {
    isShow: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      isDark: false,

    }
  },

  methods: {
    theme() {
      this.isDark = !this.isDark
      if (this.isDark) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add('dark')
      } else {
        localStorage.removeItem('theme')
        document.documentElement.classList.remove('dark')
      }
    },

    closeOperation() {
      this.$emit("closeAction", false);
    }
  }
}
</script>