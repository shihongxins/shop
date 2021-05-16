<template>
  <div class="address__header">
    <div class="address__header__btn" @click="handleBackBtnClick">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="address__header__title">{{header.title}}收货地址</div>
    <div
      class="address__header__btn"
      @click="handleBtnClick(header.eventType)">{{header.eventDesc}}</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const useAddressHeaderEffect = (status, emit) => {
  const router = useRouter()
  const handleBackBtnClick = () => {
    if (status === 'manage') {
      router.push('/user')
    } else {
      router.back()
    }
  }
  const header = computed(() => {
    let title = '管理'
    const action = { eventType: 'save', eventDesc: '保存' }
    switch (status) {
      case 'new':
        title = '新建'
        break
      case 'edit':
        title = '编辑'
        break
      default:
        title = '管理'
        action.eventType = 'new'
        action.eventDesc = '新增'
    }
    return {
      title,
      ...action
    }
  })
  const handleBtnClick = (etype) => {
    emit('actionBtnClick', etype)
  }
  return { header, handleBtnClick, handleBackBtnClick }
}

export default {
  name: 'AddressHeader',
  props: {
    status: {
      type: String,
      default: 'manage'
    }
  },
  setup (props, { emit }) {
    return {
      ...useAddressHeaderEffect(props.status, emit)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.address__header {
  display: flex;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: $content-fontcolor;
  background: #fff;
  &__btn {
    padding: 0 .18rem;
    font-size: .14rem;
    color: $content-fontcolor;
    .iconfont {
      font-size: .2rem;
      color: $btn-back-bgcolor;
    }
  }
  &__title {
    flex: 1;
    font-size: .16rem;
  }
}
</style>
