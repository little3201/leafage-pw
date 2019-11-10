<template>
  <div class="home">
    <Layout>
      <headers />
      <Content :style="{ background: '#fff', minHeight: '500px'}">
        <Card :bordered="false" :style="{ width: '90%', margin: '68px auto 0' }">
          <div style="text-align:center">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
          </div>
        </Card>
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
    }
  }
</script>
