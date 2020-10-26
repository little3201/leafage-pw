<template>
  <footer class="mt-16">
    <div class="border-t md:px-4 md:pt-10 md:pb-5">
      <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
        <section
          class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              @click="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-black-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              System
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
            href="#"
          >
            System
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="https://console.abeille.top" target="_blank">Console</a>
              </li>
            </ul>
          </article>
        </section>
        <section
          class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              @click="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-black-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              Resource
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
            href="#"
          >
            Resource
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="#">Github</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">Gitee</a>
              </li>
            </ul>
          </article>
        </section>
        <section
          class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              @click="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-black-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              Link
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
            href="#"
          >
            Link
          </a>
          <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
            <ul class="my-5 text-sm tracking-wide">
              <li class="my-3 tracking-wide">
                <a href="#">csdn</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">掘金</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">知乎</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">思否</a>
              </li>
              <li class="my-3 tracking-wide">
                <a href="#">简书</a>
              </li>
            </ul>
          </article>
        </section>
        <section
          class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
        >
          <div class="md:hidden">
            <button
              @click="toggleFooterSection(event)"
              class="uppercase text-xs font-bold tracking-wider text-black-700 focus:outline-none border-t border-white py-4 w-full text-left"
              type="button"
            >
              Quisque
            </button>
          </div>
          <a
            class="uppercase text-xs font-bold tracking-wider text-black-700 hidden md:block"
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
            &copy; {{ new Date().getFullYear() }} · 陕ICP备19017836号-1 ·
            Created by
            <a class="border-b text-blue-500" href="#" target="_blank"
              >@布吉岛</a
            >
          </p>
        </div>
        <div>
          <p class="leading-8 tracking-wide">Privacy Policy</p>
        </div>
      </section>
    </div>
  </footer>
</template>