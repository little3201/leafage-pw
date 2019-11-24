<template>
  <v-row align="center" justify="center">
    <v-col style="max-width: 19rem;">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="nickname" :rules="usernameRules" label="昵称" required />
        <v-text-field v-model="username" :rules="usernameRules" label="手机号/邮箱" required />
        <v-text-field v-model="password" :rules="passwordRules" label="密码" required />
        <v-text-field v-model="repassword" :rules="passwordRules" label="确认密码" required />
        <v-btn
          :block="true"
          :rounded="true"
          :loading="loading"
          @click="validate"
        >
          注&nbsp;册
        </v-btn>
      </v-form>
    </v-col>
    <Footers />
  </v-row>
</template>

<script>
import Footers from '@/components/Footers'

export default {
  name: 'signup',
  components: {
    Footers
  },
  data () {
    return {
      valid: true,
      loading: false,
      nickname: '',
      username: '',
      usernameRules: [
        v => !!v || 'Username is required'
      ],
      password: '',
      repassword: '',
      passwordRules: [
        v => !!v || 'Password is required'
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

<style lang="scss" scoped>

</style>
