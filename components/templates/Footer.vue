<template>
  <footer class="bg-black">
    <section class="container mx-auto px-2 md:px-12 lg:px-16 xl:px-20">
      <div class="md:flex md:justify-between items-center text-white md:h-32">
        <div
          class="flex justify-center text-3xl tracking-widest font-black uppercase py-4"
        >
          <nuxt-link title="leafage" to="/">Leafage</nuxt-link>
        </div>
        <div class="flex justify-center space-x-6 sm:my-4">
          <a
            title="github"
            href="https://github.com/little3201"
            rel="noopener"
            target="_blank"
            >Github</a
          >
          <a
            title="gitee"
            href="https://gitee.com/little3201"
            rel="noopener"
            target="_blank"
            >Gitee</a
          >
        </div>
        <div
          class="flex justify-center space-x-10 uppercase font-extrabold my-4"
        >
          <nuxt-link title="about" to="/about">About</nuxt-link>
          <nuxt-link title="contact" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </section>
    <section
      class="py-3 text-xs text-center text-gray-400 container mx-auto px-2 md:px-12 lg:px-16 xl:px-20"
    >
      <p class="border-t border-gray-700 py-3">
        &copy; {{ new Date().getFullYear() }} leafage.top All Rights Reserved.
      </p>
      <p>
        <a href="https://beian.miit.gov.cn" rel="noopener" target="_blank"
          >陕ICP备19017836号-1</a
        >
      </p>
    </section>
  </footer>
</template>