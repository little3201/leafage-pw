import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('@/views/Introduce.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('@/views/Resource.vue')
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
