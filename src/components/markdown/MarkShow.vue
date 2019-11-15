<template>
  <mavon-editor
    :value="content"
    :subfield="subfield"
    :defaultOpen="defaultOpen"
    :toolbarsFlag="toolbarsFlag"
    :editable="editable"
    :scrollStyle="scrollStyle"
    :ishljs="true"
  ></mavon-editor>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MarkShow extends Vue {
  @Prop() private content!: string
  private subfield: boolean = false // 单双栏模式
  private defaultOpen: string = 'preview' // edit： 默认展示编辑区域, preview： 默认展示预览区域
  private editable: boolean = false
  private toolbarsFlag: boolean = false
  private scrollStyle: boolean = true
}
</script>