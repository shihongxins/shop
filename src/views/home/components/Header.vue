<template>
  <div class="location">
    <i class="iconfont icon-location"></i>
    重庆市渝中区解放碑步行街100号
    <i class="iconfont icon-bell"></i>
  </div>
  <Search
    :placeholder="'双十一优惠商品'"/>
</template>

<script>
import Search from '../../search/Search'

export default {
  name: 'HomeHeader',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/mixins.scss';
@import '../../../assets/style/variables.scss';

.location {
  position: relative;
  padding: 0.16rem 0.24rem;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .iconfont {
    position: absolute;
    top: 0.17rem;
    left: 0;
    font-size: 0.2rem;
    &.icon-bell {
      right: 0;
      left: auto;
    }
  }
}
</style>
