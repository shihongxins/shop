<template>
  <div class="shop">
    <h3 class="shop__name">
      <router-link :to="{path: `/shop/${shop._id}`}">
        {{ shop.name }}
      </router-link>
    </h3>
    <div class="products">
      <div
        class="products__item"
        v-for="product in showProductList"
        :key="product._id"
      >
        <img
          class="products__item__img"
          :src="product.imgUrl"
          :alt="product.name"
        />
        <div class="products__item__detail">
          <h4 class="products__item__name">{{ product.name }}</h4>
          <p class="products__item__price">
            <span class="products__item__price--single">
              <small>￥</small>{{ product.price }} x {{ product.count }}
            </span>
            <span class="products__item__price--total">
              <small>￥</small>{{ (product.price * product.count).toFixed(2) }}
            </span>
          </p>
        </div>
      </div>
      <div
        class="products__showmore"
        v-if="(Object.keys(checkdeProductList).length > 2)"
        @click="toggleShowAllProducts">
        共计{{ calculations.checkedNumber }}件/{{ calculations.checkedNumber * 0.25 }}kg
        <i
          class="iconfont icon-back"
          :class="{'spread': showAllProducts}"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useCommonCartEffect } from '../effects/commonCartEffect'

// 默认展示该店铺下选中的两件商品，可通过按钮切换展示全部选中商品
const useShowProductListEffect = (shop) => {
  const showAllProducts = ref(false)
  const toggleShowAllProducts = () => {
    showAllProducts.value = !showAllProducts.value
  }
  // 所有选中的产品项
  const checkdeProductList = computed(() => {
    const list = []
    for (const i in shop.products) {
      if (shop.products[i].checked) {
        list.push(shop.products[i])
      }
    }
    return list
  })
  // 展示的产品项 默认最多展示 2 个
  const showProductList = computed(() => {
    const list = []
    let count = 0
    for (const i in shop.products) {
      if (shop.products[i].checked) {
        list.push(shop.products[i])
        count++
        if ((!showAllProducts.value) && count >= 2) {
          break
        }
      }
    }
    return list
  })
  return {
    checkdeProductList,
    showAllProducts,
    toggleShowAllProducts,
    showProductList
  }
}

export default {
  name: 'Products',
  props: {
    shop: {
      required: true
    }
  },
  setup (props) {
    const { calculations } = useCommonCartEffect(props.shop._id)
    return {
      calculations,
      ...useShowProductListEffect(props.shop)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
@import '../assets/style/mixins.scss';

.shop {
  border-radius: .04rem;
  padding: .16rem;
  background: $white-fontcolor;
  &__name {
    margin: 0;
    line-height: .22rem;
    font-size: .16rem;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
  }
}
.products {
  &__item {
    margin-top: .16rem;
    background: $white-fontcolor;
    display: flex;
    position: relative;
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
      display: flex;
      justify-content: space-between;
      small {
        font-size: .12rem;
        vertical-align: bottom;
      }
      &--total {
        color: $content-fontcolor;
      }
    }
  }
  &__showmore {
    margin-top: .16rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .14rem;
    text-align: center;
    color: $light-fontcolor;
    background: $search-bgcolor;
    .iconfont {
      display: inline-block;
      transform: rotate(-90deg);
      &.spread {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
