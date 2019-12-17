<template>
  <v-row justify="center">
    <v-col v-for="n in 9" :key="n" xs="22" sm="6" md="6" lg="4">
      <v-card flat tile>
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'travel',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
