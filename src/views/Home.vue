<template>
  <div>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <h1>哈哈哈！！！</h1>
      </v-container>
    </v-content>
    <Footers />
  </div>
</template>

<script>
// @ is an alias to /src
import Footers from '@/components/Footers'

export default {
  name: 'introduce',
  components: {
    Footers
  },
  data () {
    return {
    }
  }
}
</script>
