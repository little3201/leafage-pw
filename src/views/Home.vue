<template>
  <div>
    <Headers />
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-carousel
          v-model="model"
          :show-arrows="true"
          :hide-delimiters="true"
          :vertical="true"
          :continuous="false"
        >
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"
          >
            <v-sheet
              :color="color"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
  name: 'introduce',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      model: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.container--fluid {
  padding: 0;
}
</style>
