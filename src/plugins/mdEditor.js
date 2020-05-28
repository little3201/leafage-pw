import Vue from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import 'prismjs/components/prism-java.min.js'

VueMarkdownEditor.use(vuepressTheme)

Vue.use(VueMarkdownEditor)
