<template>
  <!-- 购物车背景蒙层 -->
  <div class="mask"
    v-show="showCart"
    @click="toggleShowCart"></div>
  <!-- 底部购物车 -->
  <div class="cart">
    <!-- 购物车产品列表 -->
    <div class="products" v-if="showCart">
      <!-- 顶部全选/清空功能区 -->
      <div class="products__all">
        <div
          class="products__all__toggle"
          @click="toggleCartAllProductChecked(!calculations.allChecked)">
          <i
            class="iconfont icon-checked"
            :class="{'allchecked': calculations.allChecked}"></i>
          {{calculations.allChecked ? '取消全选' : '全选' }}
        </div>
        <div class="products__all__clear">
          <span
            class="products__all__clear__btn"
            @click="clearCartProducts">清空购物车</span>
        </div>
      </div>
      <!-- 产品列表区 -->
      <div
        class="products__item"
        v-for="product in products"
        :key="product._id">
        <div
          class="iconfont icon-checked"
          :class="{'products__item--checked': product.checked}"
          @click="toggleCartProductChecked(product._id)"></div>
        <img class="products__item__img" :src="product.imgUrl" :alt="product.name">
        <div class="products__item__detail">
          <h4 class="products__item__name">{{product.name}}</h4>
          <p class="products__item__price">
            <small>￥</small>{{product.price}}
            <small class="origin">￥{{product.oldPrice}}</small>
          </p>
        </div>
        <div class="products__item__action">
          <span
            class="products__item__number--substract"
            @click="changeProductCountInCart(shopInfo, product, -1)">-</span>
          <span class="products__item__number">
            {{ (products[product._id].count || 0) }}
          </span>
          <span
            class="products__item__number--add"
            @click="changeProductCountInCart(shopInfo, product, +1)">+</span>
        </div>
      </div>
    </div>
    <!-- 计价结算区 -->
    <div class="check">
      <div class="check__icon" @click="toggleShowCart">
        <img class="check__icon__img" src="https://shihongxins.github.io/data-mock/shop/imgs/basket.png" alt="购物车">
        <span class="check__icon__badge" v-if="(!isEmpty)">{{calculations.checkedNumber}}</span>
      </div>
      <div class="check__info">
        <template v-if="isEmpty">
          购物车是空的
        </template>
        <template v-else>
          总计：<span class="check__info__price">￥ {{calculations.checkedPrice}}</span>
        </template>
      </div>
      <div class="check__btn">
        <router-link :to="{ name: 'OrderComfirmation', params: shopId }">
        去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../../effects/commonCartEffect'

// 购物车逻辑
const useCartCountEffect = (shopId) => {
  const store = useStore()
  // 购物车产品列表展示/隐藏
  const showCart = ref(false)
  const toggleShowCart = () => {
    // 购物车中非空的才能切换显示
    showCart.value = (!isEmpty.value) && (!showCart.value)
  }
  // 调用购物车操作逻辑
  const { shopInfo, products, isEmpty, calculations, changeProductCountInCart } = useCommonCartEffect(shopId)

  // 切换购物车中商品的选中状态
  const toggleCartProductChecked = (productId) => {
    store.commit('toggleCartProductChecked', { shopId, productId })
  }
  // 切换购物车中所有商品的选中状态(全选/取消全选)
  const toggleCartAllProductChecked = (reverseAllchecked) => {
    store.commit('toggleCartAllProductChecked', { shopId, reverseAllchecked })
  }
  // 清空购物车
  const clearCartProducts = () => {
    showCart.value = false
    store.commit('clearCartProducts', { shopId })
  }
  return {
    showCart,
    toggleShowCart,
    shopInfo,
    products,
    isEmpty,
    calculations,
    changeProductCountInCart,
    toggleCartProductChecked,
    toggleCartAllProductChecked,
    clearCartProducts
  }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.shopId
    // 返回调用购物车逻辑（包含操作逻辑）
    return {
      shopId,
      ...useCartCountEffect(shopId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixins.scss';
@import '../../../assets/style/variables.scss';

.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, .5);
}
.cart {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 6;
  background: #fff;
}
.products {
  height: 100%;
  overflow: hidden auto;
  &__all {
    box-sizing: border-box;
    border-bottom: .01rem solid $content-bgcolor; // TODO: 1px border
    padding: 0 .16rem;
    height: .52rem;
    line-height: .52rem;
    font-size: .14rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    &__toggle {
      .iconfont {
        margin-right: .16rem;
        font-size: .2rem;
        color: $notice-fontcolor;
        &.allchecked {
          color: $btn-bgcolor;
        }
      }
    }
    &__clear {
      flex: 1;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    border-bottom: 1px solid $content-bgcolor;  // TODO: 1px border
    padding: .12rem .16rem;
    background: #fff;
    display: flex;
    position: relative;
    .iconfont {
      margin-right: .16rem;
      line-height: .46rem;
      font-size: .2rem;
      color: $notice-fontcolor;
      &.products__item--checked {
        color: $btn-bgcolor;
      }
    }
    &__img {
      margin-right: .16rem;
      width: .46rem;
      height: .46rem;
    }
    &__detail {
      flex: 1;
      color: $content-fontcolor;
      overflow: hidden;
    }
    &__name {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0;
      font-size: .14rem;
      line-height: .2rem;
      color: $highlight-fontcolor;
      small {
        font-size: .12rem;
        vertical-align: bottom;
      }
      .origin {
        margin-left: .06rem;
        color: $notice-fontcolor;
        text-decoration: line-through;
      }
    }
    &__action {
      position: absolute;
      right: .18rem;
      bottom: .12rem;
      span {
        display: inline-block;
        box-sizing: border-box;
        width: .2rem;
        height: .2rem;
        line-height: 0.2rem;
        font-size: 0.16rem;
        vertical-align: middle;
        text-align: center;
        &.products__item__number--substract {
          border: 1px solid $medium-fontcolor; // TODO: 1px border
          border-radius: 50%;
          color: $medium-fontcolor;
        }
        &.products__item__number {
          margin: 0 .06rem;
          width: auto;
        }
        &.products__item__number--add {
          border-radius: 50%;
          color: $white-fontcolor;
          background: $btn-bgcolor;
        }
      }
    }
  }
}
.check {
  box-sizing: border-box;
  border-top: .01rem solid $content-bgcolor; // TODO: 1px border
  height: .5rem;
  line-height: .5rem;
  display: flex;
  &__icon {
    position: relative;
    width: .84rem;
    // 添加高度和隐藏，防止溢出换行，产生滚动
    height: 100%;
    overflow: hidden;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__badge {
      position: absolute;
      top: .04rem;
      left: 0.45rem;
      border-radius: .2rem;
      padding: 0 .04rem;
      min-width: 0.2rem;
      height: .2rem;
      line-height: .2rem;
      font-size: .12rem;
      text-align: center;
      color: $white-fontcolor;
      background: $highlight-fontcolor;
      transform: scale(.5);
      // NOTE: 制作角标徽章时，如果用到了小于 12px 的字体，需采用 tansform:scale 进行缩放，缩放时需注意变形中心
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    font-size: .12rem;
    color: $content-fontcolor;
    &__price {
      font-size: .18rem;
      color: $highlight-fontcolor;
    }
  }
  &__btn {
    width: .98rem;
    font-size: .14rem;
    text-align: center;
    color: $white-fontcolor;
    background: $btn-bgcolor;
    a {
      text-decoration: none;
      color: $white-fontcolor;
    }
  }
}
</style>
