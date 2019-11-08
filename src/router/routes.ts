import Home from '../views/Home.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/article/:articleId',
        name: 'article',
        component: () => import('@/views/article/Article.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/sign/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/sign/SignUp.vue')
    }
]
