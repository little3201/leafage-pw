export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "abeille-ui",
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: "xxx"}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseURL: {
    dev: "http://localhost",
    pro: "https://abeille.top"
  }
};
