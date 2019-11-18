<template>
  <div id="signin">
    <a-row type="flex" justify="space-around">
      <a-col>
        <a-card :hoverable="true" :style="{ maxWidth: '17rem', margin: 'auto' }">
          <div>
            <img
              :style="{
                    height: '30px',
                    margin: '1em auto'
                  }"
              src="@/assets/logo.svg"
            />
          </div>
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  { rules: [{ required: true, message: 'Enter your username!' }] },
                ]"
                placeholder="账号/手机号/邮箱"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: 'Enter your Password!' }] },
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  },
                ]"
              >
                Remember me
              </a-checkbox>
              <a class="login-form-forgot" href="">
                Forgot password
              </a>
              <a-button type="primary" html-type="submit" class="login-form-button">
                Log in
              </a-button>
              Or
              <a href="">
                register now!
              </a>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      })
    }
  }
}
</script>

<style lang="less">
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
