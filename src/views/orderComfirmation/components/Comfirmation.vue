<template>
  <div class="comfirm">
    <div class="comfirm__price">
      实付金额
      <span class="comfirm__price--final">￥{{ calculations.checkedPrice }}</span>
    </div>
    <div
      class="comfirm__btn"
      @click="changePopupShowType('comfirm')">提交订单</div>
  </div>
  <Popup @popupButtonClick = "handlePopupButtonClick"/>
  <Toast />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import Popup, { changePopupShowType } from './Popup.vue'
import Toast, { showToast } from '../../../components/Toast.vue'
import { useCommonCartEffect } from '../../../effects/commonCartEffect'
import { post } from '../../../utils/request'

// 创建订单请求逻辑
const useCreateOrderEffect = (shopId) => {
  const router = useRouter()
  const store = useStore()
  const address = { _id: 1 }
  const { shopInfo, products } = useCommonCartEffect(shopId)
  const checkedProducts = computed(() => {
    const list = []
    for (const i in products.value) {
      const product = products.value[i]
      if (product && product.checked) {
        list.push({
          id: product._id,
          num: product.count
        })
      }
    }
    return list
  })
  const data = {
    addressId: address._id,
    shopId: shopInfo.value._id,
    shopName: shopInfo.value.name,
    isCanceled: false,
    products: checkedProducts.value
  }
  const createOrder = async (isCanceled) => {
    // 根据 Popup 按钮反馈，设置值
    data.isCanceled = isCanceled
    changePopupShowType('none')
    try {
      const result = await post('/api/order', data, { headers: { 'content-type': 'application/json' } })
      if (result && result.errno === 0) {
        // 创建订单成功清空该店铺的购物车
        store.commit('clearCartProducts', { shopId: data.shopId })
        changePopupShowType('success')
        setTimeout(() => {
          changePopupShowType('none')
          // 两秒钟后跳转到首页
          router.push({ name: 'OrderList' })
        }, 2000)
      } else {
        showToast(`创建订单失败，${result.message}`)
      }
    } catch (e) {
      showToast(`创建订单出错，${e.message}`)
    }
  }
  return { createOrder }
}

export default {
  name: 'Comfirmation',
  components: {
    Popup,
    Toast
  },
  setup () {
    const route = useRoute()
    const shopId = route.params.shopId
    const { calculations } = useCommonCartEffect(shopId)
    const { createOrder } = useCreateOrderEffect(shopId)
    const handlePopupButtonClick = (btnType) => {
      if (btnType === 'cancel') {
        createOrder(true)
      }
      if (btnType === 'comfirmed') {
        createOrder(false)
      }
    }
    return {
      calculations,
      changePopupShowType,
      handlePopupButtonClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.comfirm {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: .49rem;
  line-height: .49rem;
  font-size: .14rem;
  background: #fff;
  display: flex;
  &__price {
    flex: 1;
    padding-left: .24rem;
    color: #151515;
    &--final {
      font-size: .16rem;
      font-weight: bold;
    }
  }
  &__btn {
    width: .98rem;
    text-align: center;
    color: $white-fontcolor;
    background: $btn-comfirm-bgcolor;
  }
}
</style>
