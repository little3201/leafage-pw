<template>
  <div class="article-list-header">
    <classify-menu @filterByCategory="filterByCategory" :categorys="categorys" :defaultCategory="defaultCategory" ></classify-menu>
    <section-title :mainTitle="mainTitle" :subTitle="subTitle">
      <title-menu-filter @filterByMenu="filterByMenu"  slot="menu" :menu-filter-list="defaultFilterList"></title-menu-filter>
    </section-title>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    filterByMenu (params) {
      this.$emit('filterByMenu', params)
    },
    filterByCategory (params) {
      this.$emit('filterByCategory', params)
    }
  }
}
</script>

<style>
</style>
