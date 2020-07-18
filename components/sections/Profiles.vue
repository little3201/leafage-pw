<template>
  <section id="profiles">
    <v-responsive
      class="mx-auto"
      max-width="1400"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-img
                :src="require(`${item.imageUrl}?imageMogr2/thumbnail/640x640/interlace/1/blur/1x0/quality/100.jpg`)"
                height="245"
                max-width="100%"
                alt="{ item.title }"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out reveal grey darken-3 white--text pa-3"
                    style="height: 100%;"
                  >
                    {{ item.subtitle }}
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
            <h3
              class="font-weight-black text-truncate"
              v-text="item.title"
            />

            <v-btn
              v-if="item"
              class="ml-n4 font-weight-black"
              text
              :to="'/blog/detail/' + item.businessId"
            >
              点击阅读
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </section>
</template>

<script>
import { SERVER_URL } from '~/assets/script/request'

export default {
  name: 'SectionProfiles',

  async asyncData ({ $axios }) {
    const { datas } = await $axios.$get(SERVER_URL.article)
    return { items: datas }
  },

  data: () => ({
    items: []
  })
}
</script>
