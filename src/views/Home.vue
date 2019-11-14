<template>
  <div class="home">
    <Layout>
      <headers />
      <Content>
        <div>
          <ul>
            <li v-for="(item, index) in datas" :key="index">{{ item }}</li>
          </ul>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'

export default {
  name: 'home',
  components: {
    Headers
  },
  data() {
    return {
      datas: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        content: '2019-10-10'
      }
    }
  }
}
</script>
