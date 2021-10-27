<template>
  <footer class="bg-black">
    <section class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex md:justify-between items-center text-white">
        <NuxtLink
          class="text-3xl tracking-widest font-black uppercase my-8"
          title="leafage"
          to="/"
        >Leafage</NuxtLink>
        <div class="flex justify-center space-x-6 sm:my-4">
          <a
            title="github"
            href="https://github.com/little3201"
            rel="noopener"
            target="_blank"
          >Github</a>
          <a title="gitee" href="https://gitee.com/little3201" rel="noopener" target="_blank">Gitee</a>
        </div>
        <div class="flex justify-center space-x-10 uppercase font-bold my-4">
          <a title="sitemap" href="/sitemap.html">Sitemap</a>
          <a title="doc" href="/doc">Doc</a>
        </div>
      </div>
      <div class="py-3 text-xs text-center text-gray-400">
        <p
          class="border-t border-gray-700 py-3"
        >Copyright &copy; {{ new Date().getFullYear() }} leafage.top All Rights Reserved.</p>
        <p>
          <a href="https://beian.miit.gov.cn" rel="noopener" target="_blank">陕ICP备19017836号</a>
        </p>
      </div>
    </section>
  </footer>
</template>