<template>
  <section class="container mx-auto">
    <div class="flex">
      <div class="w-2/3">
        <div class="mb-12">
          <ul
            class="flex justify-between items-center text-center border-black"
            style="border-width: 1px"
            id="myTab"
            role="tablist"
          >
            <li class="bg-black text-white w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Trending
              </button>
            </li>
            <li class="w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Most View
              </button>
            </li>
            <li class="w-1/3">
              <button class="w-full h-10 text-xs font-bold uppercase">
                Popular
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="trending"
              role="tabpanel"
              aria-labelledby="trending-tab"
            >
              <div class="my-10">
                <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8">
                  <div class="w-full overflow-hidden">
                    <div class="">
                      <div class="">
                        <img
                          src="images/resources/item5.jpg"
                          alt=""
                          class="w-full"
                        />
                      </div>
                      <!--blog-img end-->
                      <div class="my-4">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 uppercase font-bold"
                          >Photograph</a
                        >
                        <h3 class="text-xl font-extrabold my-3">
                          <a href="standard-post.html" title=""
                            >Roland Mouret New Book About Life Work Brings His
                            Past
                          </a>
                        </h3>
                        <ul
                          class="flex text-xs space-x-6 text-gray-600 uppercase"
                        >
                          <li>December 31, 2018</li>
                          <li class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-eye mr-1"
                            >
                              <path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                              ></path>
                              <circle cx="12" cy="12" r="3"></circle></svg
                            >3258
                          </li>
                          <li>
                            <nuxt-link to="/" title="" class="flex items-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square mr-1"
                              >
                                <path
                                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                ></path></svg
                              >4</nuxt-link
                            >
                          </li>
                        </ul>
                      </div>
                      <!--blog-info end-->
                    </div>
                    <!--blog-item end-->
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img
                          src="images/resources/item6.jpg"
                          alt=""
                          class="w-full"
                        />
                      </div>
                      <!--blog-img end-->
                      <div class="my-4">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                          >Travel</a
                        >
                        <h3 class="text-xl font-extrabold my-3">
                          <a href="standard-post.html" title=""
                            >The Best On-the-Go Snacks to Get Before Holiday
                            Travel
                          </a>
                        </h3>
                        <ul
                          class="flex text-xs space-x-6 text-gray-600 uppercase"
                        >
                          <li>December 29, 2018</li>
                          <li class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-eye mr-1"
                            >
                              <path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                              ></path>
                              <circle cx="12" cy="12" r="3"></circle></svg
                            >1157
                          </li>
                          <li>
                            <nuxt-link to="/" title="" class="flex items-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square mr-1"
                              >
                                <path
                                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                ></path></svg
                              >2</nuxt-link
                            >
                          </li>
                        </ul>
                      </div>
                      <!--blog-info end-->
                    </div>
                    <!--blog-item end-->
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img
                          src="images/resources/item7.jpg"
                          alt=""
                          class="w-full"
                        />
                      </div>
                      <!--blog-img end-->
                      <div class="my-4">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                          >Beauty</a
                        >
                        <h3 class="text-xl font-extrabold my-3">
                          <a href="standard-post.html" title=""
                            >Diddy Offers Intimate Look at His Birthday Beauty
                            Routine
                          </a>
                        </h3>
                        <ul
                          class="flex text-xs space-x-6 text-gray-600 uppercase"
                        >
                          <li>December 27, 2018</li>
                          <li class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-eye mr-1"
                            >
                              <path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                              ></path>
                              <circle cx="12" cy="12" r="3"></circle></svg
                            >964
                          </li>
                          <li>
                            <nuxt-link to="/" title="" class="flex items-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square mr-1"
                              >
                                <path
                                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                ></path></svg
                              >6</nuxt-link
                            >
                          </li>
                        </ul>
                      </div>
                      <!--blog-info end-->
                    </div>
                    <!--blog-item end-->
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img
                          src="images/resources/item8.jpg"
                          alt=""
                          class="w-full"
                        />
                      </div>
                      <!--blog-img end-->
                      <div class="my-4">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                          >Fashion</a
                        >
                        <h3 class="text-xl font-extrabold my-3">
                          <a href="standard-post.html" title=""
                            >Julia Roberts' Infamous Armpit Hair Reveal Was a
                            Statement</a
                          >
                        </h3>
                        <ul
                          class="flex text-xs space-x-6 text-gray-600 uppercase"
                        >
                          <li>December 25, 2018</li>
                          <li class="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-eye mr-1"
                            >
                              <path
                                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                              ></path>
                              <circle cx="12" cy="12" r="3"></circle></svg
                            >2478
                          </li>
                          <li>
                            <nuxt-link to="/" title="" class="flex items-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-message-square mr-1"
                              >
                                <path
                                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                ></path></svg
                              >3</nuxt-link
                            >
                          </li>
                        </ul>
                      </div>
                      <!--blog-info end-->
                    </div>
                    <!--blog-item end-->
                  </div>
                </div>
              </div>
              <!--blog-items end-->
            </div>
          </div>
          <!--tab-content end-->
        </div>
        <!--blog-section end-->
        <div class="mb-12">
          <div class="uppercase font-extrabold">
            <h3>Top Posts</h3>
          </div>
          <!--sec-title end-->
          <div class="my-6">
            <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-10">
              <div class="row-span-2 col-span-2">
                <div class="overflow-hidden">
                  <img src="images/resources/item9.jpg" alt="" class="w-full" />
                </div>
                <!--blog-img end-->
                <div class="mt-6">
                  <ul
                    class="flex text-xs space-x-6 uppercase font-bold text-gray-500"
                  >
                    <li>
                      <a href="#" title="" class="text-gray-600">Photograph</a>
                    </li>
                    <li>December 18, 2018</li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye mr-1"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >4123
                    </li>
                    <li>
                      <a href="#" title="" class="flex items-center"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-square mr-1"
                        >
                          <path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          ></path></svg
                        >7</a
                      >
                    </li>
                  </ul>
                  <h3 class="text-xl font-extrabold my-4">
                    <nuxt-link to="/blog/detail" title=""
                      >The Saint Louis Art Museum Welcome Kehin de Wiley to the
                      Midwest</nuxt-link
                    >
                  </h3>
                  <p class="text-gray-500 font-light">
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibum auctor nisi elit consequat
                    ipsum, nec sagittis sem nibh id elit...
                  </p>
                </div>
                <!--blog-info end-->
                <!--blog-item end-->
              </div>
              <div class="">
                <div class="blog-img">
                  <img
                    src="images/resources/item10.jpg"
                    alt=""
                    class="w-full"
                  />
                </div>
                <!--blog-img end-->
                <div class="blog-info">
                  <h3 class="font-extrabold my-2">
                    <a href="standard-post.html" title=""
                      >The No Sugar Challenge That Almost Broke Me</a
                    >
                  </h3>
                  <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                    <li>Dec 24, 2018</li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye mr-1"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >417
                    </li>
                    <li>
                      <a href="#" title="" class="flex items-center"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-square mr-1"
                        >
                          <path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          ></path></svg
                        >1</a
                      >
                    </li>
                  </ul>
                </div>
                <!--blog-info end-->
              </div>
              <!--blog-item end-->
              <div class="">
                <div class="blog-img">
                  <img
                    src="images/resources/item11.jpg"
                    alt=""
                    class="w-full"
                  />
                </div>
                <!--blog-img end-->
                <div class="blog-info">
                  <h3 class="font-extrabold my-2">
                    <a href="standard-post.html" title=""
                      >The No Sugar Challenge That Almost Broke Me</a
                    >
                  </h3>
                  <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                    <li>Dec 21, 2018</li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye mr-1"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >247
                    </li>
                    <li>
                      <a href="#" title="" class="flex items-center"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-square mr-1"
                        >
                          <path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          ></path></svg
                        >2</a
                      >
                    </li>
                  </ul>
                </div>
                <!--blog-info end-->
              </div>
              <!--blog-item end-->
            </div>
          </div>
          <!--blog-items end-->
        </div>
        <!--blog-section end-->
        <div class="my-12">
          <div class="">
            <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8">
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item12.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Photograph</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Michelin Has Bestowed More Stars Upon New York City
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 23, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >3258
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >4</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item13.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Travel</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Bedtime Habits To Wake Up Feeling Refreshed
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 22, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >1157
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >2</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item14.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Beauty</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >The New Museum and Alexander McQueen Honor
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 20, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >964
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >6</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item15.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Fashion</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >The Artist Behind Nigeria’s Newest Dance Crazy Style
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 19, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >2478
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >3</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
            </div>
          </div>
          <!--blog-items end-->
        </div>
        <!--blog-section end-->
        <div class="mb-2">
          <div class="">
            <div class="relative w-full overflow-hidden" style="height: 520px">
              <div
                class="w-full h-full transform hover:scale-110 transition duration-500"
              >
                <img
                  src="images/resources/blog-main-img.jpg"
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
              <div class="absolute bottom-0 text-white p-10 w-full">
                <h3
                  class="w-2/3 p-6 mb-6 text-xl font-black leading-8 text-left border border-solid border-gray-800"
                >
                  <a href="standard-post.html" title=""
                    >Claire Foy on Becoming Mother Trading Her Crown for a
                    Dragon Tattoo</a
                  >
                </h3>
                <div class="flex justify-between items-center">
                  <ul class="flex text-xs space-x-6 text-gray-400">
                    <li class="uppercase">December 22, 2018</li>
                    <li class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye mr-1"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >3258
                    </li>
                    <li>
                      <nuxt-link to="/" title="" class="flex items-center"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-square mr-1"
                        >
                          <path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          ></path></svg
                        >4</nuxt-link
                      >
                    </li>
                  </ul>
                  <ul class="flex justify-end space-x-6">
                    <li class="p-2 rounded-full border border-gray-600">
                      <a href="#" title=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                      ></a>
                    </li>
                    <li class="p-2 rounded-full border border-gray-600">
                      <a href="#" title=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                    </li>
                    <li class="p-2 rounded-full border border-gray-600">
                      <a href="#" title=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                    </li>
                    <li class="p-2 rounded-full border border-gray-600">
                      <a href="#" title=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
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
                    </li>
                  </ul>
                </div>
                <!--met-soc end-->
              </div>
              <!--blog-info end-->
            </div>
            <!--blog-items end-->
          </div>
          <!--blog-items end-->
        </div>
        <!--blog-section end-->
        <div class="my-12">
          <div class="">
            <div class="grid grid-flow-col grid-cols-2 gap-8">
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item16.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Travel</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Watch Ciara Break Down 5 Iconic Dance Moves Single
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 17, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >964
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >4</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
              <div class="">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src="images/resources/item17.jpg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a
                      href="#"
                      title=""
                      class="text-xs space-x-6 text-gray-600 font-bold uppercase"
                      >Lifestyle</a
                    >
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Emily Blunt Takes Over for Anna Wintour and Talks
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 15, 2018</li>
                      <li class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-eye mr-1"
                        >
                          <path
                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          ></path>
                          <circle cx="12" cy="12" r="3"></circle></svg
                        >2478
                      </li>
                      <li>
                        <nuxt-link to="/" title="" class="flex items-center"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square mr-1"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path></svg
                          >7</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!--blog-info end-->
                </div>
                <!--blog-item end-->
              </div>
            </div>
          </div>
          <!--blog-items end-->
        </div>
        <!--blog-section end-->
        <div class="mb-12">
          <ul class="flex justify-center items-center">
            <li class="mx-4 disabled">
              <a class="page-link" href="#" tabindex="-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline></svg
              ></a>
            </li>
            <li class="mx-4">
              <button
                class="w-8 h-8 bg-black text-white rounded-full border border-black"
              >
                1
              </button>
            </li>
            <li class="mx-4">
              <button class="w-8 h-8 rounded-full border border-black">
                2
              </button>
            </li>
            <li class="mx-4">
              <button class="w-8 h-8 rounded-full border border-black">
                3
              </button>
            </li>
            <li class="mx-4">
              <a class="page-link" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline></svg
              ></a>
            </li>
          </ul>
        </div>
        <!--heeney-pagination end-->
      </div>
      <SiderBar />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Posts",

  props: {
    datas: Array,
  },
});
</script>