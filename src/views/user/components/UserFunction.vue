<template>
  <div class="user__functions">
    <router-link :to="{path: '/'}">
      <div class="user__functions__item">
        <i class="iconfont icon-yen"></i>
        <span class="user__functions__item__desc">我的钱包</span>
        <i class="iconfont icon-back"></i>
      </div>
    </router-link>
    <router-link :to="{path: '/address'}">
      <div class="user__functions__item">
        <i class="iconfont icon-location"></i>
        <span class="user__functions__item__desc">我的地址</span>
        <i class="iconfont icon-back"></i>
      </div>
    </router-link>
    <router-link :to="{path: '/'}">
      <div class="user__functions__item">
        <i class="iconfont icon-users"></i>
        <span class="user__functions__item__desc">客服与帮助</span>
        <i class="iconfont icon-back"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserFunction'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.user__functions {
  a {
    color: inherit;
    text-decoration: none;
  }
  &__item {
    display: flex;
    padding: .16rem;
    line-height: .2rem;
    font-size: .14rem;
    .iconfont:first-child {
      margin-right: .16rem;
      border-radius: .08rem;
      width: .22rem;
      height: .22rem;
      line-height: .22rem;
      font-size: .14rem;
      text-align: center;
      color: #fff;
      &.icon-yen {
        background: #ED4A47;
      }
      &.icon-location {
        background: #32C5FF;
      }
      &.icon-users {
        background: #9013FE;
      }
    }
    &__desc {
      flex: 1;
      text-align: left;
      color: $userinfo-main-color;
    }
    .icon-back {
      color: #C2C4CA;
      transform: scale(.8) rotate(180deg);
    }
  }
}
</style>
