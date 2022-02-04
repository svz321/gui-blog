import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import article from '../components/common/article-demo.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/article',
      component: article
    },
  ]
})
/*
router.beforeEach((to, from, next) => {
  if(to.path == '/login') return next()

  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
*/
export default router
