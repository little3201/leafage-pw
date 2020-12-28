<template>
  <div>
    <Header />
    <section>
      <div class="">
        <div class="flex">
          <div class="hidden md:block md:w-1/2">
            <img
              src="/images/resources/contact-bg.jpg"
              alt="abeille contact"
              class="h-full object-cover"
            />
          </div>
          <div class="bg-gray-200 p-10 w-1/2 leading-relaxed">
            <h3 class="text-4xl font-extrabold my-4">Contact</h3>
            <p class="text-gray-600">
              Cras lobortis vehicula ugue, sagitts oe sapien lacinia non. Fusce
              semper lobortis massa in fringilla. Quisque vitae sapien
              pelletesque, mollis nte sit amet, aliquet tortor. Integer
              tincidunt molestie semper. Nam turpis nibh, accumsan et.
            </p>
            <form class="my-8">
              <div class="my-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  class="w-full p-2 outline-none"
                />
              </div>
              <div class="my-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  class="w-full p-2 outline-none"
                />
              </div>
              <div class="my-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  class="w-full p-2 outline-none"
                />
              </div>
              <div class="my-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  class="w-full p-2 h-40 outline-none"
                ></textarea>
              </div>
              <input
                type="submit"
                name="submit"
                value="Send Message"
                class="w-1/2 text-white uppercase text-xs font-bold bg-gray-500 py-3 outline-none"
              />
            </form>
          </div>
        </div>
        <!--contact-sec end-->
      </div>
    </section>
    <Footer />
  </div>
</template>