export default defineEventHandler(async () => {
    return [
        {
            date: '2022-03-12',
            type: 'features',
            items: [
                '整体布局重构，替换点赞图标;',
                '评论组件重构，添加回复、及查看回复功能;',
                '排版优化，字体大小重设，更好的体验;',
                '添加移动端的抽屉菜单;'
            ]
        },
        {
            date: '2021-12-02',
            type: 'bugfix',
            items: [
                '首页布局重构，添加评论功能;',
                '抽取重复部分的代码作为组件使用;'
            ]
        },
        {
            date: '2021-10-13',
            type: 'features',
            items: [
                '升级到 nuxt3，并重构所有页面;'
            ]
        }
    ]
})