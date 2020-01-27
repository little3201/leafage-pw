<template>
  <v-row :gutter="20" justify="center">
    <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="8">
      <v-card>
        <h2>简介</h2>
        <p>还没想好写点啥</p>
        <h3>联系方式：</h3>
        <p>CSDN：https://me.csdn.net/zx110503</p>
        <p>GitHub：https://github.com/little3201</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'introduce',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  padding: 30px;
}
</style>
