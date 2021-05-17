<template>
  <div class="user__info">
    <i class="user__info__edit__btn iconfont icon-user-edit"></i>
    <img
      :src="'https://avatars.githubusercontent.com/u/38546728?s=60&v=4'"
      alt="avtatar"
      class="user__info__avatar"
    />
    <div class="user__info__name">
      <h2>{{ "shihongxins" }}</h2>
      <div class="user__info__grade">
        <i class="iconfont icon-star"></i>{{ "16" }}
      </div>
    </div>
    <p class="user__info__account">
      {{ `ID: ${"shihongxins@163.com"}` }}
    </p>
    <div class="hr"></div>
    <ul class="user__assets">
      <li class="user__assets__item">
        <p class="user__assets__item--type">红包</p>
        <p class="user__assets__item--value">218</p>
      </li>
      <li class="user__assets__item">
        <p class="user__assets__item--type">优惠卷</p>
        <p class="user__assets__item--value">12张</p>
      </li>
      <li class="user__assets__item">
        <p class="user__assets__item--type">鲜豆</p>
        <p class="user__assets__item--value">88</p>
      </li>
      <li class="user__assets__item">
        <p class="user__assets__item--type">白条</p>
        <p class="user__assets__item--value">1000</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

// 顶部用户信息部分
.user__info {
  margin-top: .47rem; // NOTE: 留出头像上部分超出与编辑按钮的位置空间
  .iconfont.user__info__edit__btn {
    position: absolute;
    top: -0.47rem;
    right: 0;
    font-size: 0.2rem;
    color: $white-fontcolor;
  }
  // 头像
  &__avatar {
    position: absolute;
    top: -0.47rem;
    left: 50%;
    margin-left: -0.47rem;
    border-radius: 50%;
    width: .94rem;
    height: .94rem;
    background: #C1C0C9;
  }
  // 昵称
  &__name {
    position: relative;
    h2 {
      margin: 0;
      padding-top: .59rem; // 留出头像下部分位置
      line-height: .36rem;
      font-size: .24rem;
      letter-spacing: .02rem;
      color: $userinfo-main-color;
      font-weight: normal;
    }
  }
  // 等级徽章
  &__grade {
    position: absolute;
    bottom: 0.1rem;
    right: .37rem;
    width: .7rem;
    line-height: .32rem;
    font-size: .24rem;
    transform: scale(0.5);
    transform-origin: right bottom;
    background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
    border-radius: .08rem;
    .iconfont {
      margin-right: .04rem;
      border-radius: 50%;
      color: #FFC700;
      background: rgba(0,0,0,0.20);
      vertical-align: middle;
    }
  }
  // 账号 ID
  &__account {
    margin: 0.02rem 0 0;
    line-height: .2rem;
    font-size: .14rem;
    color: #C1C0C9;
  }
  // 分割线
  .hr {
    margin: .12rem 0;
    height: 0;
    border-top: .01rem solid; // TODO: 1px border
    border-color: $content-bgcolor;
  }
  // 用户账户资产
  .user__assets {
    list-style: none;
    margin: 0;
    padding: 0 0 .18rem;
    display: flex;
    &__item {
      flex: 1;
      &--type {
        margin: 0;
        font-size: .12rem;
        color: #C1C0C9;
      }
      &--value {
        margin: 0;
        line-height: .28rem;
        font-size: .2rem;
        color: $userinfo-main-color;
      }
    }
  }
}

</style>
