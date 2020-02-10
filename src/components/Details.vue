<template>
   <v-row justify="center" align="start" class="my-0">
    <v-col cols="12" md="8" lg="8" xl="6">
      <v-card class="pa-7">
        <h2>{{ information.title }}</h2>
        <div class="d-flex pa-3">
          <span>作者：{{ information.author }}</span>
          <v-spacer />
          <a style="top: 4px;">查看原文</a>
        </div>
        <v-divider/>
        <p v-html="information.content" class="pt-3"></p>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" lg="3" xl="2" class="hidden-sm-and-down">
      <v-card class="pa-7">
        <p v-html="information.catalog"></p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'information',
  props: {
    information: {
      title: '',
      catalog: '',
      content: '',
      author: ''
    }
  }
}
</script>
