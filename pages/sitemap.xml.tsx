import { getAllPosts } from '../lib/api'


const EXTERNAL_DATA_URL = 'https://www.leafage.top/posts'

function generateSiteMap(posts: { code: string, modifyTime: Date }[]) {
   return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
        <loc>https://www.leafage.top</loc>
        <lastmod>2022-04-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
     </url>
     <url>
        <loc>https://www.leafage.top/posts</loc>
        <lastmod>2022-04-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
     </url>
     <url>
        <loc>https://www.leafage.top/resource</loc>
        <lastmod>2022-04-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
     </url>
     <url>
        <loc>https://www.leafage.top/about</loc>
        <lastmod>2022-04-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
     </url>
     ${posts.map(({ code, modifyTime }) => {
      return `
       <url>
          <loc>${`${EXTERNAL_DATA_URL}/${code}`}</loc>
          <lastmod>${new Date(modifyTime).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
       </url>
     `
   }).join('')}
   </urlset>
 `
}

function SiteMap() {
   // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
   // We make an API call to gather the URLs for our site
   const posts = await getAllPosts()

   // We generate the XML sitemap with the posts data
   const sitemap = generateSiteMap(posts)

   res.setHeader('Content-Type', 'text/xml')
   // we send the XML to the browser
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap