<template>
  <div class="location">
    <i class="iconfont icon-location"></i>
    重庆市渝中区解放碑步行街100号
    <i class="iconfont icon-bell"></i>
  </div>
  <div class="search">
    <i class="iconfont icon-search"></i>
    <input type="search" class="search__input" placeholder="双十一优惠商品" />
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
.search {
  position: relative;
  &__input {
    display: block;
    outline: none;
    border: none;
    border-radius: 0.16rem;
    padding: 0 0 0 0.32rem;
    width: 100%;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.14rem;
    color: #b7b7b7;
    background: #f5f5f5;
  }
  .iconfont {
    position: absolute;
    top: 0.06rem;
    left: 0.14rem;
    font-size: 0.16rem;
    color: #b7b7b7;
  }
}
</style>
