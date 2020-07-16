<template>
  <section
    id="social"
    class="accent text-center"
    space="56"
  >
    <v-icon class="my-8" x-large>
      mdi-github
    </v-icon>

    <p
      color="transparent"
      title="Social Media"
    >
      所有项目都在github开源，了解更多代码详情，点击链接查看.
    </p>

    <v-btn
      class="font-weight-bold my-8"
      color="primary"
      href="https://github.com/little3201"
      light
      target="_blank"
      large
      depressed
    >
      去看看
    </v-btn>
  </section>
</template>

<script>
export default {
  name: 'SectionSocial',

  provide: {
    heading: { align: 'center' }
  }
}
</script>