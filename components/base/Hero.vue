<template>
  <section class="blog-section">
    <div class="container">
      <div class="blog-items main">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-item main-style">
              <div class="blog-img">
                <img src="images/resources/blog-img1.jpg" alt="" />
                <a href="#" title="" class="post-category">Lifestyle</a>
              </div>
              <!--blog-img end-->
              <div class="blog-info">
                <h3 class="post-title">
                  <a href="standard-post.html" title=""
                    >Claire Foy on Becoming Mother Trading Her Crown for a
                    Dragon Tattoo</a
                  >
                </h3>
                <div class="met-soc">
                  <ul class="meta">
                    <li>December 22, 2018</li>
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
          <div class="col-lg-4">
            <div class="blog-item">
              <div class="blog-img">
                <img src="images/resources/blog-img2.jpg" alt="" />
              </div>
              <!--blog-img end-->
              <div class="blog-info">
                <h3 class="post-title">
                  <a href="standard-post.html" title=""
                    >Let Emily Ratakowski Explain Single Payer Health
                  </a>
                </h3>
              </div>
              <!--blog-info end-->
            </div>
            <!--blog-items end-->
            <div class="blog-item">
              <div class="blog-img">
                <img src="images/resources/blog-img3.jpg" alt="" />
              </div>
              <!--blog-img end-->
              <div class="blog-info">
                <h3 class="post-title">
                  <a href="standard-post.html" title=""
                    >Now You Know Zazie on Beetz Explains Net Neutrality</a
                  >
                </h3>
              </div>
              <!--blog-info end-->
            </div>
            <!--blog-items end-->
          </div>
        </div>
      </div>
      <!--blog-items end-->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Hero",

  props: {
    datas: Array,
  },
});
</script>