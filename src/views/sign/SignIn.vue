<template>
  <el-row type="flex" justify="center" align="middle" style="height: 100vh; text-align: center;">
    <el-col :xs="0" :sm="12" :md="13" :lg="14">
      <el-image src="https://oss.abeille.top/place.svg" fit="contain" />
    </el-col>
    <el-col :xs="22" :sm="10" :md="8" :lg="6">
      <el-card :hoverable="true" style="padding: 15px; width: 20rem;">
        <router-link to="/">
          <img style="height: 3.5rem;" src="@/assets/logo.png" />
        </router-link>
        <h3 style="text-align: initial; margin-bottom: 0;">登录</h3>
        <p style="text-align: initial; font-size: 14px; margin-top: 0;">
          <span>已有邮箱账户？</span>
          <el-link type="primary" :underline="false" style="vertical-align: initial;">立即绑定</el-link>
        </p>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" :hide-required-asterisk="true">
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="请输入账号/邮箱" />
          </el-form-item>
          <el-form-item prop="password" style="margin-bottom: 5px">
            <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" placeholder="请输入登录密码" />
          </el-form-item>
        </el-form>
        <p style="text-align: end">
          <el-link type="info" :underline="false" style="vertical-align: initial;">忘记密码</el-link>
        </p>
        <p>
          <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%;">登&nbsp;录</el-button>
        </p>
        <p style="text-align: initial;">
          <span style="font-size: 14px;">没有账号？</span>
          <el-link type="primary" href="/signup" :underline="false" style="vertical-align: initial;">
            去注册
          </el-link>
        </p>
        <p>第三方账号登录</p>
        <p>
          <el-button size="small" type="primary" icon="el-icon-eleme" circle></el-button>
          <el-button size="small" type="success" icon="el-icon-eleme" circle></el-button>
          <el-button size="small" type="info" icon="el-icon-eleme" circle></el-button>
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { login } from '@/api/request'

export default {
  name: 'signin',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        remberme: false
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.loginForm).then(
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
      })
    }
  }
}
</script>

<style lang="scss">
</style>
