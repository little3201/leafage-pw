<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="KEEP IN TOUCH WITH US"
        pace="6"
      >
        还在开发中。。。
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: 'BaseBusinessInfo',

  props: { dark: Boolean },

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
