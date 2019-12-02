import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('@/views/Introduce.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('@/views/Resource.vue'),
    children: [
      {
        path: '/technology',
        name: 'technology',
        component: () => import('@/views/Resource/Technology.vue')
      },
      {
        path: '/translation',
        name: 'translation',
        component: () => import('@/views/Resource/Translation.vue')
      },
      {
        path: '/travel',
        name: 'travel',
        component: () => import('@/views/Resource/Travel.vue')
      }
    ]
  },
  {
    path: '/article',
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
