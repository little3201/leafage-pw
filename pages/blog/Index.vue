<template>
  <!-- component -->
  <div class="max-w-screen-lg mx-auto">
    <!-- header -->
    <header class="flex items-center justify-between py-2">
      <a href="#" class="px-2 lg:px-0 font-bold capitalize"> Tech Blog </a>
      <button class="block md:hidden px-2 text-3xl">
        <i class="bx bx-menu"></i>
      </button>
      <ul class="hidden md:inline-flex items-center">
        <li class="px-2 md:px-4">
          <a href="" class="text-green-800 font-semibold hover:text-green-600">
            Home
          </a>
        </li>
        <li class="px-2 md:px-4">
          <a href="" class="text-gray-500 font-semibold hover:text-green-600">
            About
          </a>
        </li>
        <li class="px-2 md:px-4">
          <a href="" class="text-gray-500 font-semibold hover:text-green-600">
            Press
          </a>
        </li>
        <li class="px-2 md:px-4">
          <a href="" class="text-gray-500 font-semibold hover:text-green-600">
            Contact
          </a>
        </li>
        <li class="px-2 md:px-4 hidden md:block">
          <a href="" class="text-gray-500 font-semibold hover:text-green-600">
            Login
          </a>
        </li>
        <li class="px-2 md:px-4 hidden md:block">
          <a href="" class="text-gray-500 font-semibold hover:text-green-600">
            Register
          </a>
        </li>
      </ul>
    </header>
    <!-- header ends here -->

    <main class="mt-12">
      <!-- featured section -->
      <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        <!-- main post -->
        <div
          class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block"
        >
          <img
            src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded-md object-cover w-full h-64"
          />
          <span class="text-green-700 text-sm hidden md:block mt-4">
            Technology
          </span>
          <h1 class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p class="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed.
            Melancholy middletons yet understood decisively boy law she. Answer
            him easily are its barton little. Oh no though mother be things
            simple itself. Oh be me, sure wise sons, no. Piqued ye of am spirit
            regret. Stimulated discretion impossible admiration in particular
            conviction up.
          </p>
          <a
            href="./blog.html"
            class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
          >
            Read more
          </a>
        </div>

        <!-- sub-main posts -->
        <div class="w-full md:w-4/7">
          <!-- post 1 -->
          <div class="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div class="bg-white rounded px-4">
              <span class="text-green-700 text-sm hidden md:block">
                Gadgets
              </span>
              <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                At every tiled on ye defer do. No attention suspected oh
                difficult.
              </div>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Wonder matter now can estate esteem assure fat roused. Am
                performed on existence as discourse is. Pleasure friendly at
                marriage blessing or
              </p>
            </div>
          </div>

          <!-- post 2 -->
          <div class="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div class="bg-white rounded px-4">
              <span class="text-green-700 text-sm hidden md:block">
                Bitcoin
              </span>
              <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Fond his say old meet cold find come whom. The sir park sake
                bred.
              </div>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
          <!-- post 3 -->
          <div class="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div class="bg-white rounded px-4">
              <span class="text-green-700 text-sm hidden md:block">
                Insights
              </span>
              <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet
                new.
              </div>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand
                tears ten joy there terms any widen.
              </p>
            </div>
          </div>
          <!-- post 4 -->
          <div class="rounded w-full flex flex-col md:flex-row mb-10">
            <img
              src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
            />
            <div class="bg-white rounded px-4">
              <span class="text-green-700 text-sm hidden md:block">
                Cryptocurrency
              </span>
              <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet
                new.
              </div>
              <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand
                tears ten joy there terms any widen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end featured section -->

      <!-- recent posts -->
      <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Latest news</h2>
        <a
          class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >
          View all
        </a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6">
        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              Put all speaking her delicate recurred possible.
            </h2>
            <p class="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why
              announcing. Middleton fat two satisfied additions. So continued he
              or commanded household smallness delivered. Door poor on do walk
              in half. Roof his head the what.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              Is at purse tried jokes china ready decay an.
            </h2>
            <p class="text-gray-700 mt-2">
              Small its shy way had woody downs power. To denoting admitted
              speaking learning my exercise so in. Procured shutters mr it
              feelings. To or three offer house begin taken am at.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              As dissuade cheerful overcame so of friendly he indulged unpacked.
            </h2>
            <p class="text-gray-700 mt-2">
              Alteration connection to so as collecting me. Difficult in
              delivered extensive at direction allowance. Alteration put use
              diminution can considered sentiments interested discretion.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <!-- end recent posts -->

      <!-- subscribe -->
      <div class="rounded flex md:shadow mt-12">
        <img
          src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          class="w-0 md:w-1/4 object-cover rounded-l"
        />
        <div class="px-4 py-2">
          <h3 class="text-3xl text-gray-800 font-bold">
            Subscribe to newsletter
          </h3>
          <p class="text-xl text-gray-700">
            We sent latest news and posts once in every week, fresh from the
            oven
          </p>
          <form class="mt-4 mb-10">
            <input
              type="email"
              class="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
              placeholder="john@tech.com"
            />
            <button class="px-4 py-2 rounded bg-green-800 text-gray-100">
              Subscribe
              <i class="bx bx-right-arrow-alt"></i>
            </button>
            <p class="text-green-900 opacity-50 text-sm mt-1">
              No spam. We promise
            </p>
          </form>
        </div>
      </div>
      <!-- ens subscribe section -->

      <!-- popular posts -->
      <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Popular news</h2>
        <a
          class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >
          View all
        </a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6">
        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              Put all speaking her delicate recurred possible.
            </h2>
            <p class="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why
              announcing. Middleton fat two satisfied additions. So continued he
              or commanded household smallness delivered. Door poor on do walk
              in half. Roof his head the what.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              Is at purse tried jokes china ready decay an.
            </h2>
            <p class="text-gray-700 mt-2">
              Small its shy way had woody downs power. To denoting admitted
              speaking learning my exercise so in. Procured shutters mr it
              feelings. To or three offer house begin taken am at.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2 class="font-bold text-2xl text-gray-800">
              As dissuade cheerful overcame so of friendly he indulged unpacked.
            </h2>
            <p class="text-gray-700 mt-2">
              Alteration connection to so as collecting me. Difficult in
              delivered extensive at direction allowance. Alteration put use
              diminution can considered sentiments interested discretion.
            </p>

            <a
              href="#"
              class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <!-- end popular posts -->
    </main>
    <!-- main ends here -->

    <!-- footer -->
    <footer class="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5">
          <p class="text-gray-600 hidden lg:block p-0 lg:pr-12">
            Boisterous he on understood attachment as entreaties ye devonshire.
            In mile an form snug were been sell. Extremely ham any his departure
            for contained curiosity defective. Way now instrument had eat
            diminution melancholy expression sentiments stimulated.
          </p>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Team</a></li>
            <li><a href="" class="block text-gray-600 py-2">About us</a></li>
            <li><a href="" class="block text-gray-600 py-2">Press</a></li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Blog</a></li>
            <li>
              <a href="" class="block text-gray-600 py-2">Privacy Policy</a>
            </li>
            <li>
              <a href="" class="block text-gray-600 py-2">Terms & Conditions</a>
            </li>
            <li>
              <a href="" class="block text-gray-600 py-2">Documentation</a>
            </li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Team</a></li>
            <li><a href="" class="block text-gray-600 py-2">About us</a></li>
            <li><a href="" class="block text-gray-600 py-2">Press</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>