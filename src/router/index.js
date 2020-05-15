import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/Bar',
      name: 'Bar',
      component: () => import('@/components/Bar.vue')
    },
    {
      path: '/Baz',
      name: 'Baz',
      component: () => import('@/components/Baz.vue')
    },
  ]
})
