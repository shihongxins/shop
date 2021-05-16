<template>
  <div class="top">
    <div class="top__header">
      <div class="top__header__back" @click="handleBackClick">
        <i class="iconfont icon-back"></i>
      </div>
      <span>确认订单</span>
    </div>
    <div class="top__receiver">
      <h3 class="top__receiver__title">收货地址</h3>
      <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
      <div class="top__receiver__user">
        <span class="top__receiver__user__name">瑶妹（先生）</span>
        <span class="top__receiver__user__tel">18911024266</span>
      </div>
      <div class="top__receiver__detail">
        <i class="iconfont icon-back"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  setup () {
    const router = useRouter()
    const handleBackClick = () => { router.back() }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';
@import '../../../assets/style/mixins.scss';

.top {
  position: relative;
  box-sizing: border-box;
  padding: .2rem .18rem 0; // NOTE: 设计稿上是 40px 它包含了系统状态栏部分，实际上真机浏览器本身也不会占用状态栏，得减去
  // height: 1.59rem;
  height: 1.96rem; // NOTE: 本身高度加上地址超出的高度（不这样计算的话，中部的商品详情定位不好做）
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-size: 100% 1.59rem; // 因为本身高度只有 1.59 所有背景颜色区需要手动指定
  background-repeat: no-repeat;
  &__header {
    position: relative;
    line-height: .24rem;
    font-size: .16rem;
    text-align: center;
    color: $white-fontcolor;
    &__back {
      position: absolute;
      left: 0;
      .iconfont {
        font-size: .22rem;
      }
    }
  }
  &__receiver {
    position: absolute;
    right: .18rem;
    bottom: 0;
    left: .18rem;
    border-radius: .04rem;
    padding: .16rem;
    background: #fff;
    color: $content-fontcolor;
    &__title {
      margin: 0;
      line-height: .22rem;
      font-size: .16rem;
    }
    &__address {
      padding: .14rem .2rem .06rem 0;
      line-height: .2rem;
      font-size: .14rem;
      @include ellipsis;
    }
    &__user {
      line-height: .18rem;
      font-size: .12rem;
      color: $medium-fontcolor;
      span {
        margin-right: .06rem;
      }
    }
    &__detail {
      position: absolute;
      top: 50%;
      right: .16rem;
      transform: translateY(-50%) rotate(180deg);
      color: $medium-fontcolor;
    }
  }
}
</style>
