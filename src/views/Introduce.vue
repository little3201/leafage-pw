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
            <v-card class="pa-7" outlined>
              <h2>李文强</h2>
              <p class="font-weight-thin">little3201@163.com</p>
              <p>Java开发程序员</p>
              <v-list>
              </v-list>
              <p>CSDN：https://me.csdn.net/zx110503</p>
              <p>https://github.com/little3201</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers'

export default {
  name: 'introduce',
  components: {
    Headers
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
