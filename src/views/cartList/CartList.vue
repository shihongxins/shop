<template>
  <div class="cartlist">
    <h2 class="cartlist__title">我的全部购物车 ({{shopsCount}})</h2>
    <div class="cartlist__shops">
      <div class="cartlist__shops--empty" v-if="(shopsCount<=0)">当前购物车为空</div>
      <Products
        v-else
        v-for="shop in cartList"
        :key="shop._id"
        :shop="shop" />
    </div>
  </div>
  <Docker />
</template>

<script>
import { computed } from 'vue'
import Products from '../../components/Products.vue'
import Docker from '../../components/Docker.vue'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

export default {
  name: 'CartList',
  components: {
    Products,
    Docker
  },
  setup () {
    const { cartList } = useCommonCartEffect()
    const shopsCount = computed(() => {
      return Object.keys(cartList).length
    })
    return { cartList, shopsCount }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.cartlist {
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
}
</style>
