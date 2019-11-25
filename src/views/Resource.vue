<template>
  <div id="resource">
    <Headers />
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
      <h1>眼里只有你。。。</h1>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers'

export default {
  name: 'resource',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
