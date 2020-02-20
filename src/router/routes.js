import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/Community.vue'),
    children: [
      {
        path: '/translation',
        name: 'translation',
        component: () => import('@/views/community/Translation.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/community/Article.vue')
      }
    ]
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('@/views/Resource.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('@/views/Introduce.vue')
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
