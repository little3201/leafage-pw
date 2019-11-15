<template>
  <div class="home">
    <Layout>
      <headers />
      <Content>
        <article />
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Headers from '@/components/Headers.vue'
import Article from '@/views/article/Article.vue'

@Component({
  components: {
    Headers,
    Article
  }
})
export default class Home extends Vue {}
</script>
