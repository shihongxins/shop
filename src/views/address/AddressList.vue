<template>
  <div class="address">
    <AddressHeader
      :status="'manage'"
      @actionBtnClick="handleActionBtnClick"/>
    <div class="address__list">
      <h4 class="address__list__title">我的收货地址</h4>
      <div
        class="address__item"
        v-for="address in addressList"
        :key="address._id">
        <div class="address__item__contact">
          <div class="username">{{address.name}}</div>
          <div class="phone">{{address.phone}}</div>
        </div>
        <p class="address__item__detail">
          {{address.city}} {{address.department}} {{address.houseNumber}}
        </p>
        <router-link
          :to="{
            name: 'AddressEdit',
            query: {
              eventType: 'edit',
              addressId: address._id
            }
          }">
          <i class="address__item__edit__btn iconfont icon-back"></i>
        </router-link>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import AddressHeader from './components/AddressHeader'
import Toast, { showToast } from '../../components/Toast'
import { useRouter } from 'vue-router'

// 用户收货地址列表逻辑
const useAddressListEffect = () => {
  // 加载用户收获地址列表数据
  const data = reactive({ addressList: [] })
  const getAddressList = async () => {
    try {
      const result = await get('/api/user/address')
      if (result && result.errno === 0 && result.data) {
        data.addressList = result.data
      } else {
        showToast(`获取用户收货地址列表失败！${result.message}`)
      }
    } catch (e) {
      showToast(`获取用户收货地址列表出错！${e.message}`)
    }
  }
  getAddressList()
  const { addressList } = toRefs(data)
  // 顶部 header action btn click 事件（新增跳转到详情）
  const router = useRouter()
  const handleActionBtnClick = (etype) => {
    if (etype === 'new') {
      router.push({ name: 'AddressEdit', query: { eventType: etype } })
    }
  }
  return { addressList, handleActionBtnClick }
}

export default {
  name: 'AddressList',
  components: {
    AddressHeader,
    Toast
  },
  setup () {
    return {
      ...useAddressListEffect()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.address {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  a {
    text-decoration: none;
  }
}
.address__list {
  position: absolute;
  top: .44rem;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: .16rem .18rem;
  overflow: hidden auto;
  background: $search-bgcolor;
  line-height: .2rem;
  font-size: .14rem;
  &__title {
    margin: 0;
    font-weight: normal;
    color: $content-fontcolor;
  }
  .address__item {
    position: relative;
    margin-top: .16rem;
    border-radius: .04rem;
    padding: .18rem .16rem;
    background: #fff;
    &__contact {
      margin-right: .63rem;
      color: $light-fontcolor;
      display: flex;
      justify-content: space-between;
    }
    &__detail {
      margin: .08rem .63rem 0 0;
      color: $content-fontcolor;
    }
    &__edit__btn {
      position: absolute;
      right: .16rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: .16rem;
      height: .16rem;
      line-height: .16rem;
      font-size: .16rem;
      transform: rotate(180deg);
      color: $light-fontcolor;
    }
  }
}
</style>
