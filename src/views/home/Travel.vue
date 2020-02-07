<template>
  <v-row>
    <v-col v-for="n in 9" :key="n" cols="12" xs="12" sm="6" md="4" lg="3" xl="3">
      <v-card
        max-width="344"
        class="mx-auto"
      >
        <v-list-item>
          <v-list-item-avatar color="grey">U</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
          height="194"
        ></v-img>

        <v-card-text>
          Visit ten places on our planet that are undergoing the biggest changes today.
        </v-card-text>

        <v-card-actions>
          <v-btn text color="primary">
            Read
          </v-btn>
          <v-btn text color="primary">
            Bookmark
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'travel',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
