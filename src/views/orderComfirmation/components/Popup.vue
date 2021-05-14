<template>
  <div class="popup" v-if="popupShowType!='none'">
    <div class="popup__mask">
      <div class="popup__content" v-if="popupShowType=='comfirm'">
        <h3 class="popup__content__title">确认离开收银台吗？</h3>
        <p class="popup__content__desc">请尽快完成支付，否则将被取消</p>
        <div class="popup__content__buttons">
          <button
            class="cancel"
            @click="handleCancelClick">取消订单</button>
          <button
            class="comfirmed"
            @click="handleComfirmClick">确认支付</button>
        </div>
      </div>
      <div class="popup__content" v-if="popupShowType=='success'">
        <div class="popup__content__icons">
          <i class="iconfont icon-error" @click="handleCancelClick"></i>
          <i class="iconfont icon-success"></i>
        </div>
        <h3 class="popup__content__title">支付成功，等待配送</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const popupShowType = ref('none')
export const changePopupShowType = (type) => {
  if (['none', 'comfirm', 'success'].indexOf(type) > -1) {
    popupShowType.value = type
  } else {
    popupShowType.value = 'none'
  }
}
// 弹出框状态操作逻辑
const usePopupEffect = (emit) => {
  const handleCancelClick = () => {
    emit('popupButtonClick', 'cancel')
  }
  const handleComfirmClick = () => {
    emit('popupButtonClick', 'comfirmed')
  }
  return { popupShowType, changePopupShowType, handleCancelClick, handleComfirmClick }
}

export default {
  name: 'Popup',
  setup (props, { emit }) {
    return {
      ...usePopupEffect(emit)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.popup__mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0,0,0,0.50);
}
.popup__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: .04rem;
  width: 3rem;
  height: 1.56rem;
  background: $white-fontcolor;
  text-align: center;
  &__icons {
    height: calc(1.56rem - 0.81rem);
    position: relative;
    .icon-error {
      position: absolute;
      top: .12rem;
      right: .12rem;
      font-size: .14rem;
      color: $medium-fontcolor;
    }
    .icon-success {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      font-size: .32rem;
      font-weight: bold;
      color: #000;
    }
  }
  &__title {
    margin: .24rem 0 0;
    line-height: .25rem;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__desc {
    margin: .08rem 0 0;
    line-height: .2rem;
    font-size: .14rem;
    color: $medium-fontcolor;
  }
  &__buttons {
    margin: .24rem .58rem;
    display: flex;
    justify-content: space-between;
    button {
      border: .01rem solid #4FB0F9; // TODO: 1px border
      border-radius: .16rem;
      width: .8rem;
      height: .32rem;
      line-height: .2rem;
      font-size: .14rem;
      &.cancel {
        color: $btn-bgcolor;
        background: $white-fontcolor;
      }
      &.comfirmed {
        color: $white-fontcolor;
        background: #4FB0F9;
      }
    }
  }
}
</style>
