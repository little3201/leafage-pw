<template>
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="6" md="5" lg="3" xl="2">
      <v-card class="card-login" style="text-align: center;">
        <router-link to="/">
          <img style="height: 3.5rem;" src="@/assets/logo.png" />
        </router-link>
        <p class="headline mb" style="text-align: initial;">登录</p>
        <p style="text-align: initial;">
          <span>已有邮箱账户？</span>
          <a href="#" class="link" style="vertical-align: initial;">立即绑定</a>
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="formData.username"
            :rules="formRules.username"
            label="手机号/邮箱"
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
        <p style="text-align: end;">
          <a href="#"  class="link">忘记密码</a>
        </p>
        <p>
          <v-btn rounded color="primary" block @click="submitForm">
            登&nbsp;录
          </v-btn>
        </p>
        <p style="text-align: initial;">
          <span>没有账号？</span>
          <a href="/signup" class="link">
            去注册
          </a>
        </p>
        <p class="mb">第三方账号登录</p>
        <p style="margin-bottom: 0">
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
  </v-row>
</template>

<script>
import { loginFunc } from '@/api/method'

export default {
  name: 'signin',
  data () {
    return {
      valid: true,
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          v => !!v || '请输入手机号/邮箱'
        ],
        password: [
          v => !!v || '请输入密码'
        ]
      }
    }
  },
  methods: {
    submitForm () {
      if (this.$refs.form.validate()) {
        loginFunc(this.formData).then(
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
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.v-card {
  padding: 30px;
}
.link {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}
span {
  font-size: 14px;
}
.mb {
  margin-bottom: 0;
}
</style>
