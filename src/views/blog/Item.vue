<script>
// Extensions
import View from '@/views/View'

// Mixins
import LoadSections from '@/mixins/load-sections'

export default {
  name: 'Blog',

  metaInfo: { title: 'Blog' },

  extends: View,

  mixins: [
    LoadSections([
      'hero-alt',
      'profiles',
      'newsletter',
      'info'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'blog'
    }
  }
}
</script>
