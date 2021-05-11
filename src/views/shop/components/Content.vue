<template>
  <div class="content">
    <div class="categories">
      <div
        class="categories__item"
        v-for="item in categories"
        :key="item.tab"
        @click="handleTabClick(item.tab)"
        :class="{'categories__item--active': (item.tab == currentTab)}"
      >{{item.name}}</div>
    </div>
    <div class="products">
      <div
        class="products__item"
        v-for="product in products"
        :key="product._id">
        <img class="products__item__img" :src="product.imgUrl" :alt="product.name">
        <div class="products__item__detail">
          <h4 class="products__item__name">{{product.name}}</h4>
          <p class="products__item__sales">月售 {{product.sales}} 件</p>
          <p class="products__item__price">
            <small>￥</small>{{product.price}}
            <small class="origin">￥{{product.oldPrice}}</small>
          </p>
        </div>
        <div class="products__item__action">
          <template v-if="getProductCountInCart(product._id) > 0">
          <span
            class="products__item__number--substract"
            @click="changeProductCountInCart(shopInfo, product, -1)">-</span>
          <span class="products__item__number">
            <!-- Q: 不在模板中使用过长的逻辑，哪有没有比可选链操作符 `?.` 更好的处理方式？ -->
            <!-- {{ cartList?.[shopInfo._id]?.products?.[product._id]?.count || 0 }} -->
            <!-- A: 定义一个方法 -->
            {{ getProductCountInCart(product._id) }}
          </span>
          </template>
          <span
            class="products__item__number--add"
            @click="changeProductCountInCart(shopInfo, product, +1)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

// 商品种类 Tab 切换逻辑
const useCatrgoriesEffect = () => {
  const currentTab = ref('all')
  const categories = reactive([
    { name: '全部商品', tab: 'all' },
    { name: '限时秒杀', tab: 'seckill' },
    { name: '新鲜水果', tab: 'fruit' },
    { name: '休闲零食', tab: 'snack' },
    { name: '其他', tab: 'others' }
  ])
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, categories, handleTabClick }
}

// 获取商品逻辑
const useGetProductsEffect = (shopId, currentTab) => {
  const products = ref(0)
  const getProducts = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { params: { tab: currentTab.value } })
    if (result && result.errno === 0 && result.data) {
      products.value = result.data
    }
  }
  watchEffect(() => {
    getProducts()
  })
  return { products }
}

// 购物车相关逻辑
const useCartEffect = (shopId) => {
  // 调用购物车操作逻辑
  const { cartList, isEmpty, changeProductCountInCart } = useCommonCartEffect(shopId)
  const getProductCountInCart = (productId) => {
    return (cartList?.[shopId]?.products?.[productId]?.count || 0)
  }
  return { changeProductCountInCart, isEmpty, getProductCountInCart }
}

export default {
  name: 'ShopContent',
  props: {
    shopInfo: {
      required: true
    }
  },
  setup () {
    // 获取当前商铺的 id 信息供子组件/其他逻辑使用
    const route = useRoute()
    const shopId = route.params.id
    // 调用类别及类别切换逻辑
    const { currentTab, categories, handleTabClick } = useCatrgoriesEffect()
    // 调用加载商铺的商品列表逻辑
    const { products } = useGetProductsEffect(shopId, currentTab)
    // 调用购物车相关逻辑
    const { changeProductCountInCart, isEmpty, getProductCountInCart } = useCartEffect(shopId)
    return {
      currentTab,
      categories,
      handleTabClick,
      products,
      changeProductCountInCart,
      isEmpty,
      getProductCountInCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixins.scss';
@import '../../../assets/style/variables.scss';

.content {
  position: absolute;
  top: 1.5rem;
  right: 0;
  bottom: .5rem;
  left: 0;
  display: flex;
}
.categories {
  width: .76rem;
  height: 100%;
  font-size: .14rem;
  overflow: hidden auto;
  text-align: center;
  color: $content-fontcolor;
  background: $search-bgcolor;
  &__item {
    line-height: .4rem;
    &--active {
      background: $white-fontcolor;
    }
  }
}
.products {
  flex: 1;
  height: 100%;
  overflow: hidden auto;
  &__item {
    border-bottom: 1px solid $content-bgcolor;
    padding: .12rem .16rem;
    display: flex;
    position: relative;
    &__img {
      margin-right: .16rem;
      width: .68rem;
      height: .68rem;
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
    &__sales {
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
    }
    &__price {
      margin: 0;
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
          border: 1px solid $medium-fontcolor;
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
</style>
