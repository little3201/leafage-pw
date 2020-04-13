export default {
  name: 'Heading',

  inject: {
    heading: {
      default: () => ({ align: 'left' })
    }
  },

  provide () {
    return {
      heading: {
        align: this.align
      }
    }
  },

  props: {
    align: {
      type: String,
      default () {
        return this.heading.align
      }
    }
  },

  computed: {
    justify () {
      switch (this.align) {
        case 'center': return 'center'
        case 'right': return 'end'
        default: return 'start'
      }
    }
  }
}
