<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
</script>

<template>
  <section class="relative isolate px-6 pt-14 lg:px-8">
    <div class="absolute inset-0 transform-gpu overflow-hidden blur-3xl -z-10" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-lime-300 to-emerald-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-4xl py-24">
      <div class="hidden sm:mb-8 sm:flex justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
          Announcing our next round of funding. <a href="#" class="font-semibold text-lime-600 dark:text-lime-400"><span
              class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          Build projects even faster on top of Tailwind CSS
        </h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Anim aute id magna aliqua ad ad non
          deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"
            class="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 dark:focus-visible:outline-lime-500">Get
            started</a>
          <a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white">Read document <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true">
      <div
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-lime-300 to-emerald-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
  </section>

  <!-- Feature -->
  <section class="overflow-hidden py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-lime-600 dark:text-lime-400">Deploy faster</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              A better workflow</p>
            <p class="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900 dark:text-white">
                  <component :is="feature.icon" class="absolute top-1 left-1 size-5 text-lime-600 dark:text-lime-400"
                    aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img src="https://cdn.leafage.top/preview-dark.jpeg" alt="Preview dark mode"
          class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 not-dark:hidden sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10"
          width="2432" height="1442">
        <img src="https://cdn.leafage.top/preview-light.jpeg" alt="Preview light mode"
          class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 dark:hidden dark:ring-white/10"
          width="2432" height="1442">
      </div>
    </div>
  </section>
</template>
