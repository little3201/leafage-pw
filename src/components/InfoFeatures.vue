<template>
  <base-info-card title="FeaturesAlt">
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text text-body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
export default {
  name: 'SectionFeaturesAlt',

  data: () => ({
    features: [
      '资源开放',
      '代码开源',
      '长期支持'
    ]
  })
}
</script>
