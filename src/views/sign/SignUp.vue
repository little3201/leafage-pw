<template>
  <el-row type="flex" justify="end" align="middle" style="height: 100vh; text-align: center;">
    <el-col :span="16">
      <el-image src="https://oss.abeille.top/place.svg" fit="contain" />
    </el-col>
    <el-col :span="8">
      <el-card :hoverable="true" style="max-width: 18rem;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :hide-required-asterisk="true">
          <el-form-item>
            <router-link to="/">
              <img style="height: 3rem;" src="@/assets/logo.svg" />
            </router-link>
          </el-form-item>
           <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" placeholder="昵称" />
          </el-form-item>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" placeholder="账号/手机号/邮箱" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-unlock" v-model="ruleForm.password" placeholder="登录密码" />
          </el-form-item>
           <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" v-model="ruleForm.password" placeholder="确认密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width : 100%">立即注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="text">已有账号？立即登录</el-button>
          </el-form-item>
        </el-form>
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
