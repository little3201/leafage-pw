<template>
  <div id="signin">
    <el-row type="flex" justify="space-around">
      <el-col>
        <el-card :hoverable="true" :style="{ maxWidth: '17rem', margin: 'auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item
              prop="username"
              label="用户名"
              :rules="[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { message: '请输入正确的用户名', trigger: ['blur', 'change'] }
              ]"
            >
              <el-input v-model="dynamicValidateForm.username"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="用户名"
              :rules="[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { type: 'password', message: '请输入正确的密码', trigger: ['blur', 'change'] }
              ]"
            >
              <el-input v-model="dynamicValidateForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="remberme">
              <el-checkbox-group v-model="ruleForm.remberme">
                <el-checkbox label="记住我？" name="remberme"></el-checkbox>
              </el-checkbox-group>
              <el-link type="primary">忘记密码</el-link>
              <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#signin {
  background-image: url('../../assets/place.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
