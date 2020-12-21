<template>
  <section class="container mx-auto">
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div class="row-span-2 col-span-2 flex justify-center items-center">
        <div class="relative w-full h-full overflow-hidden">
          <div
            class="w-full h-full transform hover:scale-110 transition duration-500"
          >
            <img
              src="images/resources/blog-img1.jpg"
              alt=""
              class="absolute w-full h-full"
            />
            <div
              class="absolute w-full h-full"
              style="background-color: rgba(42, 42, 42, 0.3)"
            ></div>
          </div>
          <nuxt-link
            to="/"
            title=""
            class="absolute top-0 text-white text-xs font-extrabold uppercase p-10"
            >Lifestyle</nuxt-link
          >
          <!--blog-img end-->
          <div class="absolute bottom-0 text-white p-10">
            <h3
              class="w-2/3 p-6 mb-6 text-xl font-black leading-8 text-left border border-solid border-gray-800"
            >
              <a href="standard-post.html" title=""
                >Claire Foy on Becoming Mother Trading Her Crown for a Dragon
                Tattoo</a
              >
            </h3>
            <div class="w-full">
              <ul class="flex text-xs space-x-6 text-gray-400">
                <li class="uppercase">December 22, 2018</li>
                <li><i class="la la-eye"></i>3258</li>
                <li>
                  <a href="#" title=""><i class="la la-comment-o"></i>4</a>
                </li>
              </ul>
              <ul class="social-links">
                <li>
                  <a href="#" title=""><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#" title=""><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" title=""><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="#" title=""><i class="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#" title=""
                    ><i class="fab fa-facebook-messenger"></i
                  ></a>
                </li>
              </ul>
            </div>
            <!--met-soc end-->
          </div>
          <!--blog-info end-->
        </div>
      </div>
      <div class="relative text-white w-full h-64 overflow-hidden">
        <div
          class="w-full h-full transform hover:scale-110 transition duration-500"
        >
          <img
            src="images/resources/blog-img2.jpg"
            alt=""
            class="absolute w-full h-full"
          />
          <div
            class="absolute w-full h-full"
            style="background-color: rgba(42, 42, 42, 0.3)"
          ></div>
        </div>
        <nuxt-link
          to="/"
          title=""
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          >Lifestyle</nuxt-link
        >
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black" style="bottom: 30px">
          <h3 class="post-title">
            <a href="standard-post.html" title=""
              >Let Emily Ratakowski Explain Single Payer Health
            </a>
          </h3>
        </div>
      </div>
      <div class="relative text-white w-full h-64 overflow-hidden">
        <div
          class="w-full h-full transform hover:scale-110 transition duration-500"
        >
          <img
            src="images/resources/blog-img3.jpg"
            alt=""
            class="absolute w-full h-full"
          />
          <div
            class="absolute w-full h-full"
            style="background-color: rgba(42, 42, 42, 0.3)"
          ></div>
        </div>
        <nuxt-link
          to="/"
          title=""
          class="absolute top-0 text-white text-xs font-extrabold uppercase p-8"
          >Lifestyle</nuxt-link
        >
        <!--blog-img end-->
        <div class="absolute px-8 text-left font-black" style="bottom: 30px">
          <nuxt-link to="/blog/deatil" title=""
            >Now You Know Zazie on Beetz Explains Net Neutrality</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>