<template>
  <div class="search__result">
    <div class="search__area">
      <div
        class="search__back__btn"
        @click="handleStatusChange('none')">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="search__input__wrapper">
        <SearchInput
          @onStatusChange="handleStatusChange" />
      </div>
    </div>
    <div class="search__result__container">
      <div
        class="search__result__item"
        v-for="shop in shops"
        :key="shop._id"
        @click="$router.push(`/shop/${shop._id}`)">
        <ShopInfo :item="shop" />
        <div class="shopinfo__products">
          <!-- 只展示前三个故使用 template -->
          <template
            v-for="(product, index) in shop.products"
            :key="index">
            <div
              class="products__item"
              v-if="index<3">
              <img
                class="products__item__img"
                :src="product.imgUrl"
                :alt="product.name">
              <h4 class="products__item__name">{{product.name}}</h4>
              <p class="products__item__price">
                <small>￥</small>{{product.price}}
                <small class="origin">￥{{product.oldPrice}}</small>
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import SearchInput from './SearchInput'
import ShopInfo from '../../../components/ShopInfo'
import Toast, { showToast } from '../../../components/Toast'
import { get } from '../../../utils/request'
import { inject, reactive, ref, toRefs } from 'vue'

const useSearchResultEffect = (keywords) => {
  const data = reactive({ shops: [] })
  const getSearchResultByKeywords = async () => {
    try {
      const result = await get('/api/shop/search', { keywords })
      if (result && result.errno === 0) {
        data.shops = result.data
      } else {
        showToast(`搜索店铺关键字失败！${result.message}`)
      }
    } catch (e) {
      showToast(`搜索店铺关键字出错！${e.message}`)
    }
  }
  getSearchResultByKeywords()
  const { shops } = toRefs(data)
  return { shops }
}

export default {
  name: 'SearchResult',
  props: {
    searchText: {
      default: () => {
        return inject('searchText', ref(''))
      }
    },
    handleStatusChange: {
      default: () => {
        return inject('handleStatusChange')
      }
    }
  },
  components: {
    SearchInput,
    ShopInfo,
    Toast
  },
  setup (props) {
    const { shops } = useSearchResultEffect(props.searchText.value)
    return { shops }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';
@import '../../../assets/style/mixins.scss';

.search__result {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: .16rem .18rem;
  background: #fff;
  .search__area {
    display: flex;
    .search__input__wrapper {
      flex: 1;
    }
    .search__back__btn {
      width: .3rem;
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      .iconfont {
        font-size: .2rem;
        color: $btn-back-bgcolor;
      }
    }
  }
  &__container {
    padding: .12rem 0;
    // 深度作用选择器，修改公共组件 ShopInfo 的样式
    .search__result__item :deep(.shopinfo__content) {
      border: none;
      padding: 0;
    }
    .shopinfo__products {
      padding: 0.08rem 0 0.12rem 0;
      margin-left: .72rem;
      border-bottom: .01rem solid $content-bgcolor; // TODO: 1px border
      overflow: hidden;
      display: flex;
      flex-flow: row nowrap;
      .products__item {
        padding-right: .16rem;
        width: .76rem;
        &__img {
          width: .76rem;
          height: .76rem;
        }
        &__name {
          margin: 0;
          line-height: .16rem;
          font-size: .12rem;
          color: $content-fontcolor;
          @include ellipsis;
        }
        &__price {
          margin: 0;
          line-height: .14rem;
          font-size: .14rem;
          color: $highlight-fontcolor;
          display: flex;
          justify-content: space-between;
          .origin {
            font-size: .2rem;
            color: $light-fontcolor;
            text-decoration: line-through;
            transform: scale(.5);
            transform-origin: left center;
          }
        }
      }
    }
  }
}
</style>
