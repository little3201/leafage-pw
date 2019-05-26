<template>
  <div class="user-login">
    <div class="user-login-bg"></div>
    <div class="content-wrapper">
      <h2 class="slogan">
        欢迎使用 <br />
        ICE 内容管理系统
      </h2>
      <div class="form-container">
        <h4 class="form-title">登录</h4>
        <Form>
          <div class="form-items">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                <Icon type="ios-person-outline" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                <Icon type="ios-lock-outline" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登&nbsp;&nbsp;录</Button>
            </FormItem>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style>
@import "./Sign.less";
.user-login-bg {
  background-image: url("../../assets/laptop.png");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
}
</style>
