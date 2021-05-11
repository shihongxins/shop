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
      <div class="wrapper__form__input">
        <input
          type="password"
          name="password"
          placeholder="确认密码"
          autocomplete="new-password"
          v-model="comfirmPwd">
      </div>
      <div class="wrapper__form__button">
        <button class="button-register" type="button" @click="handleRegister">注册</button>
      </div>
    </form>
    <div class="wrapper__link">
      <a class="wrapper__link-login" @click.prevent="handleJumpLogin">已有账号去登录</a>
      <a class="wrapper__link-findpwd">找回密码</a>
    </div>
    <Toast />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import Toast, { showToast } from '../../components/Toast.vue'

// 注册业务逻辑
const useRegisterEffect = () => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    comfirmPwd: ''
  })
  const handleRegister = async () => {
    if (data.username.trim() === '' || data.password.trim() === '' || data.comfirmPwd.trim() === '') {
      showToast('请输入完整注册信息')
      return
    }
    if (data.comfirmPwd !== data.password) {
      showToast('两次密码不一致')
      return
    }
    try {
      showToast('... ...')
      const result = await post('/api/user/register', data, { headers: { 'content-type': 'application/json' } })
      if (result && result.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败' + JSON.stringify(result))
      }
    } catch (e) {
      showToast(`注册出错，${e.message}`)
    }
  }

  const { username, password, comfirmPwd } = toRefs(data)
  return {
    username, password, comfirmPwd, handleRegister
  }
}

// 跳转业务逻辑
const useJumpLoginEffect = () => {
  const router = useRouter()
  const handleJumpLogin = () => {
    router.push({ name: 'Login' })
  }

  return { handleJumpLogin }
}

export default {
  name: 'Register',
  components: {
    Toast
  },
  // 理解 Composition API 中的 Setup 函数，职责仅仅是业务流程的调度
  // 而具体业务要看对应的方法，减少了业务与组件的耦合
  setup () {
    const { username, password, comfirmPwd, handleRegister } = useRegisterEffect()
    const { handleJumpLogin } = useJumpLoginEffect()
    return {
      username,
      password,
      comfirmPwd,
      handleRegister,
      handleJumpLogin
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
