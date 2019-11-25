<template>
  <v-row align="center" justify="center">
    <v-col style="max-width: 19rem;">
      <img src="../../assets/logo.png" />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :rules="usernameRules" label="账号/手机号/邮箱" required />
        <v-text-field v-model="password" :rules="passwordRules" label="登录密码" required />
        <v-checkbox v-model="checkbox" label="记住我？"></v-checkbox>
        <v-btn :block="true" :rounded="true" :loading="loading" @click="validate">
          登&nbsp;录
        </v-btn>
      </v-form>
    </v-col>
    <Footers />
  </v-row>
</template>

<script>
import Footers from '@/components/Footers'

export default {
  name: 'signin',
  components: {
    Footers
  },
  data () {
    return {
      valid: true,
      loading: false,
      username: '',
      usernameRules: [
        v => !!v || '请输入账号/手机号/邮箱'
      ],
      password: '',
      passwordRules: [
        v => !!v || '请输入登录密码'
      ],
      checkbox: false
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>

<style lang="scss">

</style>
