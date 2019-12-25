<template>
  <div>
    <Headers :flat="false"/>
    <v-content>
      <v-container fluid>
        <v-row :gutter="20" type="flex" justify="center">
          <v-col cols="12" xs="12" sm="12" md="10" lg="10">
            <v-card class="max-atuo">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  padding: 30px;
}
</style>
