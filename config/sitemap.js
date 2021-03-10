import axios from "axios"
const sitemap = {
    path: '/sitemap.xml', // 生成的文件路径
    hostname: 'https://www.abeille.top/', // 网址
    cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude: [
        '/error' //  这里的路径相对 hostname
    ],
    // xml默认的配置
    defaults: {
        changefreq: 'always',
        lastmod: new Date()
    },
    // 需要生成的xml数据, return 返回需要给出的xml数据
    routes: async () => {
        const routes = [
            {
                url: "/",  //  这里的路径相对 hostname
                changefreq: "always",
                lastmod: new Date()
            },
            {
                url: "/posts",
                changefreq: "always",
                lastmod: new Date()
            },
            {
                url: "/portfolio",
                changefreq: "always",
                lastmod: '2021-03-10'
            },
            {
                url: "/about",
                changefreq: "yearly",
                lastmod: '2021-03-10'
            },
            {
                url: "/contact",
                changefreq: "yearly",
                lastmod: '2021-03-10'
            }
        ]
        // 从后台获取数据,拼接url生成更多的xml数据
        const getUrl = 'https://www.abeille.top/api/assets/posts'
        const { data } = await axios.get(getUrl)
        if (data && data.list) {
            let arr = data.list.map(item => ({
                url: "/posts/" + item.code,
                lastmod: item.update_time,
                changefreq: "daily"
            }))
            routes.concat(arr)
        }

        return routes
    }
}

export default sitemap