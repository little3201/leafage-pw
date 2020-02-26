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
        path: '/translation/:businessId',
        name: 'translation',
        component: () => import('@/views/community/Translation.vue')
      },
      {
        path: '/article/:businessId',
        name: 'article',
        component: () => import('@/views/community/Article.vue')
      }
    ]
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('@/views/Document.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('@/views/Resource.vue'),
    children: [
      {
        path: '/details/:businessId',
        name: 'details',
        component: () => import('@/components/Details.vue')
      }
    ]
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
