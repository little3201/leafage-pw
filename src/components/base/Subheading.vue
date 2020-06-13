<script>
import Heading from './Heading'

export default {
  name: 'BaseTitle',

  extends: Heading,

  props: {
    size: {
      type: String,
      default: 'text-h5'
    },
    sizeMobile: {
      type: String,
      default: 'text-h6'
    },
    weight: {
      type: String,
      default: 'bold'
    }
  }
}
</script>
