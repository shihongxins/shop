<template>
  <div class="search__advice">
    <div class="search__area">
      <div class="search__input__wrapper">
        <SearchInput
          v-autofocus
          @onStatusChange="handleStatusChange" />
      </div>
      <div
        class="search__cancel__btn"
        @click="handleStatusChange('none')">取消</div>
    </div>
    <div
      class="search__advice__group"
      @click="handleAdviceItemClick">
      <div class="search__advice__title">
        <h4>搜索历史</h4>
        <div class="search__advice__clear">清除搜索历史</div>
      </div>
      <div class="search__advice__container">
        <div class="search__advice__item">尖椒肉丝</div>
        <div class="search__advice__item">鲜花</div>
        <div class="search__advice__item">新世纪百货</div>
        <div class="search__advice__item">新鲜水果</div>
        <div class="search__advice__item">玫瑰香槟</div>
        <div class="search__advice__item">牛奶</div>
        <div class="search__advice__item">酸奶</div>
      </div>
    </div>
    <div
      class="search__advice__group"
      @click="handleAdviceItemClick">
      <div class="search__advice__title">
        <h4>搜索建议</h4>
      </div>
      <div class="search__advice__container">
        <div class="search__advice__item">尖椒肉丝</div>
        <div class="search__advice__item">鲜花</div>
        <div class="search__advice__item">新世纪百货</div>
        <div class="search__advice__item">新鲜水果</div>
        <div class="search__advice__item">玫瑰香槟</div>
        <div class="search__advice__item">牛奶</div>
        <div class="search__advice__item">酸奶</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import SearchInput from './SearchInput'
import { autofocus } from '../../../directives/v-autofocus'

export default {
  name: 'SearchAdvice',
  props: {
    searchText: {
      default: () => {
        return inject('searchText', ref(''))
      }
    },
    handleStatusChange: {
      default: () => {
        return inject('handleStatusChange')
      }
    }
  },
  components: {
    SearchInput
  },
  directives: {
    autofocus
  },
  setup (props) {
    const handleAdviceItemClick = (e) => {
      const target = e.target || e.srcElement
      if (target && target.className === 'search__advice__item') {
        // eslint-disable-next-line vue/no-mutating-props
        props.searchText.value = target.innerText
        props.handleStatusChange('change')
      }
    }
    return { handleAdviceItemClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';

.search__advice {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  padding: .16rem .18rem;
  background: #fff;
  .search__area {
    display: flex;
    .search__input__wrapper {
      flex: 1;
    }
    .search__cancel__btn {
      margin-left: .12rem;
      line-height: .32rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
  }
  &__group {
    margin-top: .24rem;
  }
  &__clear {
    font-size: .14rem;
  }
  &__title {
    line-height: .2rem;
    color: $content-fontcolor;
    display: flex;
    justify-content: space-between;
    h4 {
      margin: 0;
      font-size: .16rem;
      font-weight: normal;
    }
  }
  &__container {
    margin: 0 0 0 -0.1rem;
    display: flex;
    flex-flow: row wrap;
  }
  &__item {
    margin: .12rem 0 0 .10rem;
    border-radius: .02rem;
    padding: .08rem .1rem;
    line-height: .16rem;
    font-size: .14rem;
    color: $medium-fontcolor;
    background: $search-bgcolor;
  }
}
</style>
