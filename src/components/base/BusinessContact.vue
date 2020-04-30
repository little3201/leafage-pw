<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseBusinessContact',

  props: {
    dark: Boolean,
    dense: Boolean,
    title: String
  },

  data: () => ({
    business: [
      {
        icon: 'mdi-map-marker-outline',
        title: 'Address',
        text: '陕西省 · 西安市<br>碑林区 · 长安北路'
      },
      {
        icon: 'mdi-wechat',
        title: 'Wechat',
        text: '布吉岛<br>q335699669'
      },
      {
        icon: 'mdi-email',
        title: 'Email',
        text: 'little3201@gmail.com<br>little3201@163.com'
      }
    ]
  })
}
</script>
