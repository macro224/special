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
    }, {
      path: 'share',
      component: () => import('@/views/father/share/App'),
      meta: {
        title: '转发有礼'
      }
    }, {
      path: 'success',
      component: () => import('@/views/father/success/App'),
      meta: {
        title: '领取奖品'
      }
    }, {
      path: 'luck',
      component: () => import('@/views/father/luck/App'),
      meta: {
        title: '我要抽奖'
      }
    }, {
      path: 'upload',
      component: () => import('@/views/father/upload/App'),
      meta: {
        title: '选择相框'
      }
    }]
  },
  {
    path: '/',
    redirect: '/father/index'
  }
]
