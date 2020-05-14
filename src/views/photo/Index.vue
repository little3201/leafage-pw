<script>
// Extensions
import View from '@/views/View'

// Mixins
import LoadSections from '@/mixins/load-sections'

export default {
  name: 'Photos',

  metaInfo: { title: 'Photos' },

  extends: View,

  mixins: [
    LoadSections([
      'hero-alt',
      'theme-features',
      'newsletter',
      'info'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'photos'
    }
  }
}
</script>
