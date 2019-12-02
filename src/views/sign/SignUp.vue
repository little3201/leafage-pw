<template>
  <el-row type="flex" justify="center" align="middle" style="height: 100vh; text-align: center;">
    <el-col :xs="0" :sm="12" :md="14">
      <el-image src="https://oss.abeille.top/place.svg" fit="contain" />
    </el-col>
    <el-col :xs="22" :sm="10" :md="8">
      <el-card :hoverable="true" style="padding: 15px; max-width: 20rem;">
        <router-link to="/">
          <img style="height: 3.5rem;" src="@/assets/logo.svg" />
        </router-link>
        <h3 style="text-align: initial; margin-bottom: 0;">注册</h3>
        <p style="text-align: initial; font-size: 14px; margin-top: 0;">已有邮箱账户？
         <el-link type="primary" :underline="false" style="vertical-align: initial;">立即绑定</el-link>
        </p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :hide-required-asterisk="true">
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" placeholder="请输入账号/手机号/邮箱" />
          </el-form-item>
          <el-form-item prop="password" style="margin-bottom: 5px">
            <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" placeholder="请输入登录密码" />
          </el-form-item>
        </el-form>
        <p style="text-align: initial;">
          <span style="font-size: 14px;">已有账号？</span>
          <el-link type="primary" href="/signin" :underline="false" style="vertical-align: initial;">去登录</el-link>
        </p>
        <p>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width : 100%">注&nbsp;册</el-button>
        </p>
        <p style="font-size: 14px;">
          <span>注册即表示同意</span>
          <el-link type="primary" :underline="false" style="vertical-align: initial;">《Abeille用户协议》</el-link>
        </p>
        <p>第三方账号登录</p>
        <p>
          <el-button size="small" type="primary" icon="el-icon-edit" circle></el-button>
          <el-button size="small" type="success" icon="el-icon-check" circle></el-button>
          <el-button size="small" type="info" icon="el-icon-message" circle></el-button>
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
