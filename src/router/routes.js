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
    component: () => import('@/views/Community.vue')
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('@/views/Document.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('@/views/Resource.vue')
  },
  {
    path: '/information/:businessId',
    name: 'information',
    component: () => import('@/components/Information.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import('@/views/Introduce.vue')
  },
  {
    path: '/exception',
    name: 'exception',
    component: () => import('@/components/Exception.vue')
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
