<template>
 <v-app app>
    <Headers />
    <v-content>
      <v-container
        fluid
      >
        <!-- If using vue-router -->
         <v-row justify="center" align="start" class="my-0">
          <v-col cols="12" md="8" lg="8" xl="6">
            <v-card class="pa-7">
              <h2>{{ details.title }}</h2>
              <div class="d-flex pa-3">
                <span>作者：{{ details.author }}</span>
                <v-spacer />
                <a style="top: 4px;">查看原文</a>
              </div>
              <v-divider/>
              <p v-html="details.content" class="pt-3"></p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" lg="3" xl="2" class="hidden-sm-and-down">
            <v-card class="pa-7">
              <p v-html="details.catalog"></p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Headers from '@/components/Headers'
import { queryArticleFunc } from '@/api/method'

export default {
  name: 'information',
  components: {
    Headers
  },
  data: () => ({
    details: {
      title: '',
      catalog: '',
      content: '',
      author: ''
    }
  }),
  created: function () {
    if (this.$route.params.businessId) {
      this.queryArticle(this.$route.params.businessId)
    }
  },
  methods: {
    queryArticle (businessId) {
      queryArticleFunc(businessId).then(
        response => {
          this.details = response.data
        },
        error => {
          alert(error.statusText)
        }
      )
    }
  }
}
</script>
