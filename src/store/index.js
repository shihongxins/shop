import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      /**
       * 三层数据结构，第一层为店铺信息，第二层为购物车中商品列表，第三层内容为商品的信息及数量
       * shopId: {
       *    ...shopInfo,
       *    products: {
       *      productId: {
       *        ...productInfo,
       *        count: Number,
       *        checked: true
       *      }
       *    }
       * }
       */
    }
  },
  mutations: {
    // 添加/减少（移除）商品到购物车
    changeProductCountInCart (state, payload) {
      const { shopInfo, product, num } = payload
      const shopId = shopInfo._id
      const productId = product._id
      if (shopId && productId && (typeof num === 'number')) {
        let stateShopInfo = state.cartList[shopId]
        // 初始化第一次选中商铺信息
        if (!stateShopInfo) {
          // 对第一次加入的商铺信息拷贝一份
          stateShopInfo = JSON.parse(JSON.stringify(shopInfo))
          stateShopInfo.products = {}
        }
        let productInfo = stateShopInfo.products[productId]
        // 初始化第一次选中商品信息
        if (!productInfo) {
          // 对第一次加入的商品信息拷贝一份
          productInfo = JSON.parse(JSON.stringify(product))
          productInfo.count = 0
        }
        // 商品数量变化
        productInfo.count += num
        // 并且默认选中
        productInfo.checked = true
        // 更新购物车 store
        stateShopInfo.products[productId] = productInfo
        state.cartList[shopId] = stateShopInfo
        // 如果某商品数量减为 0 ，移除此商品
        if (productInfo.count <= 0) {
          delete stateShopInfo.products[productId]
        }
        // 如果该店铺没有选中的商品，移除此店铺
        if (Object.keys(stateShopInfo.products).length <= 0) {
          delete state.cartList[shopId]
        }
      }
    },
    // 切换购物车中商品的选中状态
    toggleCartProductChecked (state, payload) {
      const { shopId, productId } = payload
      if (shopId && productId) {
        // 传过来的 shopId,productId 有效，商品必定在购物车，否则点不到触发不了此事件
        const productInfo = state.cartList[shopId].products[productId]
        if (productInfo) {
          productInfo.checked = !productInfo.checked
        }
      }
    },
    // 切换购物车中所有商品的选中状态(全选/全不选)
    toggleCartAllProductChecked (state, payload) {
      const { shopId, reverseAllchecked } = payload
      const products = state.cartList[shopId].products
      if (products) {
        for (const i in products) {
          products[i].checked = reverseAllchecked
        }
      }
    },
    // 清空购物车(从cart中移除此店铺)
    clearCartProducts (state, payload) {
      const { shopId } = payload
      delete state.cartList[shopId]
    }
  },
  actions: {
  },
  modules: {
  }
})
