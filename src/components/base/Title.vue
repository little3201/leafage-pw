<script>
import Heading from './Heading'
import Header from '@/mixins/heading'

export default {
  name: 'BaseTitle',

  extends: Heading,

  mixins: [Header],

  props: {
    size: {
      type: String,
      default: 'text-h6'
    },
    mobileSize: {
      type: String,
      default: 'text-subtitle-1'
    },
    tag: {
      type: String,
      default: 'h3'
    },
    weight: {
      type: String,
      default: 'bold'
    }
  }
}
</script>
