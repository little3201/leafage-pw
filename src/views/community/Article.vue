<template>
  <Details :information="article"></Details>
</template>

<script>
// @ is an alias to /src
import Details from '@/components/Details'
import { queryArticleFunc } from '@/api/method'

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
  },
  methods: {
    queryArticle () {
      if (this.$route.params.businessId) {
        queryArticleFunc(this.$route.params.businessId).then(
          response => {
            this.article = response.data
          },
          error => {
            alert(error.message)
          }
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
