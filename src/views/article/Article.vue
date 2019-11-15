<template>
  <div>
    <mark-show :content="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MarkShow from '@/components/markdown/MarkShow.vue'

@Component({
  components: {
    MarkShow
  }
})
export default class Article extends Vue {
  private content: string = '# 你写的是个啥啊 \n 看不懂啊'
}
</script>

<style lang="less" scoped>
</style>