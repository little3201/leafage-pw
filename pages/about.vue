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
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto dark:text-gray-300 dark:prose-blue"
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
      title: "Leafage - About",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage 是一个开源的博客网站，记录自己平时学习总结、工作中遇到的问题的解决方法的一个经验记录。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js, markdown, highlight",
        },
      ],
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-white bg-black dark:bg-white dark:text-black;
}
</style>