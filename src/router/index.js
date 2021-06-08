import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from '@/config/routes.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  /* base: process.env.BASE_URL, */
  routes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
