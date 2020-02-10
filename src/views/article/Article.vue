<template>
  <Details :information="tranlsation"></Details>
</template>

<script>
// @ is an alias to /src
import Details from '@/components/Details'

export default {
  name: 'article',
  components: {
    Details
  },
  data () {
    return {
      article: {
        title: '',
        catalog: '',
        content: '',
        author: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
