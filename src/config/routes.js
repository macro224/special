export const routes = [
  {
    path: '/father',
    component: () => import('@/layout'),
    children: [{
      path: 'index',
      component: () => import('@/views/father/index/App'),
      meta: {
        title: '首页'
      }
    }]
  },
  {
    path: '/',
    redirect: '/father/index'
  }
]
