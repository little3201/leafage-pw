<template>
  <section class="container mx-auto my-16">
    <div class="uppercase">
      <h3>Featured Stories</h3>
    </div>
    <!--sec-title end-->
    <div class="my-4">
      <div class="grid grid-flow-col grid-rows-1 grid-cols-4 gap-4">
        <div class="w-full h-full">
          <div class="overflow-hidden">
            <div class="h-56 transform hover:scale-110 transition duration-500">
              <img src="images/resources/item1.jpg" alt="" class="w-full" />
            </div>
          </div>
          <!--blog-img end-->
          <div class="blog-info">
            <h3 class="post-title">
              <nuxt-link to="/blog/detail" title=""
                >Don’t Risk a Red-Eye Without These Things</nuxt-link
              >
            </h3>
            <ul class="flex text-xs space-x-6 text-gray-600">
              <li>Dec 11, 2018</li>
              <li><i class="la la-eye"></i>2478</li>
              <li>
                <nuxt-link to="/" title=""><i class="la la-comment-o"></i>3</nuxt-link>
              </li>
            </ul>
          </div>
          <!--blog-info end-->
          <!--blog-item end-->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="overflow-hidden">
            <div class="h-56 transform hover:scale-110 transition duration-500">
              <img
                src="images/resources/item2.jpg"
                alt=""
                class="w-full"
              />
            </div>
          </div>
          <!--blog-img end-->
          <div class="blog-info">
            <h3 class="post-title">
              <a href="standard-post.html" title=""
                >Healthy and Deliciously Easy Breakfast Recipes</a
              >
            </h3>
            <ul class="flex text-xs space-x-6 text-gray-600">
              <li>Dec 10, 2018</li>
              <li><i class="la la-eye"></i>471</li>
              <li>
                <a href="#" title=""><i class="la la-comment-o"></i>4</a>
              </li>
            </ul>
          </div>
          <!--blog-info end-->
          <!--blog-item end-->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="overflow-hidden">
            <div class="h-56 transform hover:scale-110 transition duration-500">
              <img
                src="images/resources/item3.jpg"
                alt=""
                class="w-full"
              />
            </div>
          </div>
          <!--blog-img end-->
          <div class="blog-info">
            <h3 class="post-title">
              <a href="standard-post.html" title=""
                >The 4 Workout Pieces Every Woman Should Own</a
              >
            </h3>
            <ul class="flex text-xs space-x-6 text-gray-600">
              <li>Dec 9, 2018</li>
              <li><i class="la la-eye"></i>234</li>
              <li>
                <a href="#" title=""><i class="la la-comment-o"></i>5</a>
              </li>
            </ul>
          </div>
          <!--blog-info end-->
          <!--blog-item end-->
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="overflow-hidden">
            <div class="h-56 transform hover:scale-110 transition duration-500">
              <img
                src="images/resources/item4.jpg"
                alt=""
                class="w-full"
              />
            </div>
          </div>
          <!--blog-img end-->
          <div class="blog-info">
            <h3 class="post-title">
              <a href="standard-post.html" title=""
                >Now You Know Zazie Beetz Explains Net Neutrality</a
              >
            </h3>
            <ul class="flex text-xs space-x-6 text-gray-600">
              <li>Dec 6, 2018</li>
              <li><i class="la la-eye"></i>3281</li>
              <li>
                <a href="#" title=""><i class="la la-comment-o"></i>3</a>
              </li>
            </ul>
          </div>
          <!--blog-info end-->
          <!--blog-item end-->
        </div>
      </div>
    </div>
  </section>
</template>