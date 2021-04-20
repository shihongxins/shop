<template>
  <div class="wrapper">
    <div class="location">
      <i class="iconfont icon-location"></i>
      重庆市渝中区解放碑步行街100号
      <i class="iconfont icon-bell"></i>
    </div>
    <div class="search">
      <i class="iconfont icon-search"></i>
      <input type="search" class="search__input" placeholder="双十一优惠商品">
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="banner__img">
    </div>
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="">
        <p class="icons__item__desc">便利超市</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="">
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="">
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="">
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="">
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="">
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="">
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="">
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="">
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="">
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="沃尔玛">
        <div class="nearby__item__wrapper">
          <div class="item__title">沃尔玛</div>
          <div class="item__tags">
            <span class="item__tag">月售1万+</span>
            <span class="item__tag">起送￥5</span>
            <span class="item__tag">基础运费￥5</span>
          </div>
          <p class="item__hot">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="沃尔玛">
        <div class="nearby__item__wrapper">
          <div class="item__title">沃尔玛</div>
          <div class="item__tags">
            <span class="item__tag">月售1万+</span>
            <span class="item__tag">起送￥5</span>
            <span class="item__tag">基础运费￥5</span>
          </div>
          <p class="item__hot">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="沃尔玛">
        <div class="nearby__item__wrapper">
          <div class="item__title">沃尔玛</div>
          <div class="item__tags">
            <span class="item__tag">月售1万+</span>
            <span class="item__tag">起送￥5</span>
            <span class="item__tag">基础运费￥5</span>
          </div>
          <p class="item__hot">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="沃尔玛">
        <div class="nearby__item__wrapper">
          <div class="item__title">沃尔玛</div>
          <div class="item__tags">
            <span class="item__tag">月售1万+</span>
            <span class="item__tag">起送￥5</span>
            <span class="item__tag">基础运费￥5</span>
          </div>
          <p class="item__hot">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
      <div class="nearby__item">
        <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="沃尔玛">
        <div class="nearby__item__wrapper">
          <div class="item__title">沃尔玛</div>
          <div class="item__tags">
            <span class="item__tag">月售1万+</span>
            <span class="item__tag">起送￥5</span>
            <span class="item__tag">基础运费￥5</span>
          </div>
          <p class="item__hot">VIP尊享满89元减4元运费券（每月3张）</p>
        </div>
      </div>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont icon-home"></div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont icon-bag"></div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont icon-order"></div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont icon-my"></div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/style/variables.scss';
@import './assets/style/mixins.scss';

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  overflow-y: auto;
  .location {
    position: relative;
    padding: .16rem .24rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipsis;
    .iconfont {
      position: absolute;
      top: .17rem;
      left: 0;
      font-size: .2rem;
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
      border-radius: .16rem;
      padding: 0 0 0 .32rem;
      width: 100%;
      height: .32rem;
      line-height: .32rem;
      font-size: .14rem;
      color: #b7b7b7;
      background: #f5f5f5;
    }
    .iconfont {
      position: absolute;
      top: .06rem;
      left: .14rem;
      font-size: .16rem;
      color: #b7b7b7;
    }
  }
  .banner {
    margin-top: .12rem;
    height: 0;
    padding-bottom: 25.4%;
    overflow: hidden;
    &__img {
      // 1528 * 388
      width: 100%;
    }
  }
  .icons {
    margin-top: .16rem;
    display: flex;
    flex-flow: row wrap;
    &__item {
      width: 20%;
      &__img {
        display: block;
        margin: 0 auto;
        width: .4rem;
        height: .4rem;
      }
      &__desc {
        margin: .06rem 0 .16rem;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  .gap {
    margin: 0 -0.18rem;
    height: .1rem;
    background: $content-bgcolor;
  }
  .nearby {
    &__title {
      margin: .16rem 0 .02rem;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    &__item {
      padding-top: .12rem;
      display: flex;
      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
      &__wrapper {
        flex: 1;
        border-bottom: 1px solid $content-bgcolor;
        padding-bottom: .12rem;
        .item__title {
          line-height: .22rem;
          font-size: .16rem;
          color: $content-fontcolor;
        }
        .item__tags {
          margin-top: .08rem;
          line-height: .18rem;
          font-size: .13rem;
          color: $content-fontcolor;
          .item__tag {
            margin-right: .16rem;
            white-space: nowrap;
          }
        }
        .item__hot {
          margin: .08rem 0 0;
          line-height: .18rem;
          font-size: .13rem;
          color: #e93b3b;
        }
      }
    }
  }
}
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
