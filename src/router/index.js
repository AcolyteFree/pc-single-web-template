import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main.vue'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }

  ]
})
export default router

