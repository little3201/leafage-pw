<template>
  <section id="about-me">
    <v-container class="text-center my-8">
      <h2 class="text-h3 font-weight-bold mb-3">
        ABOUT ME
      </h2>
      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-responsive
        class="mx-auto text-h6 font-weight-light mb-8"
        max-width="720"
      >
        一个圆脸蛋儿、大脑袋的JAVA后端程序猿🐒，哦对～，就像下面头像一样，还有～会一点点前端，讷～你现在看得就是。
        喜欢摄影📷、游泳🏊，跑步🏃...
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img src="images/avatar.jpg" alt="abeille" />
      </v-avatar>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SectionAboutMe'
}
</script>
