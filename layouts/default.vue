<template>
  <div id="layout" class="dark:bg-black">
    <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <Header class="hidden sm:flex border-black dark:border-white border-b-2" />
      <div class="flex justify-center items-center my-8">
        <NuxtLink to="/" title="leafage" class="dark:text-white text-center">
          <figure class="inline-flex justify-center filter dark:invert dark:opacity-90">
            <img src="https://cdn.leafage.top/logo-only.png" alt="Leafage" width="64" height="64" />
          </figure>
          <h1 class="text-4xl tracking-widest font-black uppercase">Leafage</h1>
        </NuxtLink>
      </div>
    </header>
    <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <Nuxt />
    </main>
    <footer class="bg-black">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Default",

  head() {
    return {
      title: "Leafage",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leafage 是一个开源的博客网站，记录，总结自己平时在学习、工作中遇到的问题的解决方法，或者一些其他的内容记录。",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "leafage, 博客, 经验记录, 学习总结, nuxt, vue, ts, tailwindcss, java, js, markdown, highlight",
        },
      ]
    }
  },

  async asyncData({ $axios }) {
    // check for get token
    $axios.$get("/check")
  },
}
</script>