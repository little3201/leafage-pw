import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import anchor from 'markdown-it-anchor'
import emoji from 'markdown-it-emoji'
import toc from 'markdown-it-table-of-contents'
import container from 'markdown-it-container'

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) { }
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  },
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})
  .use(anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#'
  }) // 使用 anchor 插件为标题元素添加锚点
  .use(emoji)
  .use(toc, { includeLevel: [2, 3] }) // 使用 table-of-contents 插件实现自动生成目录
  .use(container, 'info')
  .use(container, 'success')
  .use(container, 'warning')
  .use(container, 'danger')

export default md
