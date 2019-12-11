<template>
  <v-row type="flex" justify="center" align="center">
    <v-col :xs="22" :sm="6" :md="5" :lg="4">
      <v-card class="card-sign" style="text-align:center;">
        <router-link to="/">
          <img style="height: 4rem;" src="@/assets/logo.svg" />
        </router-link>
        <h2 style="text-align: initial; margin-bottom: 0;">注册</h2>
        <p style="text-align: initial; margin-top: 0;">已有邮箱账户？
         <a type="primary" :underline="false" style="vertical-align: initial;">立即绑定</a>
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="formData.username"
            :rules="formRules.username"
            label="账号/手机号/邮箱"
            prepend-inner-icon="mdi-account"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.password"
            :rules="formRules.password"
            label="登录密码"
            prepend-inner-icon="mdi-lock"
            required
          ></v-text-field>
        </v-form>
        <p style="text-align: initial;">
          <span>已有账号？</span>
          <a href="/signin" style="vertical-align: initial;">去登录</a>
        </p>
        <p>
          <v-btn rounded color="primary" block @click="submitForm('loginForm')">注&nbsp;册</v-btn>
        </p>
        <p>
          <span>注册即表示同意</span>
          <a href="#" style="vertical-align: initial;">《Abeille用户协议》</a>
        </p>
        <h3>第三方账号登录</h3>
        <p>
          <v-btn text icon :x-large="true">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn text icon :x-large="true">
            <v-icon>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn text icon :x-large="true">
            <v-icon>mdi-wechat</v-icon>
          </v-btn>
        </p>
      </v-card>
    </v-col>
    <Footers />
  </v-row>
</template>

<script>
import { login } from '@/api/request'
import Footers from '@/components/Footers.vue'

export default {
  name: 'signup',
  components: {
    Footers
  },
  data () {
    return {
      valid: true,
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          v => !!v || '请输入账号',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        password: [
          v => !!v || '请输入密码',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      if (this.$refs.form.validate()) {
        login(this.formData).then(
          response => {
            // 设置token
            this.$router.push({
              name: 'home'
            })
          },
          error => {
            // 执行失败的回调函数
            alert(error.message)
          }
        )
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-sign {
  padding: 35px;
  max-width: 23rem;
}
</style>
