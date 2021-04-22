<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in shopList"
      :key="item._id"
      :to="{ name: 'Shop', params: { id: item._id } }">
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../../utils/request.js'
import ShopInfo from '../../../components/ShopInfo'

// 获取附近商店列表
const getShopListEffect = () => {
  const shopList = ref(0)
  const getShopList = async () => {
    const result = await get('/api/user/hot_shop')
    console.log(result)
    if (result && result.errno === 0 && result.data.length) {
      shopList.value = result.data
    }
  }
  getShopList()
  return { shopList }
}

export default {
  name: 'HomeNearby',
  components: {
    ShopInfo
  },
  setup () {
    const { shopList } = getShopListEffect()
    return { shopList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
