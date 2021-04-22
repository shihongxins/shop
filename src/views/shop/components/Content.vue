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
          <span class="products__item__number--substract">-</span>
          <span class="products__item__number">0</span>
          <span class="products__item__number--add">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../../utils/request'

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
const useGetProductsEffect = (currentTab) => {
  const route = useRoute()
  const shopId = route.params.id
  const products = ref(0)
  const getProducts = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { params: { tab: currentTab.value } })
    console.log(result)
    if (result && result.errno === 0 && result.data) {
      products.value = result.data
    }
  }
  watchEffect(() => {
    getProducts()
  })
  return { products, getProducts }
}

export default {
  name: 'ShopContent',
  setup () {
    const { currentTab, categories, handleTabClick } = useCatrgoriesEffect()
    const { products } = useGetProductsEffect(currentTab)
    return {
      currentTab,
      categories,
      products,
      handleTabClick
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
