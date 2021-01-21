<template>
  <section>
    <div class="grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-cols-2">
      <div class="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="abeille contact"
          class="h-full object-cover"
        />
      </div>
      <div class="bg-gray-200 p-2 md:p-10 leading-relaxed">
        <h3 class="text-4xl font-extrabold my-4">Contact</h3>
        <p class="text-gray-600">
          网站所有内容均免费，长久可用，哦对，还有源代码，如果喜欢可以fork，或者star，有问题的或者有想法的可以联系我。
        </p>
        <form class="my-8">
          <div class="my-3">
            <label class="text-gray-600">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              class="w-full p-2 outline-none"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              class="w-full p-2 outline-none"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Subject: </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              class="w-full p-2 outline-none"
              autocomplete="off"
            />
          </div>
          <div class="my-3">
            <label class="text-gray-600">Your Message: </label>
            <textarea
              name="message"
              placeholder="Your Message"
              class="w-full p-2 h-40 outline-none"
              autocomplete="off"
            ></textarea>
          </div>
          <button
            type="submit"
            href="mailto:little3201@163.com?subject=Abeille%20Website%20Question"
            class="text-white uppercase text-xs font-bold bg-gray-500 py-3 w-1/2 outline-none"
          >Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "About",

  head() {
    const title = "Contact - Abeille | 布吉岛";
    const description = "联系布吉岛";
    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        // Twitter Card
        { hid: "twitter:title", name: "twitter:title", content: title },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
});
</script>