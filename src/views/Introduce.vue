<template>
  <div>
    <Headers/>
    <Navigation />
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <v-row :gutter="20" type="flex" justify="center">
          <v-col :xs="24" :sm="22" :md="20" :lg="18">
            <v-card style="{ padding: '20px 40px' }">
              <h2>简介</h2>
              <p>还没想好写点啥</p>
              <h3>联系方式：</h3>
              <p>CSDN：https://me.csdn.net/zx110503</p>
              <p>GitHub：https://github.com/little3201</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Navigation from '@/components/Navigation.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'introduce',
  components: {
    Headers,
    Navigation,
    Footers
  },
  data () {
    return {
      activeIndex: '/introduce'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
