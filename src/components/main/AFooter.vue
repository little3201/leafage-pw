<template>
  <div>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <div class="links">
        <a href="https://www.abeille.top/" target="_blank">
          <a-icon type="linkedin" />
        </a>
        <a href="https://github.com/little3201/abeille-ui" target="_blank">
          <a-icon type="github" />
        </a>
      </div>
      <div class="copyright">
        Copyright
        <a-icon type="copyright" />2018 - 2019
        <span>abeille.top Serviced</span>
      </div>
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  name: "AFooter",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.links {
  margin-bottom: 8px;
  a {
    color: rgba(0, 0, 0, 0.45);

    &:hover {
      color: rgba(255, 165, 0, 0.65);
    }

    &:not(:last-child) {
      margin-right: 40px;
    }
  }
}
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
