<template>
  <div class="search__input__wrapper">
    <i class="iconfont icon-search"></i>
    <input
      type="search"
      autocomplete="off"
      class="search__input"
      :placeholder="placeholder"
      :value="searchText.value"
      @focus="onStatusChange('focus',$event)"
      @input="onStatusChange('input',$event)"
      @change="onStatusChange('change',$event)"
      @blur="onStatusChange('blur',$event)"
      @keypress.enter="onStatusChange('change',$event)">
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      default: () => {
        return inject('placeholder', '')
      }
    },
    searchText: {
      default: () => {
        return inject('searchText', ref(''))
      }
    }
  },
  setup (props, { emit }) {
    const status = ref('none')
    const onStatusChange = (st, e) => {
      // 因为是修改 props 不能使用 v-model 双向绑定，得通过操作 DOM 手动更新
      const target = e.target || e.srcElement
      if (target) {
        // eslint-disable-next-line vue/no-mutating-props
        props.searchText.value = target.value
      }
      status.value = (st || 'none')
      emit('onStatusChange', status.value)
    }
    return { status, onStatusChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.search__input__wrapper {
  position: relative;
  .icon-search {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto .16rem;
    height: .16rem; // 垂直居中
    font-size: .16rem;
    color: $search-fontcolor;
  }
}
.search__input {
  outline: none;
  margin: 0;
  border: none;
  border-radius: .16rem;
  padding: 0 1em 0 3em;
  width: 100%;
  height: .32rem;
  line-height: .32rem;
  font-size: .14rem;
  color: $content-fontcolor;
  background: $search-bgcolor;
  &::placeholder {
    color: $search-fontcolor;
  }
}
</style>
