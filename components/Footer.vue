<template>
  <footer class="bg-gray-900">
    <div class="container mx-auto">
      <div class="flex justify-between items-center text-white h-32">
        <div class="text-4xl tracking-widest font-black uppercase">
          <h1><nuxt-link to="/" title="">Abeille</nuxt-link></h1>
        </div>
        <div class="md:flex space-x-6 -ml-12">
          <a href="#" title="" class="border rounded-full border-black"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-facebook"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              ></path></svg
          ></a>
          <a href="#" title=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-twitter"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path></svg
          ></a>
          <a href="#" title=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle></svg
          ></a>
          <button class="rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path></svg
          ></button>
        </div>
        <div class="flex space-x-6 uppercase text-xs font-extrabold ">
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <!--ft-links end-->
        </div>
      </div>
    </div>
    <section class="bg-black py-2 text-xs text-center text-gray-500">
      <p>
        &copy; {{ new Date().getFullYear() }} Abeille. All Rights
        <a href="http://www.bootstrapmb.com/" title="bootstrapmb">Reserved</a>.
      </p>
      <p>陕ICP备19017836号-1</p>
    </section>
  </footer>
</template>