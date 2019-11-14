<template>
  <mavon-editor
    class="md"
    :value="articleDetail.context"
    :subfield="prop.subfield"
    :defaultOpen="prop.defaultOpen"
    :toolbarsFlag="prop.toolbarsFlag"
    :editable="prop.editable"
    :scrollStyle="prop.scrollStyle"
  ></mavon-editor>
</template>

<script lang="ts">
import Vue from 'vue'
export default class MarkShow extends Vue {
  private subfield: boolean = false // 单双栏模式
  private defaultOpen: string = 'preview' // edit： 默认展示编辑区域, preview： 默认展示预览区域
  private editable: boolean = false
  private toolbarsFlag: boolean = false
  private scrollStyle: boolean = true
}
</script>