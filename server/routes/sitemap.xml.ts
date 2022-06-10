import { SitemapStream, streamToPromise } from 'sitemap'
export default defineEventHandler(async (event) => {
    const sitemap = new SitemapStream({
        hostname: 'https://www.leafage.top'
    })
    
    // Fetch all documents
    //   const docs = await serverQueryContent(event).find()
    const data = await useFetch(`https://www.leafage.top/api/assets/posts?page=0&size=999`)
    for (const doc of data.content) {
        sitemap.write({
            url: doc._path,
            changefreq: 'monthly'
        })
    }
    sitemap.end()
    return streamToPromise(sitemap)
})