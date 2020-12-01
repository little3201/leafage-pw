<template>
  <!-- component -->
  <!-- animation -->
  <section
    class="p-10 min-h-screen flex md:flex-row items-center justify-around bg-red-500 flex-wrap sm:flex-col"
  >
    <!-- scale -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:scale-75 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- roatate and scale -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- rotate -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:rotate-45 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- rotate minus -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:-rotate-45 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- Origin -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform origin-left hover:-rotate-45 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- translate -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:-translate-x-10 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>

      <div
        class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-150 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>

    <!-- skew -->
    <div class="h-32 w-32 relative cursor-pointer mb-5">
      <div
        class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"
      ></div>
      <div
        class="absolute inset-0 transform hover:skew-y-12 transition duration-300"
      >
        <div class="h-full w-full bg-white rounded-lg shadow-2xl"></div>
      </div>
    </div>
  </section>
</template>