<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="container mx-auto bg-gray-500 rounded-lg p-14">
      <form>
        <h3 class="text-center font-bold text-white text-4xl">Find the perfect domain name</h3>
        <p class="mx-auto font-normal text-sm my-6 max-w-lg">
          Enter your select domain name and choose any
          extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)
        </p>
        <div
          class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between"
        >
          <input
            class="text-base text-gray-400 flex-grow outline-none px-2"
            type="text"
            placeholder="Search your domain name"
          />
          <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto">
            <select
              id="Com"
              class="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg"
            >
              <option value="com" selected>com</option>
              <option value="net">net</option>
              <option value="org">org</option>
              <option value="io">io</option>
            </select>
            <button class="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { SERVER_URL } from "~/api/request";

export default {
  name: "Search",

  data() {
    return {
      keyword: '',
      datas: []
    }
  },

  methods: {
    onSubmit: async () => {
      datas = []
      let result = $axios.$get(SERVER_URL.posts.concat("/search"), { params: { keyword: keyword.value } });
      datas.value.push(result)
    }
  }
}
</script>