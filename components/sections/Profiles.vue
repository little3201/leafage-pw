<template>
  <section id="profiles">
    <v-responsive
      class="mx-auto"
      max-width="1400"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="(item, i) in datas"
            :key="i"
            cols="12"
            md="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-img
                :src="item.imageUrl+'?imageMogr2/thumbnail/640x640/interlace/1/blur/1x0/quality/100'"
                height="245"
                max-width="100%"
                alt="item.title"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out hover-reveal grey darken-3 white--text pa-3"
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
              :to="'/blog/' + item.businessId"
              nuxt
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

export default {
  name: 'SectionProfiles',

  props: {
    datas: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
.hover-reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: .5
  position: absolute
</style>
