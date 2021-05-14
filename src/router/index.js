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
    path: '/shop/:shopId',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/orderComfirmation/:shopId',
    name: 'OrderComfirmation',
    component: () => import(/* webpackChunkName: "orderComfirmation" */ '../views/orderComfirmation/OrderComfirmation.vue')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList.vue')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList.vue')
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
