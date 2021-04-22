<template>
  <div class="header">
    <div class="search">
      <div
        class="search__back"
        @click="handleBackClick">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="search__content">
        <i class="iconfont icon-search"></i>
        <input class="search__content__input" type="search" name="search" placeholder="请输入商品名称搜索">
      </div>
    </div>
    <ShopInfo :item="item" v-if="item._id"/>
  </div>
  <ShopContent />
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import ShopContent from './components/Content'

// 获取商品信息的逻辑
const getShopDetailsEffect = (id) => {
  const item = ref(0)
  const getShopDetails = async () => {
    const result = await get(`/api/shop/${id}`)
    console.log(result)
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
    ShopInfo,
    ShopContent
  },
  setup () {
    const route = useRoute()
    const { item } = getShopDetailsEffect(route.params.id)
    const { handleBackClick } = useRouterBackEffect()
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixins.scss';
@import '../../assets/style/variables.scss';

.header {
  padding: 0 .18rem;
  ::v-deep .shopinfo {
    .shopinfo__content {
      border: none;
    }
  }
  .search {
    margin: .14rem 0 .04rem;
    display: flex;
    &__back {
      width: .3rem;
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      .iconfont {
        font-size: .2rem;
        color: #b6b6b6;
      }
    }
    &__content {
      flex: 1;
      position: relative;
      .iconfont {
        position: absolute;
        top: .08rem;
        left: .16rem;
        color: $search-fontcolor;
      }
      &__input {
        @include search__input;
        padding: 0 .2rem 0 .44rem;
        color: $content-fontcolor;
        &::placeholder {
          color: $content-fontcolor;
        }
      }
    }
  }
}
</style>
