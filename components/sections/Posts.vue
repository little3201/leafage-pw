<template>
  <section class="container mx-auto">
    <div class="flex">
      <div class="w-2/3">
        <div class="mb-12">
          <ul
            class="flex justify-between items-center text-center uppercase leading-10 text-xs font-bold border-black"
            style="border-width: 1px"
            id="myTab"
            role="tablist"
          >
            <li class="bg-black text-white w-1/3">
              <a
                class="nav-link active"
                id="trending-tab"
                data-toggle="tab"
                href="#trending"
                role="tab"
                aria-controls="trending-tab"
                aria-selected="true"
                >Trending</a
              >
            </li>
            <li class="w-1/3">
              <a
                class="nav-link"
                id="mostview-tab"
                data-toggle="tab"
                href="#most-view"
                role="tab"
                aria-controls="mostview-tab"
                aria-selected="false"
                >Most View</a
              >
            </li>
            <li class="w-1/3">
              <a
                class="nav-link"
                id="popular-tab"
                data-toggle="tab"
                href="#popular"
                role="tab"
                aria-controls="popular-tab"
                aria-selected="false"
                >Popular</a
              >
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
                          <li><i class="la la-eye"></i>3258</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>4</a
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
                          <li><i class="la la-eye"></i>1157</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>2</a
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
                          <li><i class="la la-eye"></i>964</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>6</a
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
                          <li><i class="la la-eye"></i>2478</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>3</a
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
            <div
              class="tab-pane fade"
              id="most-view"
              role="tabpanel"
              aria-labelledby="mostview-tab"
            >
              <div class="hidden">
                <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8">
                  <div class="">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img src="images/resources/item5.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 my-4 uppercase"
                          >Travel</a
                        >
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >The Best On-the-Go Snacks to Get Before Holiday
                            Travel
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 31, 2018</li>
                          <li><i class="la la-eye"></i>3258</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>4</a
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
                        <img src="images/resources/item6.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 my-4 uppercase"
                          >Beauty</a
                        >
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Diddy Offers Intimate Look at His Birthday Beauty
                            Routine
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 29, 2018</li>
                          <li><i class="la la-eye"></i>1157</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>2</a
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
                        <img src="images/resources/item7.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 my-4 uppercase"
                          >Fashion</a
                        >
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Julia Roberts' Infamous Armpit Hair Reveal Was a
                            Statement
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 27, 2018</li>
                          <li><i class="la la-eye"></i>964</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>6</a
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
                        <img src="images/resources/item8.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a
                          href="#"
                          title=""
                          class="text-xs space-x-6 text-gray-600 my-4 uppercase"
                          >Photograph</a
                        >
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Roland Mouret New Book About Life Work Brings His
                            Past
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 25, 2018</li>
                          <li><i class="la la-eye"></i>2478</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>3</a
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
            <div
              class="tab-pane fade"
              id="popular"
              role="tabpanel"
              aria-labelledby="popular-tab"
            >
              <div class="hidden">
                <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8">
                  <div class="">
                    <div class="blog-item">
                      <div class="blog-img">
                        <img src="images/resources/item5.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a href="#" title="" class="post-category">Travel</a>
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >The Best On-the-Go Snacks to Get Before Holiday
                            Travel
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 31, 2018</li>
                          <li><i class="la la-eye"></i>3258</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>4</a
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
                        <img src="images/resources/item6.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a href="#" title="" class="post-category">Beauty</a>
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Diddy Offers Intimate Look at His Birthday Beauty
                            Routine
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 29, 2018</li>
                          <li><i class="la la-eye"></i>1157</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>2</a
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
                        <img src="images/resources/item7.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a href="#" title="" class="post-category">Fashion</a>
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Julia Roberts' Infamous Armpit Hair Reveal Was a
                            Statement
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 27, 2018</li>
                          <li><i class="la la-eye"></i>964</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>6</a
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
                        <img src="images/resources/item8.jpg" alt="" />
                      </div>
                      <!--blog-img end-->
                      <div class="blog-info">
                        <a href="#" title="" class="post-category"
                          >Photograph</a
                        >
                        <h3 class="font-extrabold">
                          <a href="standard-post.html" title=""
                            >Roland Mouret New Book About Life Work Brings His
                            Past
                          </a>
                        </h3>
                        <ul class="meta">
                          <li>December 25, 2018</li>
                          <li><i class="la la-eye"></i>2478</li>
                          <li>
                            <a href="#" title=""
                              ><i class="la la-comment-o"></i>3</a
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
                    <li><i class="la la-eye"></i>4123</li>
                    <li>
                      <a href="#" title=""><i class="la la-comment-o"></i>7</a>
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
                    <li><i class="la la-eye"></i>417</li>
                    <li>
                      <a href="#" title=""><i class="la la-comment-o"></i>1</a>
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
                    <li><i class="la la-eye"></i>247</li>
                    <li>
                      <a href="#" title=""><i class="la la-comment-o"></i>2</a>
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
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Photograph</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Michelin Has Bestowed More Stars Upon New York City
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 23, 2018</li>
                      <li><i class="la la-eye"></i>3258</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>4</a
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
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Travel</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Bedtime Habits To Wake Up Feeling Refreshed
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 22, 2018</li>
                      <li><i class="la la-eye"></i>1157</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>2</a
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
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Beauty</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >The New Museum and Alexander McQueen Honor
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 20, 2018</li>
                      <li><i class="la la-eye"></i>964</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>6</a
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
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Fashion</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >The Artist Behind Nigeria’s Newest Dance Crazy Style
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 19, 2018</li>
                      <li><i class="la la-eye"></i>2478</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>3</a
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
                  class="absolute w-full"
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
                    >Claire Foy on Becoming Mother Trading Her Crown for a
                    Dragon Tattoo</a
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
                      <a href="#" title=""
                        ><i class="fab fa-linkedin-in"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#" title=""
                        ><i class="fab fa-pinterest-p"></i
                      ></a>
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
                    <img src="images/resources/item16.jpg" alt="" class="w-full" />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Travel</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Watch Ciara Break Down 5 Iconic Dance Moves Single
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 17, 2018</li>
                      <li><i class="la la-eye"></i>964</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>4</a
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
                    <img src="images/resources/item17.jpg" alt="" class="w-full" />
                  </div>
                  <!--blog-img end-->
                  <div class="my-4">
                    <a href="#" title="" class="text-xs space-x-6 text-gray-600 font-bold uppercase">Lifestyle</a>
                    <h3 class="text-xl font-extrabold my-3">
                      <a href="standard-post.html" title=""
                        >Emily Blunt Takes Over for Anna Wintour and Talks
                      </a>
                    </h3>
                    <ul class="flex text-xs space-x-6 text-gray-600 uppercase">
                      <li>December 15, 2018</li>
                      <li><i class="la la-eye"></i>2478</li>
                      <li>
                        <a href="#" title=""
                          ><i class="la la-comment-o"></i>7</a
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
        <div class="heeney-pagination text-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1"
                  ><i class="fas fa-arrow-left"></i
                ></a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#"
                  ><i class="fas fa-arrow-right"></i
                ></a>
              </li>
            </ul>
          </nav>
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