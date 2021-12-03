<template>
  <div id="layout" class="dark:bg-black">
    <header class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <Header class="hidden sm:flex border-black dark:border-white border-b-2" />
      <div class="flex justify-center items-center my-8">
        <NuxtLink to="/" title="leafage" class="dark:text-white text-center">
          <figure class="inline-flex justify-center filter dark:invert dark:opacity-90">
            <NuxtPicture
              src="https://cdn.leafage.top/logo-only.png"
              alt="Leafage"
              width="64"
              height="64"
            />
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
}
</script>