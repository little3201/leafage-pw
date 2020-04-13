<script>
  import Heading from './Heading'

  export default {
    name: 'BaseTitle',

    extends: Heading,

    props: {
      size: {
        type: String,
        default: 'headline',
      },
      sizeMobile: {
        type: String,
        default: 'title',
      },
      weight: {
        type: String,
        default: 'bold',
      },
    },
  }
</script>
