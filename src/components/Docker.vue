<template>
  <div class="docker">
    <div
      class="docker__item"
      v-for="item in list"
      :key="item.title"
      :class="{'docker__item--active': routeName == item.to.name}">
      <router-link :to="item.to">
        <div
          class="iconfont"
          :class="item.iconClass"></div>
        <div class="docker__title">{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'Docker',
  setup () {
    const route = useRoute()
    const routeName = route.name
    const list = [
      {
        title: '主页',
        iconClass: 'icon-home',
        to: { name: 'Home' }
      },
      {
        title: '购物车',
        iconClass: 'icon-bag',
        to: { name: 'CartList' }
      },
      {
        title: '订单',
        iconClass: 'icon-order',
        to: { name: 'OrderList' }
      },
      {
        title: '我的',
        iconClass: 'icon-my',
        to: { name: 'User' }
      }
    ]

    return {
      routeName,
      list
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.docker {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 0.18rem;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid $content-bgcolor; // TODO: 1px border
  display: flex;
  flex-flow: row nowrap;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: inherit;
      text-decoration: none;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
