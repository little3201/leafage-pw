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
        default: 'title',
      },
      mobileSize: {
        type: String,
        default: 'subtitle-1',
      },
      tag: {
        type: String,
        default: 'h3',
      },
      weight: {
        type: String,
        default: 'bold',
      },
    },
  }
</script>
