import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    alias: '/home'
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (isAuthenticated) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "login" */ '../views/shop/Shop.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('isAuthenticated')
      next({ name: 'Login' })
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const { name } = to
  const isToLoginOrRegister = (name === 'Login' || name === 'Register')
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (isAuthenticated || isToLoginOrRegister) {
    next()
  } else {
    localStorage.removeItem('isAuthenticated')
    next({ name: 'Login' })
  }
})

export default router
