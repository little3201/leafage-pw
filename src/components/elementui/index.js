import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Carousel,
  CarouselItem,
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
    Vue.use(Popover)
    Vue.use(Row)
  }
}

export default Element
