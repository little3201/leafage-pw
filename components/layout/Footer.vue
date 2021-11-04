<template>
  <footer class="bg-black">
    <section class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="md:flex md:justify-between md:items-center text-white">
        <div class="flex justify-center">
          <NuxtLink
            class="text-3xl tracking-widest font-black uppercase my-6"
            title="leafage"
            to="/"
          >Leafage</NuxtLink>
        </div>
        <div class="flex text-xl justify-between space-x-6 uppercase font-bold">
          <a
            title="github"
            href="https://github.com/little3201"
            rel="noopener"
            target="_blank"
          >Github</a>
          <a title="gitee" href="https://gitee.com/little3201" rel="noopener" target="_blank">Gitee</a>
        </div>
      </div>
      <div class="pb-3 text-xs text-center text-gray-400">
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