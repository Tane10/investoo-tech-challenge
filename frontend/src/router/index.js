import Vue from 'vue'
import VueRouter from 'vue-router'

import updatePageTitle from './guards/page-title'

import toolsRoutes from './routes/tools'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '*',
    redirect: { name: 'tools.table-preview' },
  },
  {
    path: '/',
    redirect: { name: 'tools.table-preview' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [...baseRoutes, ...toolsRoutes],
})

router.beforeEach(updatePageTitle)

export default router
