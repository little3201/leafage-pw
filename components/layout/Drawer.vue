<template>
  <nav class="fixed inset-y-0 right-0 flex z-10">
    <div class="w-64">
      <div class="h-full flex flex-col px-4 py-3 bg-gray-400 shadow-2xl overflow-y-scroll">
        <div class="flex justify-center items-center h-32 md:h-40">
          <NuxtLink
            to="/"
            class="text-4xl tracking-widest font-black uppercase text-black text-center"
          >
            <figure class="inline-flex justify-center">
              <img
                src="https://cdn.leafage.top/logo-only.png"
                alt="Leafage"
                width="48"
                height="48"
              />
            </figure>
            <h2>Leafage</h2>
          </NuxtLink>
        </div>
        <ul class="divide-y divide-gray-500 font-bold uppercase text-center my-8">
          <li class="my-4">
            <NuxtLink title="home_mobile" @click.native="$emit('menuAction', false)" to="/">Home</NuxtLink>
          </li>
          <li class="my-4 pt-4">
            <NuxtLink
              title="posts_mobile"
              @click.native="$emit('menuAction', false)"
              to="/posts"
            >Posts</NuxtLink>
          </li>
          <li class="my-4 pt-4">
            <NuxtLink
              title="about_mobile"
              @click.native="$emit('menuAction', false)"
              to="/about"
            >About</NuxtLink>
          </li>
          <li class="my-4 pt-4">
            <NuxtLink
              title="resource_mobile"
              @click.native="$emit('menuAction', false)"
              to="/resource"
            >Resource</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Drawer",
}
</script>