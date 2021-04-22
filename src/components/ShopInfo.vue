<template>
  <div class="shopinfo">
    <img class="shopinfo__img" :src="item.imgUrl" :alt="item.name" />
    <div class="shopinfo__content">
      <div class="shopinfo__content__title">{{ item.name }}</div>
      <div class="shopinfo__content__tags">
        <span class="shopinfo__content__tag">月售: {{ item.sales }}+</span>
        <span class="shopinfo__content__tag">起送: ￥{{ item.expressLimit }}</span>
        <span class="shopinfo__content__tag">运费: ￥{{ item.expressPrice }}</span>
      </div>
      <p class="shopinfo__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';

.shopinfo {
  padding-top: 0.12rem;
  display: flex;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    border-bottom: 1px solid $content-bgcolor; // TODO: 1px border
    padding-bottom: 0.12rem;
    color: $content-fontcolor;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
    }
    &__tag {
      margin-right: 0.16rem;
      white-space: nowrap;
    }
    &__highlight {
      margin: 0.08rem 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $highlight-fontcolor;
    }
  }
}
</style>
