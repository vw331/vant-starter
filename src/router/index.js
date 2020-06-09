import Vue from 'vue'
import VueRouter from 'vue-router'
import lazyLoadView from './lazyLoader'
import interceptor from './interceptor'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => lazyLoadView(import('@/views/Home'))
  },
  {
    path: '/login',
    name: 'Login',
    component: () => lazyLoadView(import('@/views/Login'))
  },
  {
    path: '/404',
    name: '404',
    component: () => lazyLoadView(import('@/components/404'))
  },
  {
    path: '**',
    redirect: '404'
  }
]

const router = new VueRouter({
  routes
})

//路由拦截器
router.beforeEach(interceptor)

export default router
