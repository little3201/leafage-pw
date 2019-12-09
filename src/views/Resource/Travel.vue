<template>
  <v-row>
    <v-col v-for="n in 9" :key="n" cols="4">
      <v-card flat tile>
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
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
