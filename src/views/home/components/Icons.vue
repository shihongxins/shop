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
        url: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '便利超市'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/红包.png',
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
