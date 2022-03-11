<template>
  <div class="lg:flex lg:border-t border-black dark:text-white">
    <div
      class="lg:divide-y lg:divide-gray-300 text-center lg:mr-4 lg:w-60 lg:py-8 flex border border-black lg:border-none lg:block flex-none overflow-x-auto"
    >
      <NuxtLink
        title="关于网站"
        class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        to="/about"
      >关于网站</NuxtLink>
      <NuxtLink
        title="关于作者"
        class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        to="/about/profile"
      >关于作者</NuxtLink>
      <NuxtLink
        title="更新日志"
        class="w-full whitespace-nowrap lg:block p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        to="/about/record"
      >更新日志</NuxtLink>
    </div>
    <div class="my-4 lg:p-4 mx-auto w-full lg:border-l">
      <article
        class="prose sm:prose lg:prose-lg mx-auto dark:text-gray-300 prose-blue"
      >
        <NuxtChild />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  
  head() {
    return {
      title: "About - Leafage",
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-white bg-black dark:bg-white dark:text-black;
}
</style>