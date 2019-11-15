<template>
  <div id="introduce">
    <Layout>
      <headers :activeName="activeName" />
      <Content>
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Headers from '@/components/Headers.vue'

@Component({
  components: {
    Headers
  }
})
export default class Introduce extends Vue {
  private activeName: string = 'introduce'
}
</script>

<style lang="less" scoped>
#introduce{
  background-image: url('../assets/undraw_onboarding_o8mv.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
