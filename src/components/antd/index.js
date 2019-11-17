import {
  Button,
  Card,
  Col,
  Carousel,
  Drawer,
  Form,
  Icon,
  Input,
  Layout,
  Menu,
  message,
  Popover,
  Row
} from 'ant-design-vue'

const Antd = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Card)
    Vue.use(Col)
    Vue.use(Carousel)
    Vue.use(Drawer)
    Vue.use(Form)
    Vue.use(Icon)
    Vue.use(Input)
    Vue.use(Layout)
    Vue.use(Menu)
    Vue.use(message)
    Vue.use(Popover)
    Vue.use(Row)
  }
}

export default Antd
