import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

// import bnf from 'highlight.js/lib/languages/bnf'
// import common from 'highlight.js/lib/languages/common'

export async function parseDoc(doc: string) {
    const file = await unified()
        .use(remarkParse, {fragment: true})
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] })
        .use(rehypeHighlight)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(doc)
    return String(file)
}
