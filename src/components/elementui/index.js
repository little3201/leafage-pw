import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Carousel,
  CarouselItem,
  Divider,
  Drawer,
  Form,
  FormItem,
  Header,
  Icon,
  Image,
  Input,
  Link,
  Main,
  Footer,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Popover,
  Row
} from 'element-ui'

const Element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Card)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(Col)
    Vue.use(Container)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Divider)
    Vue.use(Drawer)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Header)
    Vue.use(Icon)
    Vue.use(Image)
    Vue.use(Input)
    Vue.use(Link)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Submenu)
    Vue.use(Popover)
    Vue.use(Row)
  }
}

export default Element
