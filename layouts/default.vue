<template>
  <div class="dark:bg-gray-900">
    <header class="container mx-auto px-5">
      <Header class="flex border-gray-900 dark:border-gray-300 border-b-2" />
      <Logo />
    </header>
    <main
      class="container mx-auto px-5"
      style="min-height: calc(100vh - 23rem);"
    >
      <Nuxt />
    </main>
    <Footer />
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
  }
}
</script>