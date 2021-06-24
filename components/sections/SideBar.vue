<template>
  <aside class="lg:flex lg:justify-end w-full">
    <div class="lg:ml-12">
      <div class="border border-solid border-gray-200 p-8">
        <h3 class="font-extrabold">欢迎关注公众号（Leafage）</h3>
        <div class="flex items-center mt-4">
          <img
            class="w-32 h-32 border"
            src="https://cdn.leafage.top/leafage-wechat.jpg?imageMogr2/thumbnail/x128/format/webp/blur/1x0/quality/75"
            alt="leafage"
          />
          <div class="mx-4">
            <p class="my-2">微信搜一搜</p>
            <input
              type="text"
              class="
                placeholder-gray-600
                border border-gray-300
                p-2
                w-full
                text-sm
                rounded
              "
              disabled
              placeholder="Leafage"
            />
          </div>
        </div>
      </div>
      <div class="my-12 py-8 border border-solid border-gray-200 relative">
        <h3
          class="
            absolute
            top-0
            -mt-3
            px-2
            ml-6
            bg-white
            uppercase
            text-sm
            font-semibold
          "
        >
          Trending
        </h3>
        <div
          class="flex px-4 md:px-8 py-2"
          v-for="data in datas"
          :key="data.code"
        >
          <img
            class="w-28 h-20"
            :src="
              data.cover +
              '?imageMogr2/thumbnail/640x80/format/webp/blur/1x0/quality/75'
            "
            :alt="data.title"
          />
          <div class="m-2 md:ml-4">
            <h3
              class="
                text-sm
                font-bold
                transform
                hover:translate-x-2
                transition
                duration-500
              "
            >
              <nuxt-link
                :title="data.code"
                :to="'/posts/detail/' + data.code"
                v-text="data.title"
              ></nuxt-link>
            </h3>
            <p
              class="text-xs mt-2 hidden sm:block lg:hidden"
              v-text="data.subtitle"
            ></p>
            <span
              class="text-xs text-gray-500 font-bold uppercase"
              v-text="new Date(data.modifyTime).toLocaleDateString()"
            ></span>
          </div>
        </div>
      </div>
      <div class="border border-solid border-gray-200 relative">
        <h3
          class="
            absolute
            top-0
            -mt-3
            px-2
            ml-6
            bg-white
            uppercase
            text-sm
            font-semibold
          "
        >
          Categories
        </h3>
        <ul
          class="
            grid grid-cols-1
            divide-y divide-gray-300
            p-8
            text-xs text-gray-600
            font-semibold
            uppercase
            list-disc
          "
        >
          <li
            class="py-3 mx-4"
            v-for="category in categories"
            :key="category.code"
          >
            <nuxt-link
              :title="category.alias"
              :to="{ path: '/posts', query: { category: category.code } }"
              v-text="category.alias"
            ></nuxt-link>
            <span class="mr-2 float-right" v-text="category.count"></span>
          </li>
        </ul>
      </div>
      <div class="my-12 border-2 border-solid border-black p-8">
        <h3 class="font-extrabold">Send Email To Me</h3>
        <form class="mt-4 flex items-center">
          <input
            class="
              w-full
              text-sm text-black
              placeholder-gray-600
              border border-gray-300
              py-2
              pl-4
            "
            type="email"
            placeholder="Enter your email adress"
          />
          <a
            aria-label="email"
            title="email"
            href="mailto:little3201@163.com?subject=Leafage%20Website%20News"
            class="bg-black text-white p-2 -ml-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </form>
      </div>
      <div class="border border-solid border-gray-200 relative my-12">
        <h3
          class="
            absolute
            top-0
            -mt-3
            px-2
            ml-6
            bg-white
            uppercase
            text-sm
            font-semibold
          "
        >
          Friend Chain
        </h3>
        <ul
          class="
            grid grid-cols-1
            divide-y divide-gray-300
            p-8
            text-xs text-gray-600
            font-semibold
            list-decimal
          "
        >
          <li class="py-3 mx-4">
            <a
              title="leafage console"
              href="https://console.leafage.top"
              target="_blank"
              rel="noopener"
              >leafage 控制台</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              title="csdn"
              href="https://blog.csdn.net/zx110503?spm=1008.2028.3001.5343&type=blog"
              rel="noopener"
              target="_blank"
              >csdn</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              title="oschina"
              href="https://my.oschina.net/u/4066932"
              target="_blank"
              rel="noopener"
              >开源中国 oschina</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              title="segmentfault"
              href="https://segmentfault.com/u/bujidao_5d0c24ce7055e/articles"
              rel="noopener"
              target="_blank"
              >思否 segmentfault</a
            >
          </li>
          <li class="py-3 mx-4">
            <a
              title="juejin"
              href="https://juejin.cn/user/184373686838312/posts"
              rel="noopener"
              target="_blank"
              >掘金</a
            >
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>


<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  useFetch,
} from "@nuxtjs/composition-api";
import { SERVER_URL } from "~/api/request";

export default defineComponent({
  name: "SideBar",

  setup() {
    const datas = ref([]);
    const categories = ref([]);
    const { $axios } = useContext();

    useFetch(async () => {
      [datas.value, categories.value] = await Promise.all([
        $axios.$get(SERVER_URL.posts.concat("?page=0&size=5")),
        $axios.$get(SERVER_URL.category.concat("?page=0&size=10")),
      ]);
    });

    return {
      datas,
      categories,
    };
  },
});
</script>