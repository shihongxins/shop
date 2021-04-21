<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <form action="" class="wrapper__form">
      <div class="wrapper__form__input">
        <input type="text" name="account" id="account" placeholder="请输入手机号">
      </div>
      <div class="wrapper__form__input">
        <input type="password" name="password" id="password" placeholder="请输入密码">
      </div>
      <div class="wrapper__form__input">
        <input type="password" name="password" id="password" placeholder="确认密码">
      </div>
      <div class="wrapper__form__button">
        <button class="button-register" type="button">注册</button>
      </div>
    </form>
    <div class="wrapper__link">
      <a class="wrapper__link-login" @click.prevent="handleGoLogin">已有账号去登录</a>
      <a class="wrapper__link-findpwd">找回密码</a>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleRegister = () => {
    }
    const handleGoLogin = () => {
      router.push({ name: 'Login' })
    }
    return {
      handleRegister,
      handleGoLogin
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .16rem;
    width: .66rem;
    height: .66rem;
  }
  &__form {
    &__input {
      margin: 0 .4rem .16rem;
      input {
        display: block;
        box-sizing: border-box;
        outline: none;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: .06rem;
        padding: 0 .16rem;
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        background: #f9f9f9;
        font-size: .16rem;
        color: $notice-fontcolor;
      }
    }
    &__button {
      margin: .32rem .4rem 0;
      border-radius: .04rem;
      background: #0091ff;
      box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
      button {
        outline: none;
        border: none;
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        font-size: .16rem;
        background: none;
        color: #fff;
      }
    }
  }
  &__link {
    margin-top: .16rem;
    text-align: center;
    a {
      font-size: .14rem;
      color: $notice-fontcolor;
      &:first-child {
        margin-right: 1em;
      }
    }
  }
}
</style>
