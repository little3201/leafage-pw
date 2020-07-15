<script>
// Extensions
import View from '@/views/View'

// Mixins
import LoadSections from '@/mixins/load-sections'

export default {
  name: 'Blog',

  metaInfo: {
    title: 'Blog，博客文章',
    meta: [
      { name: 'keywords', content: 'abeille, blog, 博客, 高质量, 原创' },
      { name: 'description', content: '高质量、原创文章，包括Java、Vue、Go' }
    ]
  },

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
