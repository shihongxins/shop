<template>
  <div class="top">
    <div class="top__header">
      <div class="top__header__back" @click="handleBackClick">
        <i class="iconfont icon-back"></i>
      </div>
      <span>确认订单</span>
    </div>
    <div class="top__receiver">
      <h3 class="top__receiver__title">收货地址</h3>
      <template v-if="receiver._id">
        <div class="top__receiver__address">{{receiver.city}} {{receiver.department}} {{receiver.houseNumber}}</div>
        <div class="top__receiver__user">
          <span class="top__receiver__user__name">{{receiver.name}}</span>
          <span class="top__receiver__user__phone">{{receiver.phone}}</span>
        </div>
      </template>
      <div
        class="top__receiver__empty"
        v-else>
        暂无收获地址，去添加
      </div>
      <div
        class="top__receiver__detail"
        @click="handleReceiverClick(receiver._id)">
        <i class="iconfont icon-back"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../../utils/request'

// 加载默认收获地址信息
const useDefaultReceiverEffect = () => {
  const data = reactive({ receiver: {} })
  const getReceiver = async () => {
    const result = await get('/api/user/address')
    if (result && result.errno === 0 && result.data) {
      // 取第一个为默认
      data.receiver = result.data[0]
    }
  }
  getReceiver()
  const { receiver } = toRefs(data)
  // 点击收获地址跳转到地址详情
  const router = useRouter()
  const handleReceiverClick = (id) => {
    router.push({ name: 'AddressEdit', query: { eventType: 'edit', addressId: id } })
  }
  return { receiver, handleReceiverClick }
}

export default {
  name: 'Header',
  setup () {
    const router = useRouter()
    const handleBackClick = () => { router.back() }
    const { receiver, handleReceiverClick } = useDefaultReceiverEffect()
    return { handleBackClick, receiver, handleReceiverClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';
@import '../../../assets/style/mixins.scss';

.top {
  position: relative;
  box-sizing: border-box;
  padding: .2rem .18rem 0; // NOTE: 设计稿上是 40px 它包含了系统状态栏部分，实际上真机浏览器本身也不会占用状态栏，得减去
  // height: 1.39rem;
  height: 1.76rem; // NOTE: 本身高度加上地址超出的高度（不这样计算的话，中部的商品详情定位不好做）
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-size: 100% 1.39rem; // 因为本身高度只有 1.39 所有背景颜色区需要手动指定
  background-repeat: no-repeat;
  &__header {
    position: relative;
    line-height: .22rem;
    font-size: .16rem;
    text-align: center;
    color: $white-fontcolor;
    &__back {
      position: absolute;
      left: 0;
      .iconfont {
        font-size: .22rem;
      }
    }
  }
  &__receiver {
    position: absolute;
    top: .64rem; // = .2 + .22 + .22
    right: .18rem;
    left: .18rem;
    border-radius: .04rem;
    padding: .16rem;
    background: #fff;
    color: $content-fontcolor;
    &__title {
      margin: 0;
      line-height: .22rem;
      font-size: .16rem;
    }
    &__empty {
      padding: .14rem .2rem .06rem 0;
      line-height: .2rem;
      font-size: .14rem;
    }
    &__address {
      padding: .14rem .2rem .06rem 0;
      line-height: .2rem;
      font-size: .14rem;
      @include ellipsis;
    }
    &__user {
      line-height: .18rem;
      font-size: .12rem;
      color: $medium-fontcolor;
      span {
        margin-right: .06rem;
      }
    }
    &__detail {
      position: absolute;
      top: 50%;
      right: .16rem;
      transform: translateY(-50%) rotate(180deg);
      color: $medium-fontcolor;
    }
  }
}
</style>
