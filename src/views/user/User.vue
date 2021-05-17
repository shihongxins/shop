<template>
  <div class="user">
    <div class="user__bgimg"></div>
    <div class="user__wrapper">
      <div class="card">
        <UserInfo />
      </div>
      <div class="card">
        <UserFunction />
      </div>
      <div class="card">
        <router-link :to="{path: '/logout'}">
          <div class="user__logout">注销</div>
        </router-link>
      </div>
    </div>
  </div>
  <Docker />
</template>

<script>
import UserInfo from './components/UserInfo'
import UserFunction from './components/UserFunction'
import Docker from '../../components/Docker'

export default {
  name: 'User',
  components: {
    UserInfo,
    UserFunction,
    Docker
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

// 用户主页
.user {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem; // 留出 Docker 区域
  left: 0;
  overflow: hidden;
  a {
    color: inherit;
    text-decoration: none;
  }
  // 用户主页顶部背景
  &__bgimg {
    position: absolute;
    top: 0;
    z-index: -1;
    border-radius: 50%;
    width: 100%;
    height: 2.3rem;
    background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
    transform: scale(1.5);
    transform-origin: center bottom;
  }
  // 卡片容器
  &__wrapper {
    position: absolute;
    top: .6rem;
    right: 0rem;
    bottom: 0;
    left: 0rem;
    overflow: hidden auto; // 可纵向滚动
  }
  .card {
    margin: .16rem .18rem;
    border-radius: .08rem;
    background: #fff;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    text-align: center;
    position: relative;
  }
  &__logout {
    border-radius: 0.04rem;
    height: 0.48rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    color: #fff;
    background: $btn-bgcolor;
    box-shadow: 0 0.04rem 0.08rem 0 rgb(0 145 255 / 32%);
  }
}
</style>
