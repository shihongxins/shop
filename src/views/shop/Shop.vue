<template>
  <div class="header">
      <div
        class="header__back__btn"
        @click="handleBackClick">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="search__area">
        <Search
          :placeholder="'请输入商品名称搜索'"/>
      </div>
  </div>
  <div class="shopinfo__wrapper">
    <ShopInfo :item="item" v-show="item._id"/>
  </div>
  <ShopContent :shopInfo="item" />
  <Cart />
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import Search from '../search/Search'
import ShopInfo from '../../components/ShopInfo'
import ShopContent from './components/Content'
import Cart from './components/Cart'

// 获取商品信息的逻辑
const getShopDetailsEffect = (id) => {
  const item = ref(0)
  const getShopDetails = async () => {
    const result = await get(`/api/shop/${id}`)
    if (result && result.errno === 0 && result.data) {
      item.value = result.data
    }
  }
  getShopDetails()
  return { item }
}

// 返回上一页逻辑
const useRouterBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: {
    Search,
    ShopInfo,
    ShopContent,
    Cart
  },
  setup () {
    const route = useRoute()
    const shopId = route.params.shopId
    const { item } = getShopDetailsEffect(shopId)
    const { handleBackClick } = useRouterBackEffect()
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.header {
  // 下外边距为 0.04 的原因是 header 下的 shopinfo 组件 本身具有 .12 的上内边距，两者相加与设计稿相同
  margin: .16rem .18rem .04rem;
  display: flex;
  &__back__btn {
    width: .3rem;
    height: .32rem;
    line-height: .32rem;
    text-align: center;
    .iconfont {
      font-size: .2rem;
      color: $btn-back-bgcolor;
    }
  }
  .search__area {
    flex: 1;
  }
}
// vue 深度作用选择器，对公用用组件的 scoped 样式进行微调
.shopinfo__wrapper :deep(.shopinfo) {
  padding: .12rem .18rem 0;
  .shopinfo__content {
    border: none;
  }
}
</style>
