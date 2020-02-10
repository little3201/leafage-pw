import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/technology',
        name: 'technology',
        component: () => import('@/views/home/Technology.vue')
      },
      {
        path: '/translation',
        name: 'translation',
        component: () => import('@/views/home/Translation.vue')
      },
      {
        path: '/travel',
        name: 'travel',
        component: () => import('@/views/home/Travel.vue')
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: () => import('@/views/home/Introduce.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/home/Article.vue')
      }
    ]
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
