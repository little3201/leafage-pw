<template>
  <v-row class="signup" align="center" justify="center">
    <v-col style="max-width: 19rem;">
      <img src="../../assets/logo.png" style="height: 100px" />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="nickname" :rules="nicknameRules" label="昵称" required />
        <v-text-field v-model="username" :rules="usernameRules" label="手机号/邮箱" required />
        <v-text-field v-model="password" :rules="passwordRules" label="密码" required />
        <v-text-field v-model="repassword" :rules="repasswordRules" label="确认密码" required />
        <v-btn
          :block="true"
          :rounded="true"
          :loading="loading"
          @click="validate"
        >
          注&nbsp;册
        </v-btn>
        <v-btn text to="/signin">登录</v-btn>
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
      nicknameRules: [
        v => !!v || '请输入昵称'
      ],
      usernameRules: [
        v => !!v || '请输入账号'
      ],
      password: '',
      repassword: '',
      passwordRules: [
        v => !!v || '请输入密码'
      ],
      repasswordRules: [
        v => !!v || '请输入密码'
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
.signup {
  background: #00c3ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #ffff1c, #00c3ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #ffff1c, #00c3ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
