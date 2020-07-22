export default [
  {
    path: '/',
    component: () => import('@/layouts/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'blog',
        component: () => import('@/views/blog/Index.vue'),
        children: [
          {
            path: '',
            name: 'Blog',
            component: () => import('@/views/blog/Item.vue'),
            meta: { src: require('@/assets/blog.jpg') },
            props: true
          },
          {
            path: 'detail/:businessId',
            name: 'Detail',
            component: () => import('@/views/blog/Detail.vue'),
            props: true
          }
        ]
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('@/views/Portfolio.vue'),
        meta: { src: require('@/assets/portfolio.jpg') }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: { src: require('@/assets/about.jpg') }
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
        meta: { src: require('@/assets/contact.jpg') }
      },
      {
        path: '*',
        name: 'FourOhFour',
        component: () => import('@/views/Exception.vue')
      }
    ]
  }
]
