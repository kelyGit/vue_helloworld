import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexHome from '@/views/home/index'
import HeadTop from '@/views/common/headTop'
import ImposrtINdexH5 from '@/views/home/ImposrtINdexH5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: '首页',
      components: {
        bodyHome: IndexHome, topHome: HeadTop
      }
    },
    {
      path: 'index',
      name: 'h5',
      component: ImposrtINdexH5
    }
  ]
})
