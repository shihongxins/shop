<template>
  <div class="wrapper">
    <Header />
    <div class="detail">
      <Products :shop="shopInfo" />
    </div>
    <Comfirmation />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Products from '../../components/Products.vue'
import Comfirmation from './components/Comfirmation.vue'
import { useCommonCartEffect } from '../../effects/commonCartEffect'

export default {
  name: 'OrderComfirmation',
  components: {
    Header,
    Products,
    Comfirmation
  },
  setup () {
    const route = useRoute()
    const shopId = route.params.shopId
    const { shopInfo } = useCommonCartEffect(shopId)
    return {
      shopInfo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $search-bgcolor;
}
.detail {
  position: absolute;
  top: 1.8rem;
  right: 0;
  bottom: .5rem;
  left: 0;
  margin: 0.16rem 0.18rem;
  // NOTE: 与 .top 不同，.detail 的上下左右间距是通过 margin 隔开因为他可能会滚动，而 .top 需要用 padding 隔开因为它有背景
  overflow: hidden auto;
}
</style>
