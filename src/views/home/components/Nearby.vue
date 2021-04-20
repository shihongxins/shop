<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      class="nearby__item"
      v-for="item in list"
      :key="item.title">
      <img
        class="nearby__item__img"
        :src="item.imgUrl"
        :alt="item.title"
      />
      <div class="nearby__item__wrapper">
        <div class="item__title">{{item.title}}</div>
        <div class="item__tags">
          <span
            class="item__tag"
            v-for="(tag,index) in item.tags"
            :key="index">{{tag}}</span>
        </div>
        <p class="item__hotdesc">{{item.hotdesc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNearby',
  setup () {
    const list = [
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送￥5', '基础运费￥5'],
        hotdesc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送￥5', '基础运费￥5'],
        hotdesc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送￥5', '基础运费￥5'],
        hotdesc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送￥5', '基础运费￥5'],
        hotdesc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送￥5', '基础运费￥5'],
        hotdesc: 'VIP尊享满89元减4元运费券（每月3张）'
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

.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    padding-top: 0.12rem;
    display: flex;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
    &__wrapper {
      flex: 1;
      border-bottom: 1px solid $content-bgcolor; // TODO: 1px border
      padding-bottom: 0.12rem;
      .item__title {
        line-height: 0.22rem;
        font-size: 0.16rem;
        color: $content-fontcolor;
      }
      .item__tags {
        margin-top: 0.08rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: $content-fontcolor;
        .item__tag {
          margin-right: 0.16rem;
          white-space: nowrap;
        }
      }
      .item__hotdesc {
        margin: 0.08rem 0 0;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: #e93b3b;
      }
    }
  }
}
</style>
