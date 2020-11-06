<template>
  <footer class="bg-gray-800">
    <div class="container mx-auto px-6 py-4">
      <div class="lg:flex">
        <div class="w-full lg:w-2/5 -mx-6">
          <div class="px-6">
            <div>
              <nuxt-link
                to="/"
                class="text-xl font-bold text-gray-100 hover:text-gray-400"
              >
                <img src="../static/logo.svg" class="w-12">
              </nuxt-link>
            </div>

            <p class="mt-2 text-gray-400 max-w-md">
              布吉岛，一座永不沉没的网络小岛！
            </p>

            <div class="flex mt-4 -mx-2">
              <a
                href="https://github.com/little3201/abeille-ui"
                class="mx-2 text-gray-100 hover:text-gray-400"
                aria-label="github"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </a>

              <a
                href="https://gitee.com/little3201/abeille-ui"
                class="mx-2 text-gray-100 hover:text-gray-400"
                aria-label="gitlab"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-gitlab"
                >
                  <path
                    d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:flex-1">
          <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div>
              <h3 class="text-gray-100 uppercase">About</h3>
              <a href="#" class="block mt-2 text-sm text-gray-400">Dialy</a>
              <a href="#" class="block mt-2 text-sm text-gray-400">Vita</a>
            </div>

            <div>
              <h3 class="text-gray-100 uppercase">Blog</h3>
              <a href="#" class="block mt-2 text-sm text-gray-400">Technology</a>
              <a href="#" class="block mt-2 text-sm text-gray-400">Travels</a>
              <a href="#" class="block mt-2 text-sm text-gray-400">Reading</a>
            </div>

            <div>
              <h3 class="text-gray-100 uppercase">Resources</h3>
              <a href="#" class="block mt-2 text-sm text-gray-400"
                >Nginx Config</a
              >
              <a href="#" class="block mt-2 text-sm text-gray-400"
                >Nuxt.js</a
              >
              <a href="#" class="block mt-2 text-sm text-gray-400">Tailwindcss</a>
            </div>

            <div>
              <h3 class="text-gray-100 uppercase">Contact</h3>
              <span class="block mt-2 text-sm text-gray-400"
                >973587585</span
              >
              <span class="block mt-2 text-sm text-gray-400"
                >little3201@163.com</span
              >
            </div>
          </div>
        </div>
      </div>

      <hr class="h-px my-6 bg-gray-700 border-none" />

      <div>
        <p class="text-center text-gray-100">
          &copy; {{ new Date().getFullYear() }} Abeille - All Rights Reserved -
          陕ICP备19017836号-1
        </p>
      </div>
    </div>
  </footer>
</template>