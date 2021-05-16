<template>
  <div class="wrapper">
    <img class="wrapper__img" src="https://shihongxins.github.io/data-mock/shop/imgs/user.png" alt="">
    <form action="" class="wrapper__form" autocomplete="off">
      <div class="wrapper__form__input">
        <input
          type="text"
          name="username"
          placeholder="请输入手机号"
          autocomplete="off"
          v-model="username">
      </div>
      <div class="wrapper__form__input">
        <input
          type="password"
          name="password"
          placeholder="请输入密码"
          autocomplete="new-password"
          v-model="password">
      </div>
      <div class="wrapper__form__button">
        <button class="button-login" type="button" @click="handleLogin">登录</button>
      </div>
    </form>
    <div class="wrapper__link">
      <a class="wrapper__link-register" @click.prevent="handleJumpRegister">立即注册</a>
      <a class="wrapper__link-findpwd">找回密码</a>
    </div>
  </div>
  <Toast />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import Toast, { showToast } from '../../components/Toast.vue'

// 登录业务逻辑
const useLoginEffect = () => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    if (data.username.trim() === '' || data.password.trim() === '') {
      showToast('请输入完整登录信息')
      return
    }
    try {
      showToast('... ...')
      const result = await post('/api/user/login', data, { headers: { 'content-type': 'application/json' } })
      if (result.errno === 0) {
        showToast('登录成功')
        localStorage.setItem('isAuthenticated', 'true')
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败' + JSON.stringify(result))
      }
    } catch (e) {
      showToast(`登录出错，${e.message}`)
    }
  }

  const { username, password } = toRefs(data)
  return {
    username, password, handleLogin
  }
}

// 跳转业务逻辑
const useJumpRegisterEffect = () => {
  const router = useRouter()
  const handleJumpRegister = () => {
    router.push({ name: 'Register' })
  }

  return { handleJumpRegister }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  // 理解 Composition API 中的 Setup 函数，职责仅仅是业务流程的调度
  // 而具体业务要看对应的方法，减少了业务与组件的耦合
  setup () {
    const { username, password, handleLogin } = useLoginEffect()
    const { handleJumpRegister } = useJumpRegisterEffect()
    return {
      username,
      password,
      handleLogin,
      handleJumpRegister
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
        border: 1px solid rgba(0,0,0,0.1); // TODO: 1px border
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
      background: $btn-bgcolor;
      box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
      button {
        outline: none;
        border: none;
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        font-size: .16rem;
        background: none;
        color: $white-fontcolor;
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
