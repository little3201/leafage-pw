<template>
  <div id="avatar">
    <router-link class="hrefColor" to="/help">
      <span><a-icon type="question-circle"/></span>
    </router-link>
    <!-- 通知 -->
    <notice />
    <a-dropdown>
      <span>
        <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">D</a-avatar>
      </span>
      <a-menu slot="overlay" style="top: 22px">
        <a-menu-item key="profile">
          <router-link to="/profile">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="account">
          <router-link to="/account">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="signout">
          <a href="javascript:;" @click="logout">
            <a-icon type="logout" />
            <span>退出登录</span>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import Notice from "@/components/notice/Notice.vue";
import { removeToken } from "@/utils/assist/cookies";

export default {
  components: {
    Notice
  },
  methods: {
    logout() {
      this.$confirm({
        title: "提示",
        content: "真的要注销登录吗 ?",
        onOk() {
          removeToken();
          //这里无法使用this.$router
          window.location.reload();
        },
        onCancel() {}
      });
    }
  }
};
</script>

<style lang="less" scoped>
span {
  margin: 0 10px;
}
.hrefColor {
  color: rgba(0, 0, 0, 0.65);
}
</style>
