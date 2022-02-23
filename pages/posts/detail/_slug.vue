<template>
  <div>
    <div
      class="flex justify-between space-x-8 border-t border-black dark:border-white dark:text-white"
    >
      <div class="my-6 w-full">
        <article>
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">{{ data.title }}</h2>
          <div class="md:flex items-center text-sm my-4">
            <strong>{{ data.category }}</strong>
            <span class="tracking-wider mx-6">{{ new Date(data.modifyTime).toLocaleDateString() }}</span>
            <div class="my-4 md:my-0 md:flex space-x-6">
              <div class="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-eye mr-1"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {{ data.viewed }}
              </div>
              <div class="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-message-square mr-1"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {{ data.comment }}
              </div>
              <div class="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-heart mr-1"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  />
                </svg>
                {{ data.likes }}
              </div>
            </div>
          </div>
          <figure v-show="data.cover" class="my-4">
            <img :src="data.cover" :alt="data.title" class="w-full my-4" width="640" height="392" />
          </figure>
          <div
            ref="renderHtmlRef"
            class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl mx-auto dark:text-gray-300 dark:prose-invert"
            v-html="rendered"
          ></div>
          <div class="md:inline-flex items-center mt-8">
            <span
              v-for="(tag, index) in data.tags"
              :key="index"
              class="text-xs bg-gray-200 dark:bg-gray-600 rounded-md px-2 py-1 mr-2"
            >{{ "#" + tag }}</span>
          </div>
        </article>

        <section class="flex items-center justify-center space-x-8 my-6">
          <button
            type="button"
            class="rounded-full p-2 border text-gray-400 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-thumbs-up cursor-pointer"
            >
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
              />
            </svg>
          </button>
          <button
            type="button"
            @click="likes(data.code)"
            class="rounded-full p-2 border text-gray-400 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart cursor-pointer"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          </button>

          <button
            type="button"
            class="rounded-full p-2 border text-gray-400 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-share-2 cursor-pointer"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </section>

        <section class="bg-gray-100 dark:bg-gray-600 dark:text-gray-300 my-8 p-6">
          <div
            class="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 text-sm font-bold"
          >
            <div>
              <NuxtLink
                :title="previous.code"
                :to="'/posts/detail/' + previous.code"
                class="flex items-center transform hover:-translate-x-2 transition duration-500"
              >
                <svg
                  v-show="previous"
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
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                {{ previous.title }}
              </NuxtLink>
            </div>
            <div class="flex items-center justify-end">
              <NuxtLink
                :title="next.code"
                :to="'/posts/detail/' + next.code"
                class="flex items-center transform hover:translate-x-2 transition duration-500"
              >
                {{ next.title }}
                <svg
                  v-show="next"
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </section>
        <div>
          <legend class="text-2xl font-medium pr-4">Comment</legend>
          <form @submit.prevent="onSubmit(data.code)" class="my-4">
            <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
              <div class="w-full">
                <label
                  for="nickname"
                  class="text-sm font-medium text-gray-600 dark:text-gray-200"
                >Name</label>
                <input
                  id="nickname"
                  name="nickname"
                  v-model="formData.nickname"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="text"
                  required
                />
              </div>

              <div class="w-full">
                <label
                  for="email"
                  class="text-sm font-medium text-gray-600 dark:text-gray-200"
                >E-mail</label>
                <input
                  id="email"
                  name="email"
                  v-model="formData.email"
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  type="email"
                />
              </div>
            </div>

            <div class="w-full mt-4">
              <label
                for="content"
                class="text-sm font-medium text-gray-600 dark:text-gray-200"
              >Message</label>
              <textarea
                id="content"
                name="content"
                v-model="formData.content"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
              ></textarea>
            </div>

            <div class="flex justify-end mt-6">
              <button
                type="submit"
                class="px-4 py-2 transition-colors duration-200 transform border border-gray-300 dark:bg-gray-800 bg-gray-100 rounded-md hover:bg-gray-300 focus:outline-none"
              >Send Message</button>
            </div>
          </form>
          <Comment v-for="comment in comments" :key="comment.code" :data="comment" />
        </div>
      </div>
      <LazyAside class="my-8" />
    </div>

    <LazyPreview :isShow="view.isShow" @closeAction="previewOperation">
      <img :src="view.url" alt="preview" class="w-full h-full" width="640" height="427" />
    </LazyPreview>
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";
import marked from "~/plugins/markdown";

export default {
  name: "Slug",
  scrollToTop: true,
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.title + "," + this.data.tags,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.data.tags,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.leafage.top/posts/detail/" + this.data.code,
        },
      ],
    };
  },
  async asyncData({ $axios, params }) {
    let [data, previous, next, comments] = await Promise.all([
      // detail
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/details")),
      // previous
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/previous")),
      // next
      $axios.$get(SERVER_URL.posts.concat("/", params.slug, "/next")),
      // comments
      $axios.$get(SERVER_URL.comment.concat("/", params.slug))
    ]);
    // a标签添加 target="_blank"
    let rendered = marked.parse(data.content).replace(/href="/gi, 'target="_blank" href="');
    return { data, previous, next, comments, rendered };
  },
  data() {
    return {
      formData: {},
      comments: [],
      view: {
        isShow: false,
        url: ''
      }
    };
  },
  mounted() {
    this.addImgClickEvent();
  },
  methods: {
    /**
     * 评论提交
     */
    onSubmit(code) {
      this.formData.posts = code;
      this.$axios.get("/check").then(() => {
        this.$axios.post(SERVER_URL.comment, this.formData).then(() => {
          this.$axios.get(SERVER_URL.comment.concat("/", code)).then(res => this.comments = res.data);
          // 已提交的内容清空
          this.formData.content = '';
        });
      });
    },
    /**
     * 点赞
     */
    likes(code) {
      this.$axios.get("/check").then(() => {
        this.$axios.patch(SERVER_URL.posts.concat("/", code, "/like")).then(res => {
          this.data.likes = res.data;
        });
      });
    },
    /**
     * 给img添加双击事件
     */
    addImgClickEvent() {
      if (this.$refs.renderHtmlRef) {
        let imgs = this.$refs.renderHtmlRef.querySelectorAll("img");
        if (imgs.length > 0) {
          setTimeout(() => {
            for (let i = 0, len = imgs.length; i < len; i++) {
              imgs[i].onclick = () => {
                const src = imgs[i].getAttribute("src");
                this.previewOperation(true, src);
              };
            }
          }, 600);
        }
      }
    },
    previewOperation(show, url) {
      if (show) {
        this.view.url = url
      }
      this.view.isShow = show
    }
  }
}
</script>
