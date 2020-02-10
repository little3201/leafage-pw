<template>
  <Details :information="tranlsation"></Details>
</template>

<script>
// @ is an alias to /src
import { queryTranslationFunc } from '@/api/method'
import Details from '@/components/Details'

export default {
  name: 'introduce',
  components: {
    Details
  },
  data () {
    return {
      tranlsation: {
        title: '《Prometheus》',
        catalog: 'Prometheus<p>概览</p><p>开始</p>',
        content: '<h1>Prometheus</h1><p>注：文档仅记录在linux下进行的一系列操作；<br>安装前准备： </p><ol> <li>安装wget，用于下载文件，命令：yuminstallwget-y</li><li>安装lrzsz，用于上传文件资料，命令：yuminstalllrzsz-y</li><li>如果要跨机器访问需要开启端口号，在root用户下使用命令（0000表示要开启的端口号）：<br>firewall-cmd—zone=public—add-port=0000/tcp—permanent<br>firewall-cmd—reload</li></ol> <h1 id="h1-prometheus-">',
        author: '布吉岛'
      }
    }
  },
  methods: {
    queryTranslation () {
      queryTranslationFunc().then(
        response => {
          this.translation = response.data
        },
        error => {
          alert(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
