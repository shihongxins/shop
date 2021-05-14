<template>
  <div class="icons">
    <div class="icons__item" v-for="icon in icons" :key="icon.desc">
      <img class="icons__item__img" :src="icon.url" :alt="icon.desc" />
      <p class="icons__item__desc">{{ icon.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  setup () {
    const icons = [
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/便利超市.png',
        desc: '便利超市'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/菜市场.png',
        desc: '菜市场'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/水果店.png',
        desc: '水果店'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/鲜花绿植.png',
        desc: '鲜花绿植'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/医药健康.png',
        desc: '医药健康'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/家居时尚.png',
        desc: '家居时尚'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/烘焙蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/签到.png',
        desc: '签到'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/大牌免运.png',
        desc: '大牌免运'
      },
      {
        url: 'https://shihongxins.github.io/data-mock/shop/imgs/icons/红包套餐.png',
        desc: '红包套餐'
      }
    ]
    return {
      icons
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/variables.scss";

.icons {
  margin-top: 0.16rem;
  display: flex;
  flex-flow: row wrap;
  &__item {
    width: 20%;
    &__img {
      display: block;
      margin: 0 auto;
      width: 0.4rem;
      height: 0.4rem;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
</style>
