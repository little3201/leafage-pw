<template>
  <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
        class="full-height"
      >
        <v-row justify="center" class="my-0">
          <v-col cols="12" md="10" lg="10" xl="8">
            <h2>李文强</h2>
            <p class="font-weight-thin">little3201@163.com</p>
            <p>Java开发程序员</p>
            <v-list>
            </v-list>
            <p>CSDN：https://me.csdn.net/zx110503</p>
            <p>https://github.com/little3201</p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footers />
  </v-app>
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
      drawer: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
