<template>
  <v-theme-provider dark>
    <section
      id="social"
      class="accent text-center"
      space="56"
    >
      <v-icon class="mb-8">
        mdi-github
      </v-icon>

      <span
        color="transparent"
        title="Social Media"
      >
        所有项目都在github开源，了解更多代码详情，点击链接查看.
      </span>

      <a
        class="d-inline-block mb-8"
        href="https://abeille.top"
        style="text-decoration: none;"
        target="_blank"
      >
        https://abeille.top
      </a>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://github.com/little3201"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Me

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </section>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'SectionSocial',

  provide: {
    heading: { align: 'center' }
  }
}
</script>