<template>
  <div>
    <router-link to="/">
      <a-icon type="question-circle-o"></a-icon>
    </router-link>
    <!-- 通知 -->
    <notice />
    <a-dropdown>
      <span class="action ant-dropdown-link user-dropdown-menu">
        <!-- <a-avatar class="avatar" size="small" :src="avatar()"/> -->
        <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">D</a-avatar>
        <span>小道士</span>
      </span>
      <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
        <a-menu-item key="0">
          <router-link to="profile">
            <a-icon type="user" />
            <span>个人中心</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link to="settings">
            <a-icon type="setting" />
            <span>账户设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">
          <a href="javascript:;" @click="handleLogout">
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
import { clearStore } from "@/utils/assist/storage";

export default {
  components: {
    Notice
  },
  methods: {
    handleLogout() {
      this.$confirm({
        title: "提示",
        content: "真的要注销登录吗 ?",
        onOk() {
          clearStore("Access-token");
          window.location.reload();
        },
        onCancel() {}
      });
    }
  }
};
</script>
