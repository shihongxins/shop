<template>
  <div class="address">
    <AddressHeader
      :status="eventType"
      @actionBtnClick="handleActionBtnClick"/>
      <div class="address__form__wrapper">
        <div class="address__form">
          <div class="address__form__item">
            <label>
              所在城市：
              <input type="text" name="city" placeholder="如重庆市" v-model="address.city">
            </label>
          </div>
          <div class="address__form__item">
            <label>
              小区/大厦/学校：
              <input type="text" name="department" placeholder="如理工大学北苑" v-model="address.department">
            </label>
          </div>
          <div class="address__form__item">
            <label>
              楼号-门牌号：
              <input type="text" name="housenumber" placeholder="如B栋4-11号" v-model="address.houseNumber">
            </label>
          </div>
          <div class="address__form__item">
            <label>
              收货人：
              <input type="text" name="name" placeholder="请填写收货人姓名" v-model="address.name">
            </label>
          </div>
          <div class="address__form__item">
            <label>
              联系电话：
              <input type="text" name="phone" placeholder="请填写收货人联系电话" v-model="address.phone">
            </label>
          </div>
        </div>
      </div>
  </div>
  <Toast />
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { get, post } from '../../utils/request'
import AddressHeader from './components/AddressHeader'
import Toast, { showToast } from '../../components/Toast'
import { reactive, toRefs } from 'vue'

const useAddressEditEffect = () => {
  // 根据用户地址 id 加载用户收获地址详情数据
  const route = useRoute()
  const { eventType, addressId } = route.query
  const data = reactive({ address: {} })
  const getAddress = async () => {
    try {
      const result = await get(`/api/user/address/${addressId}`)
      if (result && result.errno === 0 && result.data) {
        data.address = result.data
      } else {
        showToast(`获取用户收货地址详情失败！${result.message}`)
      }
    } catch (e) {
      showToast(`获取用户收货地址详情出错！${e.message}`)
    }
  }
  if (eventType === 'edit' && addressId > 0) {
    getAddress()
  }
  const { address } = toRefs(data)
  // 顶部 header action btn click 事件（保存跳转到管理）
  const router = useRouter()
  const handleActionBtnClick = async (etype) => {
    if (etype === 'save') {
      const newaddress = address.value
      if (newaddress && newaddress.name && newaddress.phone && newaddress.department) {
        const postUrl = '/api/user/address' + ((eventType === 'edit' && addressId > 0) ? `/${addressId}` : '')
        try {
          const result = await post(postUrl, newaddress, { headers: { 'content-type': 'application/json' } })
          if (result && result.errno === 0) {
            showToast('更新收货地址成功！')
            setTimeout(() => {
              router.push({ name: 'AddressList' })
            }, 2000)
          } else {
            showToast(`保存收货地址信息失败！${result.message}`)
          }
        } catch (e) {
          showToast(`保存收货地址信息出错！${e.message}`)
        }
      } else {
        showToast('收货地址信息填写不完整！（姓名，电话，小区等为必填项）')
      }
    }
  }
  return {
    eventType,
    address,
    handleActionBtnClick
  }
}
export default {
  name: 'AddressList',
  components: {
    AddressHeader,
    Toast
  },
  setup () {
    return {
      ...useAddressEditEffect()
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

.address__form__wrapper {
  position: absolute;
  top: .44rem;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  overflow: hidden auto;
  background: $search-bgcolor;
}
.address__form{
  margin-top: .12rem;
  padding: 0 .18rem;
  line-height: .2rem;
  font-size: .14rem;
  background: #fff;
  &__item {
    border-top: .01rem solid $content-bgcolor; // TODO: 1px border
    padding: .12rem 0;
    &:first-child {
      border-top: none;
    }
  }
  label {
    color: $medium-fontcolor;
    display: flex;
  }
  input {
    flex: 1;
    outline: none;
    margin: 0;
    border: none;
    padding: 0;
    color: #3F3F3F;
    background: none;
  }
}
</style>
