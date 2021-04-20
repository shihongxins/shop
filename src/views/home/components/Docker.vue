<template>
  <div class="docker">
    <div
      class="docker__item"
      v-for="item in list"
      :key="item.title"
      :class="{'docker__item--active': item.active}">
      <div
        class="iconfont"
        :class="item.iconClass"></div>
      <div class="docker__title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const list = [
      {
        title: '主页',
        iconClass: 'icon-home',
        active: true
      },
      {
        title: '购物车',
        iconClass: 'icon-bag',
        active: false
      },
      {
        title: '订单',
        iconClass: 'icon-order',
        active: false
      },
      {
        title: '我的',
        iconClass: 'icon-my',
        active: false
      }
    ]

    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.docker {
  position: absolute;
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
