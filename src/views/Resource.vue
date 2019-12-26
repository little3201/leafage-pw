<template>
  <div>
    <Headers :flat="false"/>
    <v-content>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
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
  name: 'resource',
  components: {
    Headers,
    Footers
  },
  data () {
    return {
      activeIndex: '/resource'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
