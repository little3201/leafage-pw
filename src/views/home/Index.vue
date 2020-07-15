<script>
// Extensions
import View from '@/views/View'

// Mixins
import LoadSections from '@/mixins/load-sections'

export default {
  name: 'Home',

  metaInfo: {
    title: 'Abeille-布吉岛，一座永不沉没的网络小岛',
    meta: [
      { name: 'keywords', content: 'abeille, 好看的网站, 布吉岛, vue, vuetify, 博客, blog' },
      { name: 'description', content: '一套免费、开源的前后端服务产品、包括精美的前端展示、后端运营和完整的后端服务，更惊喜的是，这一切都是免费的，并且长期维护的！' }
    ]
  },

  extends: View,

  mixins: [
    LoadSections([
      'hero',
      'features',
      'stats',
      'newsletter',
      'about-me',
      'info'
    ])
  ],

  props: {
    id: {
      type: String,
      default: 'home'
    }
  }
}
</script>
