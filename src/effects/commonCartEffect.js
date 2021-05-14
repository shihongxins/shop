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
  // 店铺信息
  const shopInfo = computed(() => {
    return (cartList[shopId] || {})
  })
  // 购物车中商品列表(多个页面组件需要使用 shop/components/Cart, cartList/CartList, orderComfirmation/OrderComfirmation)
  const products = computed(() => {
    return ((cartList[shopId]?.products) || {})
  })
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
  // 计算总数、总价等
  const calculations = computed(() => {
    const result = { isEmpty: true, checkedNumber: 0, checkedPrice: 0, allChecked: true }
    const products = ((cartList[shopId]?.products) || {})
    for (const i in products) {
      if (products[i]) {
        // 购物车是否为空
        result.isEmpty = false
        if (products[i].checked) {
          // 已选数量
          result.checkedNumber += products[i].count
          // 已选总价
          result.checkedPrice += products[i].count * products[i].price
        } else {
          // 是否所有都被选中
          result.allChecked = false
        }
      }
    }
    result.checkedPrice = result.checkedPrice.toFixed(2)
    return result
  })
  return {
    cartList,
    shopInfo,
    products,
    isEmpty,
    calculations,
    changeProductCountInCart
  }
}
