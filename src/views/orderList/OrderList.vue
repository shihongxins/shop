<template>
  <div class="orderlist">
    <h2 class="orderlist__title">我的订单</h2>
    <div class="orderlist__shops">
      <div
        class="orderlist__shops--empty"
        v-if="orderList.length === 0">当前没有订单</div>
      <template v-else>
        <div
          class="order"
          v-for="(order, index) in orderList"
          :key="index">
          <div class="order__shop">
            <h3 class="order__shop__name">{{order.shopName}}</h3>
            <span class="order__shop__state">{{order.isCanceled?'已取消':'已付款'}}</span>
          </div>
          <div class="order__products">
            <div class="order__products__imgs">
              <template
                v-for="(productItem,pi) in order.products"
                :key="pi">
                <img
                  v-if="pi < 4"
                  :src="productItem.product.img"
                  :alt="productItem.product.name"
                  class="order__products__img">
              </template>
            </div>
            <div class="order__products__calculations">
              <p class="order__products__price">￥{{order.totalPrice}}</p>
              <p class="order__products__count">共 {{order.totalCount}} 件</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <Docker />
  <Toast />
</template>

<script>
import { reactive, toRefs } from 'vue'
import Toast, { showToast } from '../../components/Toast.vue'
import Docker from '../../components/Docker.vue'
import { get } from '../../utils/request'

const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getOrderList = async () => {
    try {
      const result = await get('/api/order')
      if (result && result.errno === 0) {
        const orders = result.data
        orders.forEach((order) => {
          const products = order?.products || []
          let totalCount = 0
          let totalPrice = 0
          products.forEach((item) => {
            totalCount += (item?.orderSales || 0)
            totalPrice += ((item?.orderSales * item?.product?.price) || 0)
          })
          order.totalCount = totalCount
          order.totalPrice = totalPrice.toFixed(2)
        })
        data.list = orders
      } else {
        showToast(`加载订单失败，${result.message}`)
      }
    } catch (e) {
      showToast(`加载订单出错，${e.message}`)
    }
  }
  getOrderList()
  const { list } = toRefs(data)
  return { orderList: list }
}

export default {
  name: 'OrderList',
  components: {
    Docker,
    Toast
  },
  setup () {
    const { orderList } = useOrderListEffect()
    console.log(orderList)
    return {
      orderList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.orderlist {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem; // 留出底部的 Docker
  left: 0;
  &__title {
    margin: 0;
    height: .44rem;
    line-height: .44rem;
    font-size: .16rem;
    font-weight: normal;
    text-align: center;
    color: $content-fontcolor;
  }
  &__shops {
    position: absolute;
    top: .44rem;
    right: 0;
    bottom: 0;
    left: 0;
    padding: .16rem .18rem;
    overflow: hidden auto;
    background: $search-bgcolor;
    &--empty {
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: center;
    }
  }
  .order {
    border-radius: .04rem;
    padding: .16rem;
    background: #fff;
    &__shop {
      display: flex;
      justify-content: space-between;
      &__name {
        margin: 0;
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }
      &__state {
        line-height: .2rem;
        font-size: .14rem;
        color: $light-fontcolor;
      }
    }
    &__products {
      margin-top: .16rem;
      display: flex;
      &__imgs {
        width: 2.08rem;
        white-space: nowrap;
        overflow: hidden;
        img {
          width: .4rem;
          height: .4rem;
          margin-right: .12rem;
        }
      }
      &__calculations {
        flex: 1;
        text-align: right;
      }
      &__price {
        margin: 0;
        line-height: .2rem;
        font-size: .14rem;
        color: $highlight-fontcolor;
      }
      &__count {
        margin: 0.04rem 0 0;
        line-height: .14rem;
        font-size: .12rem;
        color: $content-fontcolor;
      }
    }
  }
}
</style>
