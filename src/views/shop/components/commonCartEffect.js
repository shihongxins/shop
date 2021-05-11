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
  return {
    cartList,
    changeProductCountInCart
  }
}
