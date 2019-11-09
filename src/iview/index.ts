import {
  Button,
  Card,
  Col,
  Content,
  Drawer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Layout,
  Menu,
  MenuItem,
  Message,
  Row
} from "view-design"

const ViewUI = {
  install: function (Vue: any) {
    Vue.component('Button', Button)
    Vue.component('Card', Card)
    Vue.component('Content', Content)
    Vue.component('Col', Col)
    Vue.component('Drawer', Drawer)
    Vue.component('Form', Form)
    Vue.component('FormItem', FormItem)
    Vue.component('Header', Header)
    Vue.component('Icon', Icon)
    Vue.component('Input', Input)
    Vue.component('Layout', Layout)
    Vue.component('Menu', Menu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('Message', Message)
    Vue.component('Row', Row)
  }
};

export default ViewUI;
