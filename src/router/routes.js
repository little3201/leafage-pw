import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue'),
    children: [
      {
        path: '/technology',
        name: 'technology',
        component: () => import('@/views/blog/Technology.vue')
      },
      {
        path: '/translation',
        name: 'translation',
        component: () => import('@/views/blog/Translation.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/blog/Article.vue')
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
