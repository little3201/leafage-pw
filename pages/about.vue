<template>
<div>
  <Header />
  <section class="bg-gray-100">
    <div class="container mx-auto">
      <div class="py-20">
        <div class="flex">
          <div class="w-2/5">
            <div class="about-img">
              <img src="/images/resources/about-img.png" alt="abeille about" />
            </div>
            <!--about-img end-->
          </div>
          <div class="w-3/5">
            <div class="leading-relaxed">
              <h2 class="text-4xl font-extrabold my-4">About Me</h2>
              <p>
                Cras lobortis vehicula augue, sagitts oe sapien lacinia non.
                Fusce semper lo massa in fringilla. Quisque vitae sapien
                pellentesque, mollis nte sit amet, aliquet tortor. Integer
                tincidunt molestie semper. Nam turpis nibh, accumsan et. Mauris
                nec metus sit amet arcu elementum tempus vel sed dolor.
              </p>
              <p>
                Maximus at consectetur eu velit. Nulla tempor eros bibendum
                feugiat sollicitudin. Nulla nec ornare lectus. Proin ornare eu
                sem non imperdiet. Integer vitae tortor justo. Fusce pretium
                porta ex.
              </p>
              <div class="ml-24 my-20">
                <h3 class="text-xl font-extrabold my-4">Morbi finibus lorem sed tristique.</h3>
                <p>
                  Etiam feugiat varius quam, vel hendrerit arcu om pulvinar in.
                  Ut ultricies ultricies quam sed consequat. Etiam nir iturpis,
                  rhoncus ut dictum nec bulum in dui. Pellen tesque euismod dui
                  ut erat interdum, ac aliquet dui elementum.
                </p>
                <p>
                  Vestibulum ante ipsum primis into faucibus orci luctus et
                  ultrices posuere cubilia Curae. Etiam luctus euismod
                  fermentum. Nunc facilisis ut tellus sit amet mattis.
                </p>
                <p>
                  Etiam feugiat varius quam, vel hendrerit arcu om pulvinar in.
                  Ut ultricies ultricies quam sed consequat. Etiam nir iturpis,
                  rhoncus ut dictum nec bulum in dui. Pellen
                </p>
                <ul class="social-links">
                  <li>
                    <a href="#" title=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""><i class="fab fa-pinterest-p"></i></a>
                  </li>
                  <li>
                    <a href="#" title=""
                      ><i class="fab fa-facebook-messenger"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <!--about-cont end-->
          </div>
        </div>
      </div>
      <!--about-sec end-->
    </div>
  </section>
  <Footer />
</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "About",

  head() {
    const title = "About - Abeille | 布吉岛";
    const description = "关于布吉岛，关于我";
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

  async asyncData({ app: { $content } }) {
    const data = await $content("about").fetch();
    return { data };
  },
});
</script>