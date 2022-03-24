<template>
  <div class="dark:bg-gray-900">
    <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8">
      <Header class="flex border-gray-900 dark:border-gray-300 border-b-2" />
      <Logo />
    </header>
    <main
      class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-4xl 2xl:max-w-6xl lg:px-8"
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