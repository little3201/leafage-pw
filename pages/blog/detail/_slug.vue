<template>
  <div>
    <Header />
    <div class="container mx-auto border-t border-black">
      <div class="flex my-20">
        <div class="w-2/3">
          <div class="">
            <div class="blog-item">
              <div class="">
                <ul
                  class="flex text-xs font-bold space-x-6 text-gray-600 uppercase mb-4"
                >
                  <li>
                    <a href="#" title="">Photograph</a>
                  </li>
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
                      >3</nuxt-link
                    >
                  </li>
                </ul>
                <h3
                  class="my-3 text-3xl font-extrabold"
                  v-text="data.title"
                ></h3>
              </div>
              <!--blog-info end-->
              <div class="w-full h-full my-8">
                <img :src="data.cover" :alt="data.title" class="w-full" />
              </div>
              <!--blog-img end-->
              <p
                class="text-gray-700 my-4 leading-loose tracking-wide"
                v-html="data.content"
              ></p>
              <div class="flex justify-between items-center">
                <ul class="flex space-x-8 text-xs font-bold uppercase">
                  <li><a href="#" title="">#Photo</a></li>
                  <li><a href="#" title="">#Social</a></li>
                  <li><a href="#" title="">#Lifestyle</a></li>
                  <li><a href="#" title="">#Weekend</a></li>
                </ul>
                <!--post-catgs-list end-->
                <ul class="flex space-x-6">
                  <li class="p-2 rounded-full border border-black">
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
                  <li class="p-2 rounded-full border border-black">
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
                  <li class="p-2 rounded-full border border-black">
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
                  <li class="p-2 rounded-full border border-black">
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
              <!--post-catgs-links end-->
              <div class="my-12 bg-gray-900 flex p-8">
                <div class="w-64">
                  <img src="/images/resources/auth-img.png" alt="abeille" />
                </div>
                <!--author-img end-->
                <div class="author-info">
                  <h3 class="text-white font-extrabold leading-8">
                    <a href="#" title="">Natali Larkins</a>
                  </h3>
                  <p class="text-gray-500 text-sm leading-6">
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quisma bibendum auctor nisi elit
                    consequat ipsum, nec sagittis sem amet nibh vulputate cursus
                    itaet mauris.
                  </p>
                  <ul class="text-gray-500 mt-4 flex space-x-4">
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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
                  <!--social-links end-->
                </div>
                <!--author-info end-->
              </div>
              <!--post-author-info end-->
              <div class="bg-gray-200 p-8">
                <ul class="grid grid-cols-2 text-xs font-bold">
                  <li class="">
                    <a href="#" title="" class="flex items-center">
                      <svg
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
                      >Make More Time in Motherhood & Your Career</a
                    >
                  </li>
                  <li class="flex items-center justify-end">
                    <a href="#" title="" class="flex"
                      >5 Simple Steps To A Happier and Healthier You<svg
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
              <!--post-control end-->
            </div>
          </div>
          <!--standard-post end-->
          <div class="my-12">
            <div class="uppercase font-extrabold">
              <h3>Top Posts</h3>
            </div>
            <!--sec-title end-->
            <div class="my-6">
              <div class="grid grid-flow-col grid-cols-3 gap-8">
                <div v-for="(topData, index) in topDatas" :key="index">
                  <div class="overflow-hidden">
                    <div
                      class="transform hover:scale-110 transition duration-500"
                    >
                      <img
                        :src="topData.cover"
                        :alt="topData.title"
                        class="w-full"
                      />
                    </div>
                  </div>
                  <!--blog-img end-->
                  <div class="">
                    <h3
                      class="font-extrabold my-4 transform hover:translate-x-2 transition duration-500"
                    >
                      <nuxt-link
                        :to="'/blog/detail/' + topData.code"
                        v-text="topData.title"
                      ></nuxt-link>
                    </h3>
                    <ul class="flex text-xs space-x-6 uppercase text-gray-500">
                      <li>Dec 25, 2018</li>
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
                        <a href="#" class="flex items-center"
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
                          >3</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!--blog-items end-->
          </div>
          <!--blog-section top-post end-->
          <div class="bg-gray-200 p-12">
            <div class="mb-12">
              <div class="uppercase font-extrabold">
                <h3>Comments</h3>
              </div>
              <!--sec-title end-->
              <ul class="my-4">
                <li>
                  <div class="flex my-6">
                    <div class="mr-4">
                      <img src="/images/resources/auth-img.png" alt="abeille" />
                    </div>
                    <div class="">
                      <div class="flex justify-between font-bold">
                        <h3>Palmer Warren</h3>
                        <span class="text-xs font-bold uppercase text-gray-600"
                          >December 31, 2018
                          <a href="#" title="" class="ml-6">- Reply</a></span
                        >
                      </div>
                      <p class="text-sm text-gray-700">
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quisma bibendum auctor nisi elit
                        consequat ipsum, nec sagittis sem amet nibh.
                      </p>
                    </div>
                  </div>
                  <!--comment end-->
                  <ul class="my-6 ml-8">
                    <li>
                      <div class="flex">
                        <div class="mr-4">
                          <img src="/images/resources/auth-img.png" alt="abeille" />
                        </div>
                        <div class="">
                          <div class="flex justify-between font-bold">
                            <h3>Natali Larkins</h3>
                            <span
                              class="text-xs font-bold uppercase text-gray-600"
                              >December 31, 2018
                              <a href="#" title="" class="ml-4"
                                >- Reply</a
                              ></span
                            >
                          </div>
                          <p class="text-sm text-gray-700">
                            Proin gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quisma bibendum auctor nisi elit
                            consequat ipsum.
                          </p>
                        </div>
                      </div>
                      <!--comment end-->
                    </li>
                  </ul>
                </li>
                <li class="my-6">
                  <div class="flex">
                    <div class="mr-4">
                      <img src="/images/resources/auth-img.png" alt="abeille" />
                    </div>
                    <div class="">
                      <div class="flex justify-between font-bold">
                        <h3>Palmer Warren</h3>
                        <span class="text-xs font-bold uppercase text-gray-600"
                          >December 31, 2018
                          <a href="#" title="" class="ml-4">- Reply</a></span
                        >
                      </div>
                      <p class="text-sm text-gray-700">
                        Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quisma bibendum auctor nisi elit
                        consequat ipsum, nec sagittis sem amet nibh.
                      </p>
                    </div>
                  </div>
                  <!--comment end-->
                </li>
              </ul>
            </div>
            <!--comment-list end-->
            <div class="comment-form">
              <div class="uppercase font-bold text-gray-600">
                <h3>Leave A Reply</h3>
              </div>
              <!--sec-title end-->
              <div class="my-6">
                <form>
                  <div class="grid grid-flow-row grid-rows-5 grid-cols-2 gap-4">
                    <div class="">
                      <div class="form-field">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          class="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="form-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          class="w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div class="row-span-3 col-span-2">
                      <div class="h-full">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          class="w-full h-full p-2 outline-none"
                        ></textarea>
                      </div>
                    </div>
                    <div class="">
                      <input
                        type="submit"
                        name="submit"
                        value="Post Comment"
                        class="w-1/2 py-3 outline-none bg-gray-500 text-white uppercase text-xs font-bold"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!--comment-form end-->
          </div>
          <!--comment-section end-->
        </div>
        <SiderBar :trendingDatas="trendingDatas" />
      </div>
      <!--single-page-content end-->
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { SERVER_URL } from "~/assets/request";

export default defineComponent({
  name: "Slug",

  head() {
    const title = "Blog - Abeille | 布吉岛";
    const description = "Blog of Abeille";
    const image = "";
    return {
      title,
      meta: [
        {
          property: "article:tag",
          content: "",
        },
        { property: "og:site_name", content: "abeille" },
        { hid: "description", name: "description", content: description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
        // Twitter Card
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          hid: "canonical",
          rel: "canonical",
          href: process.env.BASE_URL,
        },
      ],
    };
  },

  computed: {
    meta() {
      const metaData = {
        image: "",
      };
    },
  },

  async asyncData({ app: { $axios }, route }) {
    const data = await $axios.$get(
      SERVER_URL.posts.concat("/").concat(route.params.slug)
    );
    // trending
    const trendingDatas = await $axios.$get(
      SERVER_URL.posts.concat("?page=0&size=5")
    );
    // top
    const topDatas = await $axios.$get(
      SERVER_URL.posts.concat("?page=0&size=3&order=viewed")
    );
    return { data, trendingDatas, topDatas };
  },
});
</script>