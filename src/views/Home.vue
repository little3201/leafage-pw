<<<<<<< HEAD
<template>
  <div class="home">
    <Layout>
      <headers />
      <Content :style="{ background: '#fff', minHeight: '500px'}">
        <Card :style="{ width: '460px', margin: '68px auto 0' }">
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
=======
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
      <footers />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from '@/components/Headers.vue'
import Footers from '@/components/Footers.vue'

export default {
  name: 'home',
  components: {
    Headers,
    Footers
  }
}
</script>
>>>>>>> 8c461aa5c38793423e909d21993693ec4bcc2904
