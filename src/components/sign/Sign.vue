<template>
  <div class="user-login">
    <div class="user-login-bg">
			<div class="content-wrapper">
			  <h2 class="slogan">
			    欢迎使用 <br />
			    Abeille 后台管理系统
			  </h2>
			  <div class="form-container">
			    <h2 class="form-title">登&emsp;录</h2>
			    <Form>
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
								<Button long shape="circle" type="primary" @click="handleSubmit('formInline')">登&emsp;&emsp;录</Button>
						</FormItem>
			    </Form>
			  </div>
			</div>
		</div>
  </div>
</template>

<script>
import "./Sign.less";
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
.user-login-bg {
  background-image: url("../../assets/laptop.png");
}
</style>
