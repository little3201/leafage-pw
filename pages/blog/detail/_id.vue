<template>
  <v-container>
    <v-responsive class="mx-auto">
      <v-row justify="center" align="start" class="ma-0">
        <v-img
          :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
          :src="data.imageUrl+'?imageMogr2/auto-orient/thumbnail/!x50p/interlace/1/blur/1x0/quality/100'"
          color="#45516b"
          flat
          max-width="100%"
          tile
          class="text-center white--text align-center"
        >
          <h1>{{ data.title }}</h1>
          <p class="mt-3">
            <strong v-if="data.author">作者：</strong> {{ data.author ? data.author.nickname : '' }}
          </p>
        </v-img>
      </v-row>
      <v-row justify="center" align="start" class="my-0 mx-auto">
        <v-col cols="12" md="8">
          <p v-html="data.content" />
          <!-- 上一篇：{{ data.previous.title }} -->
          <v-divider />
          <!-- 下一篇：{{ data.next.title }} -->
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { SERVER_URL } from '~/assets/script/request'

export default {
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get(SERVER_URL.article.concat('/').concat(params.id))
    return { data }
  }
}
</script>
