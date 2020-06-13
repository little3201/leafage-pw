<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/logo.png')"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="text-body-1"
        space="4"
        title="ABEILLE"
        weight="regular"
      />

      <base-body>
        一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！
      </base-body>

      <base-btn
        class="mb-12"
        color="white"
        outlined
      >
        More Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseInfo',

  props: {
    title: String,
    dark: Boolean
  }
}
</script>
