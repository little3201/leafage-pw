export default defineEventHandler (() => {
    return {
        "code": "2128BXOG",
        "modifyTime": "2021-12-14T16:41:27.804",
        "title": "微信公众号网页授权，redirect_uri参数错误，解决方法",
        "cover": "https://cdn.leafage.top/railway-gbfdf1d4b1.jpg",
        "tags": [
            "域名",
            "urlencode",
            "公众号",
            "wechat",
            "redirect_uri"
        ],
        "category": "Experience",
        "likes": 2,
        "comment": 1,
        "viewed": 296,
        "content": '最近在做微信服务，遇到一些问题，比如：微信公众号网页授权，redirect_uri参数错误，但是网上好多文章说不清楚，反反复复修改，还是不行。\n\n微信公众号里的回调只能是完整域名，比如你访问 `http://www.xx.com/authorize` 进行认证，但是回调要填写 `www.xx.com` ，然后请求的时候参数是要将地址进行URLEncode 之后填写（填写：`http%3a%2f%2fwww.xx.com%2fauthorize` ），这样就可以了。'
    }

})