<template>
  <div class="dark:bg-gray-900">

    <header class="container mx-auto px-5">
      <LayoutHeader class="flex border-gray-900 dark:border-gray-300 border-b-2" />
      <LayoutLogo />
    </header>

    <main class="container mx-auto px-5" style="min-height: calc(100vh - 23rem);">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>