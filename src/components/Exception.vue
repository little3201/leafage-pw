<template>
  <v-row justify="center" align="start" class="my-0">
    <v-col>
      <img :src="imageUrl" alt="404">
      <p>{{ message }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    status: '404',
    message: '该页面不存在，请联系管理员。',
    imageUrl: '~@/assets/images/404.png'
  })
}
</script>
