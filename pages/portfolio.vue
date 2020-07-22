<template>
  <v-responsive
    class="mx-auto"
    max-width="1400"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, index) in datas"
          :key="index"
          cols="12"
          md="4"
        >
          <v-img
            :src="item.imageUrl"
            class="grey lighten-2"
            alt="item.title"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-responsive>
</template>

<script>
import { SERVER_URL } from '~/assets/script/request'

export default {
  async asyncData ({ $axios }) {
    const datas = await $axios.$get(SERVER_URL.resource)
    return { datas }
  }
}
</script>
