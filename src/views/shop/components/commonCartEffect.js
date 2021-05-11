import { computed } from 'vue'
import { useStore } from 'vuex'
// 购物车操作逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  // 购物车数据
  const cartList = store.state.cartList
  // 更改产品数量方法
  const changeProductCountInCart = (shopInfo, product, num) => {
    store.commit('changeProductCountInCart', { shopInfo, product, num })
  }
  // 购物车是否为空
  const isEmpty = computed(() => {
    let result = true
    const products = ((cartList[shopId]?.products) || {})
    for (const i in products) {
      if (products[i]) {
        result = false
      }
    }
    return result
  })
  return {
    cartList,
    isEmpty,
    changeProductCountInCart
  }
}
