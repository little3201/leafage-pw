<template>
  <div id="layout" class="dark:bg-black">
    <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <Header class="hidden sm:flex border-black dark:border-white border-b-2" />
      <Logo />
    </header>
    <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <Nuxt />
    </main>
    <footer class="bg-black">
      <Footer />
    </footer>
  </div>
</template>