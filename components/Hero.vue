<template>
  <!-- Overlay Background + Center Control -->
  <section id="hero" class="bg-center bg-no-repeat bg-cover">
    <div
      class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      style="background: rgba(0, 0, 0, 0.5)"
    >
      <div class="mx-2 text-center">
        <h1
          class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl"
        >
          <span class="text-white">Right</span> Place To
        </h1>
        <h2
          class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
        >
          Get a <span class="text-white">Better</span> and
          <span class="text-white">Professionals</span> Design
        </h2>
        <nuxt-link to="#hero" class="inline-flex mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevrons-down animate-bounce"
          >
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
#hero {
  background-image: url('../static/images/christian.jpg'); 
}
</style>